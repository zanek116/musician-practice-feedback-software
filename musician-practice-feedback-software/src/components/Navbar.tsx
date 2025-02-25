import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <img src="/logo.png" alt="Musician Practice Feedback Software Logo" className="logo" />
      <div className="nav-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/songs">Songs</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/test">Test Audio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;