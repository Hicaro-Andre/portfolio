import { useNavigate } from "react-router-dom";
import "/src/styles/ProjectNavbar.css";
import { ArrowLeft } from "lucide-react";

export default function ProjectNavbar({ language, setLanguage }) {
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const handleBackToProjects = () => {
    // Navega para a página inicial com um state indicando para qual seção rolar
    navigate("/", { state: { scrollTo: "projects" } });
  };

  return (
    <header className="project-navbar">
      <div className="project-navbar-container">
        {/* VOLTAR PROJETOS */}
        <button onClick={handleBackToProjects} className="back-projects">
          <ArrowLeft size={18} />
          {language === "pt" ? "Voltar para Projetos" : "Back to Projects"}
        </button>

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