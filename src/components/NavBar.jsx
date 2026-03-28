import React, { useState, useEffect, useRef } from "react";
import logo from "/public/hico-logo.png";
import "/src/styles/NavBar.css";
import translations from "/src/translations";

export default function Navbar({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const navRef = useRef(null);

  const t = translations[language]; // 🔥 NOVO

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  // Intersection Observer
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
      }
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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
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
            { id: "hero", label: t.navbar.home },
            { id: "about", label: t.navbar.about },
            { id: "skills", label: t.navbar.skills },
            { id: "projects", label: t.navbar.projects },
            { id: "experience", label: t.navbar.experience },
            { id: "formation", label: t.navbar.formation },
            { id: "contact", label: t.navbar.contact },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleLinkClick(item.id)}
              className={activeLink === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}

          <button className="lang-toggle" onClick={toggleLanguage}>
            <span
              className={`lang-option ${language === "pt" ? "active" : ""}`}
            >
              <img
                src="https://flagcdn.com/br.svg"
                alt="Português"
                className="flag"
              />
            </span>

            <span
              className={`lang-option ${language === "en" ? "active" : ""}`}
            >
              <img
                src="https://flagcdn.com/us.svg"
                alt="English"
                className="flag"
              />
            </span>

            <div className={`toggle-indicator ${language}`} />
          </button>
        </nav>
      </div>
    </header>
  );
}