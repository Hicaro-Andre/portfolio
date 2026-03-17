import "/src/styles/ProjectNavbar.css";
import { ArrowLeft } from "lucide-react";

export default function ProjectNavbar({ language, setLanguage }) {
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <header className="project-navbar">
      <div className="project-navbar-container">
        {/* VOLTAR PROJETOS */}
        <a href="/#projects" className="back-projects">
          <ArrowLeft size={18} />
          {language === "pt" ? "Voltar para Projetos" : "Back to Projects"}
        </a>

        {/* BOTÃO IDIOMA */}
        <button className="lang-toggle" onClick={toggleLanguage}>
          <span className={`lang-option ${language === "pt" ? "active" : ""}`}>
            <img
              src="https://flagcdn.com/br.svg"
              alt="Português"
              className="flag"
            />
          </span>

          <span className={`lang-option ${language === "en" ? "active" : ""}`}>
            <img
              src="https://flagcdn.com/us.svg"
              alt="English"
              className="flag"
            />
          </span>

          <div className={`toggle-indicator ${language}`} />
        </button>
      </div>
    </header>
  );
}
