import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">

        <p className="copyright">
          <span className="highlight">© {currentYear} Hicaro André</span> | Todos os
          direitos reservados
        </p>
      </div>

      <div className="back_topo">
        <a href="#hero">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-up"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
          Voltar para o topo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
