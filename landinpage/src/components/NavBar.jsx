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
          <a href="#home">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Habilidades</a>
          <a href="#">Projetos</a>
          <a href="#">Experiência</a>
          <a href="#">Formação</a>
          <a href="#home">Contato</a>
        </nav>
      </div>
    </header>
  );
}
