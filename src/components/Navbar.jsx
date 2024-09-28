
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/dashboardlogo.jpeg" alt="Logoipsum" />
      </div>
      <ul className="nav-links">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#questions">Questions</a></li>
        <li><a href="#upgrade">Upgrade</a></li>
        <li><a href="#how-it-works">How it Works?</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
