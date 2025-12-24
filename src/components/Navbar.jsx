import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <h2 className="logo">
          <a href="#home">Mukesh Gupta</a>
        </h2>

        {/* Hamburger (3 lines) */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#achievements" onClick={() => setOpen(false)}>Achievements</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
