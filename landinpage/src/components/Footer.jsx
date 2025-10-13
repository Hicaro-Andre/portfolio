import React from "react";
import "../styles/Footer.css";
import { HiDownload } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <p className="copyright">
          <span className="highlight">© {currentYear} Hicaro André</span> |
          Todos os direitos reservados
        </p>
      </div>

      <div className="about-cta fade-in delay-4">
        <a href="/cv-hicaro-dev.pdf" download className="cta-btn">
          <HiDownload className="cta-icon" /> Baixar CV
        </a>
      </div>
    </footer>
  );
};

export default Footer;
