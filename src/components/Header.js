import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">KoinX</div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Crypto Taxes</li>
          <li>Free Tools</li>
          <li>Resource Center</li>
          <li>
            <button className="get-started-btn">Get Started</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;
