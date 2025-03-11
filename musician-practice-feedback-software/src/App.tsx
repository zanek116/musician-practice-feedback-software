import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Songs from './pages/Songs';
import TestAudio from './pages/TestAudio';
import Recordings from './pages/Recordings';
import Score from './pages/Score';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recordings" element={<Recordings />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/test" element={<TestAudio />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </Router>
  );
};

export default App
