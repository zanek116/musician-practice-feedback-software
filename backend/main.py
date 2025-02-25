import pyaudio
import numpy as np
import librosa
import soundfile as sf
import sounddevice as sd
from flask import Flask, jsonify
from flask_cors import CORS
import threading

# Flask setup
app = Flask(__name__)
cors = CORS(app, origins='*')

# pyaudio setup
p = pyaudio.PyAudio()
BUFFER_SIZE = 1024
SAMPLE_RATE = 44100

# Global variable to store the detected pitch
detected_pitch = None

# Record for 5 seconds and print pitches for each second
def detect_pitch():
    global detected_pitch
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
        
        # Process audio in 1-second chunks
        for i in range(5):
            chunk = audio_data[i * SAMPLE_RATE:(i + 1) * SAMPLE_RATE]
            
            # Use librosa's piptrack function to detect pitch from the chunk
            pitches, magnitudes = librosa.core.piptrack(y=chunk, sr=SAMPLE_RATE)
            
            # Find the index of the maximum magnitude in the magnitude matrix
            index = magnitudes.argmax()
            
            # Get the corresponding pitch value at that index
            pitch = pitches.flatten()[index]  # Use flatten() to access the pitch as a 1D array
            
            # Print detected pitch to the console if the pitch is greater than zero
            if pitch > 0:
                print(f"Pitch detected at second {i + 1}: {pitch} Hz")
                detected_pitch = pitch
            else:
                print(f"No pitch detected at second {i + 1}.")
        
        # Play back the recorded audio
        print("Playing back the recorded audio...")
        sd.play(audio_data, SAMPLE_RATE)
        sd.wait()  # Wait until the audio playback is finished
    finally:
        # Close the audio stream
        stream.stop_stream()
        stream.close()

@app.route('/test', methods=['GET'])
def test(): 
    return jsonify(
        {
            "message": "API is working"
        }
    )

@app.route('/pitch', methods=['GET'])
def get_pitch():
    global detected_pitch
    # Convert detected_pitch to a standard Python float
    pitch_value = float(detected_pitch) if detected_pitch is not None else None
    # Return the detected pitch value
    return jsonify({"pitch": pitch_value})

@app.route('/start_pitch_detection', methods=['GET'])
def start_pitch_detection():
    thread = threading.Thread(target=detect_pitch)
    thread.daemon = True
    thread.start()
    return jsonify({"message": "Pitch detection started"})

if __name__ == '__main__': 
    app.run(debug=True, port=8080)