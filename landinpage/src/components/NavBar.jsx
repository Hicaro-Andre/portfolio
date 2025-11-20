import React, { useState } from "react";
import { useEffect } from "react";
import logo from "/public/hico-logo.png";
import "/src/index.css";

export default function Navbar({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% da seção precisa estar visível
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

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
          <a
            href="#hero"
            className={activeLink === "hero" ? "active" : ""}
            onClick={() => setActiveLink("hero")}
          >
            {language === "pt" ? "Início" : "Home"}
          </a>

          <a
            href="#about"
            className={activeLink === "about" ? "active" : ""}
            onClick={() => setActiveLink("about")}
          >
            {language === "pt" ? "Sobre" : "About"}
          </a>

          <a
            href="#skills"
            className={activeLink === "skills" ? "active" : ""}
            onClick={() => setActiveLink("skills")}
          >
            {language === "pt" ? "Habilidades" : "Skills"}
          </a>

          <a
            href="#port"
            className={activeLink === "port" ? "active" : ""}
            onClick={() => setActiveLink("port")}
          >
            {language === "pt" ? "Projetos" : "Projects"}
          </a>

          <a
            href="#exp"
            className={activeLink === "exp" ? "active" : ""}
            onClick={() => setActiveLink("exp")}
          >
            {language === "pt" ? "Experiência" : "Experience"}
          </a>

          <a
            href="#formation"
            className={activeLink === "formation" ? "active" : ""}
            onClick={() => setActiveLink("formation")}
          >
            {language === "pt" ? "Formação" : "Formation"}
          </a>

          <a
            href="#contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => setActiveLink("contact")}
          >
            {language === "pt" ? "Contato" : "Contact"}
          </a>

          <button className="nav-btn-lang" onClick={toggleLanguage}>
            {language === "pt" ? "US EN" : "BR PT"}
          </button>
        </nav>
      </div>
    </header>
  );
}
