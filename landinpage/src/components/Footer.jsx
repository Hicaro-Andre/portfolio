import React from "react";
import "/src/index.css";
import { HiDownload } from "react-icons/hi";

import insta from "../assets/images/footer/instagram-dark.svg";
import linkedin from "../assets/images/footer/linkedin.svg";
import github from "../assets/images/footer/github-dark.svg";

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-purple-500/50">
      <div className="footer-bottom">

        
        <div className="social-icons">
          <a href="#" className="social-link">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="#" className="social-link">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="#" className="social-link">
            <img src={github} alt="GitHub" />
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
