import React from 'react';
import '../styles/Footer.css';

// Descomente a linha abaixo SOMENTE se o arquivo existir e estiver no caminho certo:
// import resumePdf from '../assets/Hicaro_Dev.pdf';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        {/* Botão de download do currículo (só aparecerá se resumePdf estiver definido corretamente) */}
        {/* {resumePdf && (
          <a href={resumePdf} download="Hicaro-Andre-Curriculo.pdf" className="download-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 15V3M12 15L8 11M12 15L16 11M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Currículo
          </a>
        )} */}

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
