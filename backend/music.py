from flask import Flask, send_from_directory
from flask_socketio import SocketIO, emit
import numpy as np
import pyaudio
import json
import time
from scipy.signal import butter, lfilter
from flask_cors import CORS
import os
import threading
from music21 import converter, note, chord

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

# Global variables to control the recording process
recording_thread = None
is_recording = False
played_notes_list = []  # List to store played notes


######################################################################
# Constants for pitch detection
NOTE_MIN = 21      # A0
NOTE_MAX = 108     # C8
FSAMP = 22050      # Sampling frequency in Hz
FRAME_SIZE = 2048  # Increased for better frequency resolution
FRAMES_PER_FFT = 4 # FFT takes average across how many frames?

######################################################################
# Derived quantities
SAMPLES_PER_FFT = FRAME_SIZE * FRAMES_PER_FFT
FREQ_STEP = float(FSAMP) / SAMPLES_PER_FFT

# Note names
NOTE_NAMES = 'C C# D D# E F F# G G# A A# B'.split()

######################################################################
# Helper functions for pitch detection
def freq_to_number(f): return 69 + 12 * np.log2(f / 440.0)
def number_to_freq(n): return 440 * 2.0**((n - 69) / 12.0)
def note_name(n): return NOTE_NAMES[int(n) % 12] + str(int(n / 12) - 1)

def note_to_fftbin(n): return number_to_freq(n) / FREQ_STEP

# Band-pass filter to isolate the frequency range of interest
def bandpass_filter(data, lowcut, highcut, fs, order=5):
    nyquist = 0.5 * fs
    low = lowcut / nyquist
    high = highcut / nyquist
    b, a = butter(order, [low, high], btype='band')
    return lfilter(b, a, data)

# Harmonic Product Spectrum (HPS) for refining frequency detection
def harmonic_product_spectrum(fft, num_harmonics=5):
    hps = fft.copy()
    for harmonic in range(2, num_harmonics + 1):
        downsampled = fft[::harmonic]
        hps[:len(downsampled)] *= downsampled
    return hps

######################################################################
# Function to check if a played note matches the expected note
def check_note_accuracy(played_note, played_time, expected_notes, processed_notes, grace_period=150):


    for i, expected_note in enumerate(expected_notes):
        if i in processed_notes:
            continue

        start_time = expected_note['start_time'] - grace_period
        end_time = expected_note['end_time'] + grace_period

        if start_time <= played_time <= end_time:
            processed_notes.add(i)
            if played_note == expected_note['note']:
                return f"Correct: Played {played_note} at {played_time:.2f} ms (Expected: {expected_note['note']})"
            else:
                return f"Incorrect: Played {played_note} at {played_time:.2f} ms (Expected: {expected_note['note']})"
    return None

######################################################################
# Audio processing function
def audio_processing():
    global is_recording, feedback_list, bpm

    try:
        json_file_path = os.path.join(os.path.dirname(__file__), 'songs', 'expected_notes.json')
        with open(json_file_path, 'r') as f:
            expected_notes = json.load(f)

        # Get min/max index within FFT of notes we care about
        imin = max(0, int(np.floor(note_to_fftbin(NOTE_MIN - 1))))
        imax = min(SAMPLES_PER_FFT, int(np.ceil(note_to_fftbin(NOTE_MAX + 1))))

        buf = np.zeros(SAMPLES_PER_FFT, dtype=np.float32)
        
        stream = pyaudio.PyAudio().open(format=pyaudio.paInt16,
                                        channels=1,
                                        rate=FSAMP,
                                        input=True,
                                        frames_per_buffer=FRAME_SIZE)
        stream.start_stream()

        window = 0.5 * (1 - np.cos(np.linspace(0, 2 * np.pi, SAMPLES_PER_FFT, False)))
        
        time.sleep(0.05)
        start_time = time.time()
        processed_notes = set() 

        while is_recording:
            # Shift the buffer down and new data in
            buf[:-FRAME_SIZE] = buf[FRAME_SIZE:]
            buf[-FRAME_SIZE:] = np.frombuffer(stream.read(FRAME_SIZE, exception_on_overflow=False), np.int16)

            # Apply band-pass filter
            buf[-FRAME_SIZE:] = bandpass_filter(buf[-FRAME_SIZE:], 27.5, 4186, FSAMP)

            # Run the FFT on the windowed buffer
            fft = np.fft.rfft(buf * window)

            # Apply HPS to refine the frequency detection
            hps = harmonic_product_spectrum(np.abs(fft))
            freq = (hps[imin:imax].argmax() + imin) * FREQ_STEP

            # Get note number and nearest note
            n = freq_to_number(freq)
            n0 = int(round(n))

            # Calculate the timestamp in milliseconds
            current_time = time.time()
            played_time = (current_time - start_time) * 1000

            # Get the note name
            played_note = note_name(n0)

            played_notes_list.append({"note": played_note})

            # Compare the detected note with the expected notes
            result = check_note_accuracy(played_note, played_time, expected_notes, processed_notes, 150)
            if result:
                print(result)
                socketio.emit('note_feedback', {'message': result})

        stream.stop_stream()
        stream.close()
        pyaudio.PyAudio().terminate()
    except Exception as e:
        print(f"An error occurred: {e}")

######################################################################
# SocketIO event handlers
@socketio.on('start_recording')
def start_recording(data):
    global is_recording, recording_thread, bpm

    if not is_recording:
        is_recording = True
        bpm = data.get('bpm', 120)  # Default to 120 BPM if not provided
        # Emit countdown to the frontend
        for i in range(3, 0, -1):
            socketio.emit('countdown', {'count': i})
            time.sleep(1)
        socketio.emit('countdown', {'count': 'Go!'})

        # Start the recording thread
        time.sleep(0.03)  ## USE THIS VALUE TO MAKE SURE TIMING IS GOOD WITH MUSICXML, note: first note is still not working
        recording_thread = threading.Thread(target=audio_processing)
        recording_thread.start()
        emit('recording_status', {'status': 'started'})

@socketio.on('send_sheet_music')
def handle_sheet_music(data):
    global bpm
    try:
        # Save the received sheet music to a file with UTF-16 encoding
        file_path = os.path.join(os.path.dirname(__file__), 'songs', 'received_sheet_music.xml')
        with open(file_path, 'w', encoding='utf-16') as f:
            f.write(data['doc'])  # Save the MusicXML content

        print("Sheet music received and saved.")

        # Parse the MusicXML file and generate expected notes
        expected_notes = []
        # Open the file with UTF-16 encoding for parsing
        score = converter.parse(file_path, encoding='utf-16')
        current_time = 0.0  # Start time in milliseconds

        # Get the BPM from the data or use the global bpm
        bpm = data.get('bpm', bpm)  # Use the provided BPM or fallback to the global BPM
        beat_duration_ms = 60000 / bpm  # Duration of a quarter note in milliseconds
        print(score.flat.notes)
        for element in score.flat.notes:
            if isinstance(element, note.Note):
                note_name = element.nameWithOctave
                pitch = element.pitch  # Access the pitch object
                print(f"Note: {note_name}, Pitch: {pitch}, Octave: {pitch.octave}")
                duration_ms = element.quarterLength * beat_duration_ms  # Adjust duration based on BPM

                # Ensure duration is not zero
                if duration_ms <= 0:
                    duration_ms = beat_duration_ms  # Default to one beat duration

                expected_notes.append({
                    "note": note_name,
                    "start_time": current_time,
                    "end_time": current_time + duration_ms,
                    "correct": False  # Initialize as incorrect
                })
                current_time += duration_ms  # Increment current time by the note's duration

        print("Expected Notes:", json.dumps(expected_notes, indent=4))
        # Save the expected notes to a JSON file
        json_file_path = os.path.join(os.path.dirname(__file__), 'songs', 'expected_notes.json')
        with open(json_file_path, 'w', encoding='utf-8') as json_file:
            json.dump(expected_notes, json_file, indent=4)

        print("Expected notes generated and saved.")
        emit('sheet_music_status', {'status': 'received'})  # Acknowledge receipt
    except Exception as e:
        print(f"Error processing sheet music: {e}")
        emit('sheet_music_status', {'status': 'error', 'message': str(e)})

def provide_feedback():
    try:
        # Load the expected notes
        json_file_path = os.path.join(os.path.dirname(__file__), 'songs', 'expected_notes.json')
        with open(json_file_path, 'r') as f:
            expected_notes = json.load(f)

        # Parse the original MusicXML file
        file_path = os.path.join(os.path.dirname(__file__), 'songs', 'received_sheet_music.xml')
        score = converter.parse(file_path)

        # Compare played notes with expected notes
        for played_note, expected_note in zip(played_notes_list, expected_notes):
            
            if(played_note['note'] == expected_note['note']):
                    expected_note['correct'] = True

        for expected_note in expected_notes:
            if not expected_note.get('correct', False):  # Check if 'correct' is False
                    if (isinstance(element, note.Note) and
                        element.nameWithOctave == expected_note["note"]):
                        element.style.color = "red"  # Mark the note as red

        # Save the modified MusicXML file
        modified_file_path = os.path.join(os.path.dirname(__file__), 'songs', 'modified_sheet_music.xml')
        score.write('musicxml', fp=modified_file_path)

        print("Modified sheet music saved with incorrect notes highlighted.")

        # Clear the played notes list for the next recording session
        played_notes_list.clear()
    except Exception as e:
        print(f"Error processing played notes: {e}")

@socketio.on('stop_recording')
def stop_recording():
    global is_recording, played_notes_list
    print("Stopping recording...")
    if is_recording:
        is_recording = False
        provide_feedback()

@app.route('/songs/<filename>')
def get_song_file(filename):
    return send_from_directory('songs', filename)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=1111)