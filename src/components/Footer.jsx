import React from "react";
import "/src/index.css";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-purple-500/50">
      <div className="footer-container">

        <div className="social-icons">
          <a
            href="https://github.com/Hicaro-Andre"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Hicaro André"
            className="social-link"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/hicaroandre/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Hicaro André"
            className="social-link"
          >
            <FaLinkedin aria-hidden="true" />
          </a>

          <a
            href="https://www.instagram.com/hicaroandre/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Hicaro André"
            className="social-link"
          >
            <FaInstagram aria-hidden="true" />
          </a>
        </div>

        <p className="copyright">
          <span className="highlight">© {currentYear} Hicaro André</span>{" "}
          {language === "pt"
            ? "• Todos os direitos reservados"
            : "• All rights reserved"}
        </p>

      </div>
    </footer>
  );
};

export default Footer;
