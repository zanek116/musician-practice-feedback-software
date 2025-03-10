Front End: 
    
    Dependencies: Typescript, react-router-dom (npm install these)

Back End
    
    Dependencies: Python, Pip, Flask (pip install these)

To run (Mac):

    Install all dependencies

    Start Python (Flask) server: 
        cd backend
        python3 -m venv venv
        cd venv/Scripts (windows)
        .\activate (windows)
        cd ../../ (windows)
        pip install all imports in main.py (pip install name)
        source /venv/bin/activate (mac)
        python3 main.py

    Run frontend
        cd musician-practice-feedback-software
        npm install
        npm run dev

Endpoints:

    GET /test - Returns a test message.
    GET /calibrate_baseline - Calibrates the baseline noise level.
    GET /start_pitch_detection - Starts the pitch detection process.
    GET /pitch - Returns the last detected pitch.
    GET /noise - Returns the last detected noise levels.
    GET /notes - Returns the detected notes.
    POST /save_recording - Saves the recorded audio as a WAV file.
    GET /recordings - Lists all saved recordings.

** Code in dev branch (git checkout dev) and have someone check your commit before pushing to main **





