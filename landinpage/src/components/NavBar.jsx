import React, { useState } from "react";
import logo from "/public/hico-logo.png";
import "/src/index.css";

export default function Navbar({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <header className="navbar border-purple-nav-500/50">
      <div className="navbar-container">

       
        <div className="logo">
          <a
            href="#hero"
            className="logo-link"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={logo} alt="logo" className="logo-img" />
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

       
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#hero">{language === "pt" ? "Início" : "Home"}</a>
          <a href="#about">{language === "pt" ? "Sobre" : "About"}</a>
          <a href="#skills">{language === "pt" ? "Habilidades" : "Skills"}</a>
          <a href="#port">{language === "pt" ? "Projetos" : "Projects"}</a>
          <a href="#exp">{language === "pt" ? "Experiência" : "Experience"}</a>
          <a href="#formation">{language === "pt" ? "Formação" : "Formation"}</a>
          <a href="#contact">{language === "pt" ? "Contato" : "Contact"}</a>

         
          <button className="nav-btn-lang" onClick={toggleLanguage}>
            {language === "pt" ? "EN" : "PT"}
          </button>
        </nav>
      </div>
    </header>
  );
}
