import React, { useEffect, useRef, useState } from 'react';
import { Fraction, OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import io from 'socket.io-client';
import './Songs.css';
import { doc } from './musicXML';

const socket = io('http://localhost:1111'); // Connect to the backend WebSocket

const Songs = () => {
  const osmdRef = useRef<OpenSheetMusicDisplay | null>(null);
  const [feedback, setFeedback] = useState<string[]>([]);
  const [recordingStatus, setRecordingStatus] = useState<string>('stopped');
  const [countdown, setCountdown] = useState<string | number | null>(null);
  const [isRecording, setIsRecording] = useState(false); // Manage recording state
  const [isCursorMoving, setIsCursorMoving] = useState(false); // Track cursor movement state
  const [showFeedback, setShowFeedback] = useState(false); // Control feedback visibility
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Track the active timeout
  const [bpm, setBpm] = useState(120); // Default BPM is 120

  useEffect(() => {

    // Listen for acknowledgment from the backend
    socket.on('sheet_music_status', (data) => {
      if (data.status === 'received') {
        console.log('Sheet music successfully sent to the backend.');
      } else if (data.status === 'error') {
        console.error('Error sending sheet music:', data.message);
      }
    });

    // Initialize OpenSheetMusicDisplay
    osmdRef.current = new OpenSheetMusicDisplay("osmdContainer");
    osmdRef.current.setOptions({
      backend: "svg",
      drawTitle: true,
      autoResize: true,
    });
    osmdRef.current.load(doc).then(() => {
      if (osmdRef.current) {
        osmdRef.current.render();
      }
    });

    // Listen for feedback messages from the backend
    socket.on('note_feedback', (data) => {
      setFeedback((prevFeedback) => [...prevFeedback, data.message]);
    });

    // Listen for recording status updates
    socket.on('recording_status', (data) => {
      setRecordingStatus(data.status);
    });

    // Listen for countdown updates
    socket.on('countdown', (data) => {
      setCountdown(data.count);

      // Start the cursor movement when countdown reaches zero
      if (data.count === "Go!") {
        afterRender();
      }
    });

    // Cleanup on component unmount
    return () => {
      socket.off('sheet_music_status');
      socket.off('note_feedback');
      socket.off('recording_status');
      socket.off('countdown');
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // Clear any active timeout
      }
    };
  }, []);

  const startRecording = () => {
    socket.emit('send_sheet_music', { doc, bpm });
    osmdRef.current.load(doc).then(() => {
        if (osmdRef.current) {
          osmdRef.current.render();
        }
    });

    setFeedback([]); // Clear previous feedback
    setCountdown(null); // Reset countdown
    setShowFeedback(false); // Hide feedback while recording
    socket.emit('start_recording', {bpm});
    setIsRecording(true); // Disable the Start button
  };

  const stopRecording = () => {
    socket.emit('stop_recording');
    setIsRecording(false); // Enable the Start button
    setShowFeedback(true); // Show feedback after stopping recording
  
    if (osmdRef.current) {
      const cursor = osmdRef.current.cursor;
      cursor.reset(); // Reset the cursor to the beginning
      cursor.hide(); // Hide the cursor
    }
    setIsCursorMoving(false); // Mark cursor as stopped
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any active timeout
      timeoutRef.current = null;
    }
  
    // Fetch the modified MusicXML file from the backend
    fetch('http://localhost:1111/songs/modified_sheet_music.xml')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch modified sheet music');
        }
        return response.text();
      })
      .then((modifiedDoc) => {
        if (osmdRef.current) {
          osmdRef.current.load(modifiedDoc).then(() => {
            osmdRef.current.render(); // Render the modified sheet music
          });
        }
      })
      .catch((error) => {
        console.error('Error loading modified sheet music:', error);
      });
  };

  const bpmRef = useRef(bpm); // Create a ref to store the current BPM

useEffect(() => {
  bpmRef.current = bpm; // Update the ref whenever BPM changes
}, [bpm]);

function afterRender() {
  if (!osmdRef.current || isCursorMoving) return; // Prevent multiple loops
  setIsCursorMoving(true); // Mark cursor as moving

  const cursor = osmdRef.current.cursor;
  cursor.reset(); // Ensure the cursor starts at the beginning
  cursor.show();

  // Enable followCursor to scroll with the cursor
  osmdRef.current.FollowCursor = true;

  const moveCursor = () => {
    if (cursor.Iterator.EndReached) {
      console.log("End of sheet music reached. Stopping cursor movement.");
      cursor.hide();
      setIsCursorMoving(false); // Mark cursor as stopped
      stopRecording(); // Stop recording when the end is reached
      return;
    }

    const beatDuration = 60000 / bpmRef.current; // Use the latest BPM value from the ref
    console.log("Beat Duration:", beatDuration); // Log the beat duration

    const notes = cursor.NotesUnderCursor();
    if (notes && notes.length > 0) {
      const noteType = notes[0].TypeLength; // Get the note type (e.g., "quarter", "half", "whole")
      let noteDurationMs = beatDuration; // Default to quarter note duration

      // Adjust the duration based on the note type
      if (noteType.Equals(new Fraction(2, 4))) {
        noteDurationMs = beatDuration * 2; // Half note lasts twice as long as a quarter note
      }
      if (noteType.Equals(new Fraction(4, 4))) {
        noteDurationMs = beatDuration * 4; // Whole note lasts four times as long as a quarter note
      }

      // Move the cursor to the next note after the calculated duration
      timeoutRef.current = setTimeout(() => {
        cursor.next();
        moveCursor(); // Recursively call to handle the next note
      }, noteDurationMs);
    } else {
      // If no notes are found, just move to the next position
      timeoutRef.current = setTimeout(() => {
        cursor.next();
        moveCursor(); // Recursively call to handle the next position
      }, beatDuration);
    }
  };

  moveCursor(); // Start the cursor movement
}

  return (
    <div className="songs-container">
      <h1>Music Score</h1>
      <div>
        <center>
        <div>
          <label htmlFor="bpm-slider">BPM: {bpm}</label>
          <input
          id="bpm-slider"
          type="range"
          min="40" // Minimum BPM
          max="240" // Maximum BPM
          value={bpm}
          onChange={(e) => {
            console.log("BPM Slider Value:", e.target.value);
            setBpm(Number(e.target.value));
          }}
          disabled ={isRecording} // Disable the slider if recording is in progress
          />
        </div>
        <button
          onClick={startRecording}
          className="start-button"
          disabled={isRecording} // Disable the button if recording is in progress
        >
          <span className="play-icon">&#9658;</span> Start
        </button>
        <button
        onClick={stopRecording}
        className="stop-button"
        disabled={!isRecording} // Disable the button if not recording
      >
        Stop  
        </button>
        </center>
      </div>
      <div>
        {countdown !== null && <h2>{countdown}</h2>}
      </div>
      <div>
        {showFeedback && // Only display feedback if showFeedback is true
          feedback.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
      </div>
      <div id="osmdContainer" className="osmd-container" />
    </div>
  );
};

export default Songs;