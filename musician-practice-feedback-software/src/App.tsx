import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Songs from './pages/Songs';
import Recordings from './pages/Recordings';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recordings" element={<Recordings />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </Router>
  );
};

export default App
