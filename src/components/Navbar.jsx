import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="home" className="navbar-logo">Herianto Saogo</a>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item"><a href="home" className="nav-links" onClick={closeMobileMenu}>Home</a></li>
          <li className="nav-item"><a href="about" className="nav-links" onClick={closeMobileMenu}>About</a></li>
          <li className="nav-item"><a href="skills" className="nav-links" onClick={closeMobileMenu}>Skills</a></li>
          <li className="nav-item"><a href="projects" className="nav-links" onClick={closeMobileMenu}>Projects</a></li>
          <li className="nav-item"><a href="contact" className="nav-links" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
