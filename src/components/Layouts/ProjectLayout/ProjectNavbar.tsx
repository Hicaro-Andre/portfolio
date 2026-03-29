import { useNavigate } from "react-router-dom";
import "/src/styles/ProjectNavbar.css";
import { ArrowLeft } from "lucide-react";

import { useLanguage } from "/src/hooks/useLanguage";

type Language = "pt" | "en";

type ProjectNavbarProps = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

export default function ProjectNavbar({
  language,
  setLanguage,
}: ProjectNavbarProps) {
  const navigate = useNavigate();
  const { toggleLanguage } = useLanguage(setLanguage);

  const handleBackToProjects = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };

  return (
    <header className="project-navbar">
      <div className="project-navbar-container">
        <button onClick={handleBackToProjects} className="back-projects">
          <ArrowLeft size={18} />
          {language === "pt" ? "Voltar para Projetos" : "Back to Projects"}
        </button>

        <button className="lang-toggle" onClick={toggleLanguage}>
          <span
            className={`lang-option ${language === "pt" ? "active" : ""}`}
          >
            <img
              src="https://flagcdn.com/br.svg"
              alt="Português"
              className="flag"
            />
          </span>

          <span
            className={`lang-option ${language === "en" ? "active" : ""}`}
          >
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