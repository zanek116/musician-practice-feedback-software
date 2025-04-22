import React, { useEffect, useRef, useState } from 'react';
import { Fraction, NoteEnum, OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import io from 'socket.io-client';
import './Songs.css';

const Songs = () => {
  const osmdRef = useRef<OpenSheetMusicDisplay | null>(null);
  const [feedback, setFeedback] = useState<{ message: string; type: string }[]>(
    []
  );
  const [socket, setSocket] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const metronomeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const metronomeAudio = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState("/songs/loch_lomond.musicxml");

  useEffect(() => {
    // Establish a connection to the backend
    const newSocket = io("http://localhost:1111");
    setSocket(newSocket);

    // Listen for note feedback from the backend
    newSocket.on("note_feedback", (data: { message: string }) => {
      const type = data.message.includes("Correct") ? "correct" : "incorrect";
      setFeedback((prevFeedback) => [
        ...prevFeedback,
        { message: data.message, type },
      ]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

    useEffect(() => {
      const loadMusicXML = async () => {
        try {
          const response = await fetch(currentSong); // Use the current song path
          if (!response.ok) {
            throw new Error(`Failed to load MusicXML file: ${response.statusText}`);
          }
          const musicXML = await response.text();
    
          osmdRef.current = new OpenSheetMusicDisplay('osmdContainer');
          osmdRef.current.setOptions({
            backend: 'svg',
            drawTitle: true,
            autoResize: true,
          });
    
          await osmdRef.current.load(musicXML);
          osmdRef.current.render();
        } catch (error) {
          console.error('Error loading MusicXML:', error);
        }
      };
    
      loadMusicXML();
    }, [currentSong]); // Add currentSong as a dependency

  useEffect(() => {
    // Initialize the metronome audio
    metronomeAudio.current = new Audio("/sounds/click.mp3");
  }, []);

  const startMetronome = (bpm: number) => {
    if (!metronomeAudio.current) return;

    const interval = 60000 / bpm; // Calculate interval in milliseconds
    metronomeIntervalRef.current = setInterval(() => {
      console.log('Playing metronome click'); // Debug log
      metronomeAudio.current?.play().catch((err) => console.error('Metronome audio error:', err));
    }, interval);
  };

  const stopMetronome = () => {
    if (metronomeIntervalRef.current) {
      clearInterval(metronomeIntervalRef.current);
      metronomeIntervalRef.current = null;
    }
  };

  const startPlaybackAndFeedback = () => {
    if (!osmdRef.current) return;

    const cursor = osmdRef.current.cursor;
    cursor.reset(); // Ensure the cursor starts at the beginning
    cursor.show();

    const bpm = 120; // Set the desired BPM
    const beatDuration = 60000 / bpm; // Duration of a quarter note in milliseconds (60000 ms = 1 minute)

    const moveCursor = () => {
      if (cursor.Iterator.EndReached) {
        cursor.hide();
        setIsPlaying(false); // Stop playback when the end is reached
        stopMetronome();
        return;
      }

      const notes = cursor.NotesUnderCursor();
      let noteDurationMs = beatDuration; // Default to quarter note duration

      if (notes && notes.length > 0) {
        const noteType = notes[0].Length; // Get the note's length as a Fraction

        // Adjust the duration based on the note type
        if (noteType.Equals(new Fraction(2, 4))) {
          noteDurationMs = beatDuration * 2; // Half note lasts twice as long as a quarter note
        } else if (noteType.Equals(new Fraction(4, 4))) {
          noteDurationMs = beatDuration * 4; // Whole note lasts four times as long as a quarter note
        } else if (noteType.Equals(new Fraction(1, 8))) {
          noteDurationMs = beatDuration / 2; // Eighth note lasts half as long as a quarter note
        }
      }

      // Move the cursor to the next note after the calculated duration
      timeoutIdRef.current = setTimeout(() => {
        cursor.next();
        moveCursor(); // Recursively call to handle the next note
      }, noteDurationMs);
    };

    moveCursor(); // Start the cursor movement
    setIsPlaying(true); // Set playback state to true

    // Start audio processing feedback loop
    if (socket) {
      socket.emit("start_recording"); // Notify the backend to start audio processing
    }
  };

  const stopPlaybackAndFeedback = () => {
    if (osmdRef.current && osmdRef.current.cursor) {
      osmdRef.current.cursor.hide(); // Hide the cursor
    }

    if (socket) {
      socket.emit("stop_recording"); // Notify the backend to stop audio processing
    }

    // Clear the active timeout to stop the cursor movement
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }

    stopMetronome();
    setIsPlaying(false); // Set playback state to false
    setFeedback([]); // Clear feedback messages
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopPlaybackAndFeedback();
    } else {
      const metronomeSequence = [
        { bpm: 60, duration: 3000 }, 
        { bpm: 120, duration: 2000 }, 
      ];
  
      let currentIndex = 0;
      let startDuration = 2000;
  
      const playMetronomeSequence = () => {
        if (currentIndex < metronomeSequence.length) {
          const { bpm, duration } = metronomeSequence[currentIndex];
          startMetronome(bpm); // Play the metronome at the specified BPM
          
          setTimeout(() => {
            if (socket) {
              socket.emit("start_recording");
            }
          }, startDuration);

          setTimeout(() => {
            stopMetronome(); // Stop the metronome after the duration
            currentIndex++;
            playMetronomeSequence(); // Move to the next note in the sequence
          }, duration);
        } else {
          // Start playback and feedback after the sequence
          startMetronome(120); // Continue with quarter notes at 120 BPM
          startPlaybackAndFeedback();
        }
      };
  
      playMetronomeSequence(); // Start the metronome sequence
    }
  };

  return (
    <div className="songs-container">
      <h1>Music Practice Feedback</h1>
      <div className="split-container">
        {/* Left half: MusicXML score */}
        <div className="left-section">
          <div id="osmdContainer" className="osmd-container" />
        </div>

        {/* Right half: Feedback and controls */}
        <div className="right-section">
          <button onClick={togglePlayback} className="start-button">
            {isPlaying ? "Stop" : "Start"}
          </button>
          <select
            value={currentSong}
            onChange={(e) => {
              const selectedSong = e.target.value;
              setCurrentSong(selectedSong);
              if (socket) {
                const songName = selectedSong.includes("twinkle_twinkle")
                  ? "twinkle_twinkle"
                  : "loch_lomond";
                socket.emit("change_song", { song: songName }); // Notify the backend
                console.log("Emitting change_song event with song:", songName);
              }
            }}
            className="song-selector"
          >
            <option value="" disabled>
              Select Song...
            </option>
            <option value="/songs/loch_lomond.musicxml">Loch Lomond</option>
            <option value="/songs/twinkle_twinkle.xml">Twinkle Twinkle Little Star</option>
          </select>
          {countdown !== null && (
            <div className="countdown">
              <h2>{countdown}</h2>
            </div>
          )}
          <div className="feedback-container">
            <h2>Note Feedback:</h2>
            <ul>
              {feedback.map((item, index) => (
                <li key={index} className={item.type}>
                  {item.type === "correct" ? "Correct" : "Incorrect"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Songs;
