from flask import Flask
from flask_socketio import SocketIO, emit
import numpy as np
import pyaudio
import json
import time
from scipy.signal import butter, lfilter
import os
import threading

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

# Global variables to control the recording process
recording_thread = None
is_recording = False

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
    global is_recording

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

            # Compare the detected note with the expected notes
            result = check_note_accuracy(played_note, played_time, expected_notes, processed_notes, grace_period=100)
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
def start_recording():
    global is_recording, recording_thread

    if not is_recording:
        is_recording = True

        # Emit countdown to the frontend
        for i in range(3, 0, -1):
            socketio.emit('countdown', {'count': i})
            time.sleep(1)
        socketio.emit('countdown', {'count': 'Go!'})

        # Start the recording thread
        recording_thread = threading.Thread(target=audio_processing)
        recording_thread.start()
        emit('recording_status', {'status': 'started'})

@socketio.on('stop_recording')
def stop_recording():
    global is_recording

    if is_recording:
        is_recording = False
        emit('recording_status', {'status': 'stopped'})

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=1111)