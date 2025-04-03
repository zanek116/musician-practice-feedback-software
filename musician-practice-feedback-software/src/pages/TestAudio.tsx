import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:1111'); // Connect to the backend WebSocket

const TestAudio: React.FC = () => {
    const [feedback, setFeedback] = useState<string[]>([]);
    const [recordingStatus, setRecordingStatus] = useState<string>('stopped');
    const [countdown, setCountdown] = useState<string | number | null>(null);

    useEffect(() => {
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
        });

        // Cleanup on component unmount
        return () => {
            socket.off('note_feedback');
            socket.off('recording_status');
            socket.off('countdown');
        };
    }, []);

    const startRecording = () => {
        setFeedback([]); // Clear previous feedback
        setCountdown(null); // Reset countdown
        socket.emit('start_recording');
    };

    const stopRecording = () => {
        socket.emit('stop_recording');
    };

    return (
        <div>
            <h1>Musician Practice Feedback</h1>
            <div>
                <button onClick={startRecording} disabled={recordingStatus === 'started'}>
                    Start Recording
                </button>
                <button onClick={stopRecording} disabled={recordingStatus === 'stopped'}>
                    Stop Recording
                </button>
            </div>
            <div>
                {countdown !== null && <h2>{countdown}</h2>}
            </div>
            <div>
                {feedback.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>
        </div>
    );
};

export default TestAudio;