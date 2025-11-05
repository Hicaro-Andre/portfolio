import React, { useState } from 'react';
import '../styles/NavBar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="brand">MyBrand</div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#hero">Início</a>
          <a href="#about">Sobre</a>
          <a href="#">Habilidades</a>
          <a href="#port">Projetos</a>
          <a href="#">Experiência</a>
          <a href="#">Formação</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
}
