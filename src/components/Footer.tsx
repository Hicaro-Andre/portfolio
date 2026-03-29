import React from "react";
import "/src/styles/Footer.css";
import { Linkedin, Github, Instagram } from "lucide-react";
import translations from "../translations";

type FooterProps = {
  language: "pt" | "en"; // você pode expandir depois
};

const Footer: React.FC<FooterProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const t = translations[language]?.footer;

  return (
    <footer className="footer border-purple-500/50">
      <div className="footer-container">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/hicaroandre/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/Hicaro-Andre"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.instagram.com/hicaroandre/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        <p className="copyright">
          <span className="highlight">© {currentYear} Hicaro André</span>{" "}
          {t?.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;