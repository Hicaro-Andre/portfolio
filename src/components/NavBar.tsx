import { useState, useRef } from "react";
import "/src/styles/NavBar.css";
import translations from "/src/translations";

import { useLanguage } from "/src/hooks/useLanguage";
import { useActiveSection } from "/src/hooks/useActiveSection";
import { useClickOutside } from "/src/hooks/useClickOutside";

const logo = "/hico-logo.png";

type Language = "pt" | "en";

type NavbarProps = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const navRef = useRef<HTMLDivElement | null>(null);

  const t = translations[language];

  const { toggleLanguage } = useLanguage(setLanguage);

  useActiveSection(setActiveLink);

  useClickOutside(navRef, () => setMenuOpen(false));

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container" ref={navRef}>
        <a href="#hero" className="logo-link">
          <img src={logo} alt="Logo Hicaro André" className="logo-img" />
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
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