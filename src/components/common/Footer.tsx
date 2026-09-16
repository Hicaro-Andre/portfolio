import React from "react";
import "@/styles/components/footer.css";
import { Linkedin, Github, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/types";

type FooterProps = {
  language?: Language;
};

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const footerT = t.footer;

  return (
    <footer className="footer">
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
          {footerT?.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
