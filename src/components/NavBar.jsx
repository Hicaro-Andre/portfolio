import React, { useState, useEffect, useRef } from "react";
import logo from "/public/hico-logo.png";
import "/src/index.css";

export default function Navbar({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const navRef = useRef(null);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false); // fecha no mobile
  };

  // Intersection Observer melhorado
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
      {
        rootMargin: "-80px 0px -30% 0px",
        threshold: 0.3,
      },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Fecha menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container" ref={navRef}>
        <a href="#hero" className="logo-link">
          <img src={logo} alt="Logo Hicaro André" className="logo-img" />
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu de navegação"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "active" : ""}`}
        >
          {[
            { id: "hero", pt: "Início", en: "Home" },
            { id: "about", pt: "Sobre", en: "About" },
            { id: "skills", pt: "Habilidades", en: "Skills" },
            { id: "projects", pt: "Projetos", en: "Projects" },
            { id: "experience", pt: "Experiência", en: "Experience" },
            { id: "formation", pt: "Formação", en: "Formation" },
            { id: "contact", pt: "Contato", en: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleLinkClick(item.id)}
              className={activeLink === item.id ? "active" : ""}
            >
              {language === "pt" ? item.pt : item.en}
            </a>
          ))}

          <button className="lang-toggle" onClick={toggleLanguage}>
            <span
              className={`lang-option ${language === "pt" ? "active" : ""}`}
            >
              🇧🇷 PT
            </span>

            <span
              className={`lang-option ${language === "en" ? "active" : ""}`}
            >
              🇺🇸 EN
            </span>

            <div className={`toggle-indicator ${language}`} />
          </button>
        </nav>
      </div>
    </header>
  );
}
