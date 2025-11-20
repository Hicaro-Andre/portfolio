import React from "react";
import "/src/index.css";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-purple-500/50">
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://github.com/Hicaro-Andre" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hicaroandre/" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/hicaroandre/" className="social-link">
            <FaInstagram />
          </a>
        </div>

        <p className="copyright">
          <span className="highlight">© {currentYear} Hicaro André</span> |{" "}
          {language === "pt"
            ? "Todos os direitos reservados"
            : "All rights reserved"}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
