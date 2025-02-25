import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Songs from './pages/Songs';
import TestAudio from './pages/TestAudio';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/test" element={<TestAudio />} />
      </Routes>
    </Router>
  );
};

export default App;
