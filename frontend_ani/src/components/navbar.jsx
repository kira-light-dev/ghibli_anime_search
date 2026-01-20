import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css"; // 🧠 import styles

function NavBar() {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("reset-home")); // 🧠 trigger reload
    navigate("/"); // 🧭 go to Home
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" onClick={handleHomeClick}>Anime App</a>
      </div>
      <div className="navbar-links">
        <a href="/" onClick={handleHomeClick} className="nav-link">Home</a>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;


