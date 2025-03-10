import pyaudio
import numpy as np
import librosa
import sounddevice as sd
import soundfile as sf
from flask import Flask, jsonify
from flask_cors import CORS
import threading

# Flask setup
app = Flask(__name__)
cors = CORS(app, origins='*')  # Allow requests from your frontend's origin

# pyaudio setup
p = pyaudio.PyAudio()
BUFFER_SIZE = 2048  # Increased buffer size
SAMPLE_RATE = 44100

# Global variables to store the detected pitch and noise levels
detected_pitch_levels = []
detected_noise_levels = []
baseline_noise_level = None
recorded_audio = []

def calculate_rms(audio_data):
    return np.sqrt(np.mean(np.square(audio_data)))

def calculate_db(rms, reference_level=1):
    # Assuming a reference level of 1 for the RMS value
    return 20 * np.log10(rms / reference_level + 1e-6)  # Adding a small value to avoid log(0)

def normalize_audio(audio_data):
    max_amplitude = np.max(np.abs(audio_data))
    if max_amplitude > 0:
        return audio_data / max_amplitude
    return audio_data

def set_baseline_noise_level():
    global baseline_noise_level
    # Open audio stream
    stream = p.open(format=pyaudio.paFloat32,
                    channels=1,
                    rate=SAMPLE_RATE,
                    input=True,
                    frames_per_buffer=BUFFER_SIZE)
    try:
        # Record audio for 5 seconds to determine baseline noise level
        print("Calibrating baseline noise level for 5 seconds...")
        frames = []
        for _ in range(0, int(SAMPLE_RATE / BUFFER_SIZE * 5)):
            data = stream.read(BUFFER_SIZE, exception_on_overflow=False)
            frames.append(data)

        # Convert recorded frames into a numpy array
        audio_data = np.frombuffer(b''.join(frames), dtype=np.float32)

        # Normalize the audio to 0 dB
        normalized_audio = normalize_audio(audio_data)

        # Calculate the RMS value for the baseline noise
        baseline_rms = calculate_rms(normalized_audio)
        baseline_noise_level = calculate_db(baseline_rms)
        print(f"Baseline noise level set to: {baseline_noise_level:.2f} dB")
    except Exception as e:
        print(f"Error during baseline calibration: {e}")
    finally:
        # Close the audio stream
        stream.stop_stream()
        stream.close()

# Record for 5 seconds and print pitches and dB levels for each 10 milliseconds
def detect_pitch():
    global detected_pitch_levels, detected_noise_levels, baseline_noise_level, recorded_audio
    detected_pitch_levels = []  # Reset the pitch levels list
    detected_noise_levels = []  # Reset the noise levels list
    recorded_audio = []  # Reset the recorded audio

    if baseline_noise_level is None:
        print("Error: Baseline noise level not set. Please calibrate the baseline noise level first.")
        return

    # Open audio stream
    stream = p.open(format=pyaudio.paFloat32,
                    channels=1,
                    rate=SAMPLE_RATE,
                    input=True,
                    frames_per_buffer=BUFFER_SIZE)
    try:
        # Record audio for 5 seconds
        print("Recording for 5 seconds...")
        frames = []
        for _ in range(0, int(SAMPLE_RATE / BUFFER_SIZE * 5)):
            data = stream.read(BUFFER_SIZE, exception_on_overflow=False)
            frames.append(data)

        # Convert recorded frames into a numpy array
        audio_data = np.frombuffer(b''.join(frames), dtype=np.float32)
        recorded_audio.extend(audio_data)

        # Normalize the audio to 0 dB
        normalized_audio = normalize_audio(audio_data)

        # Process audio in 10-millisecond chunks for pitch and dB level detection
        chunk_size = int(SAMPLE_RATE * 0.01)  # 10 milliseconds
        total_chunks = len(normalized_audio) // chunk_size

        for i in range(total_chunks):
            chunk = normalized_audio[i * chunk_size:(i + 1) * chunk_size]

            # Use librosa's piptrack function to detect pitch from the chunk
            pitches, magnitudes = librosa.core.piptrack(y=chunk, sr=SAMPLE_RATE)

            # Find the index of the maximum magnitude in the magnitude matrix
            index = magnitudes.argmax()

            # Get the corresponding pitch value at that index
            pitch = pitches.flatten()[index]  # Use flatten() to access the pitch as a 1D array

            # Print detected pitch to the console if the pitch is greater than zero
            if pitch > 0:
                print(f"Pitch detected at {i * 10} ms: {pitch:.2f} Hz")
                detected_pitch_levels.append(pitch)
            else:
                print(f"No pitch detected at {i * 10} ms.")
                detected_pitch_levels.append(None)

            # Calculate the RMS value for the chunk
            rms = calculate_rms(chunk)
            db_level = calculate_db(rms)

            # Adjust the dB level based on the baseline noise level
            adjusted_db = db_level - baseline_noise_level
            if adjusted_db < 0:
                adjusted_db = 0

            print(f"dB level at {i * 10} ms: {adjusted_db:.2f} dB")
            detected_noise_levels.append(adjusted_db)

        # Play back the recorded audio
        print("Playing back the recorded audio...")
        sd.play(normalized_audio, SAMPLE_RATE)
        sd.wait()  # Wait until the audio playback is finished
    except Exception as e:
        print(f"Error during pitch detection: {e}")
    finally:
        # Close the audio stream
        stream.stop_stream()
        stream.close()

@app.route('/test', methods=['GET'])
def test():
    return jsonify({"message": "API is working"})

@app.route('/pitch', methods=['GET'])
def get_pitch():
    global detected_pitch_levels
    # Convert detected_pitch_levels to a list of standard Python floats
    pitch_levels = [float(level) if level is not None else None for level in detected_pitch_levels]
    # Return the detected pitch levels
    return jsonify({"pitch_levels": pitch_levels})

@app.route('/noise', methods=['GET'])
def get_noise():
    global detected_noise_levels
    # Convert detected_noise_levels to a list of standard Python floats
    noise_levels = [float(level) for level in detected_noise_levels]
    # Return the detected noise levels
    return jsonify({"noise_levels": noise_levels})

@app.route('/start_pitch_detection', methods=['GET'])
def start_pitch_detection():
    thread = threading.Thread(target=detect_pitch)
    thread.daemon = True
    thread.start()
    return jsonify({"message": "Pitch detection started"})

@app.route('/calibrate_baseline', methods=['GET'])
def calibrate_baseline():
    thread = threading.Thread(target=set_baseline_noise_level)
    thread.daemon = True
    thread.start()
    return jsonify({"message": "Baseline noise level calibration started"})

if __name__ == '__main__':
    app.run(debug=True, port=8080)