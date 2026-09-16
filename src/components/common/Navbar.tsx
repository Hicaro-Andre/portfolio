import { useState, useRef } from "react";
import "@/styles/components/navbar.css";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useClickOutside } from "@/hooks/useClickOutside";
import LanguageToggle from "@/components/ui/LanguageToggle";
import ThemeToggle from "@/components/ui/ThemeToggle";
import type { Language } from "@/types";

const logo = "/hico-logo.png";

type NavbarProps = {
  language?: Language;
  setLanguage?: React.Dispatch<React.SetStateAction<Language>>;
};

export default function Navbar({ language: propLang }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const navRef = useRef<HTMLDivElement | null>(null);

  const { t } = useLanguage();
  const navbarT = t.navbar;

  useActiveSection(setActiveLink);
  useClickOutside(navRef, () => setMenuOpen(false));

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: navbarT.home },
    { id: "about", label: navbarT.about },
    { id: "skills", label: navbarT.skills },
    { id: "projects", label: navbarT.projects },
    { id: "experience", label: navbarT.experience },
    { id: "formation", label: navbarT.formation },
    { id: "contact", label: navbarT.contact },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container" ref={navRef}>
        <a href="#hero" className="logo-link" aria-label="Ir para o topo">
          <img src={logo} alt="Logo Hicaro André" className="logo-img" />
        </a>

        <div className="navbar-actions">
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleLinkClick(item.id)}
              className={activeLink === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}

          <div className="nav-toggles">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
