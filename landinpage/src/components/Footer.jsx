import React from "react";
import "../styles/Footer.css";
import { HiDownload } from "react-icons/hi";
import { FaCertificate } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Seção de Certificações */}
      <div className="cert-section fade-in">
        <h3 className="cert-title">
          <FaCertificate className="cert-icon" /> Certificações
        </h3>

        <div className="cert-list">
          <div className="cert-item">
            <h4>Web Design</h4>
            <p>Udemy • 2019</p>
          </div>

          <div className="cert-item">
            <h4>MySQL</h4>
            <p>Curso em Vídeo • 2019</p>
          </div>
        </div>
      </div>

      {/* Créditos e CTA */}
      <div className="footer-bottom">

         <a href="/cv-hicaro-dev.pdf" download className="cta-btn">
          <HiDownload className="cta-icon" /> Baixar CV
        </a>

        <p className="copyright">
          <span className="highlight">© {currentYear} Hicaro André</span> | Todos os direitos reservados
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;
