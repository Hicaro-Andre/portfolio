import { useNavigate } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
import { ArrowLeft } from "lucide-react";

import "/src/styles/ProjectNavbar.css";
import translations from "/src/translations";
import { useLanguage } from "/src/hooks/useLanguage";
import LanguageToggle from "../../ui/LanguageToggle";

type Language = "pt" | "en";

type ProjectNavbarProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

export default function ProjectNavbar({
  language,
  setLanguage,
}: ProjectNavbarProps) {
  const navigate = useNavigate();
  const { toggleLanguage } = useLanguage(setLanguage);
  const t = translations[language].navbarDetails;

  const handleBackToProjects = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };

  return (
    <header className="project-navbar">
      <div className="project-navbar-container">
        <button onClick={handleBackToProjects} className="back-projects">
          <ArrowLeft size={18} />
          {t.btn}
        </button>

        <LanguageToggle
          language={language}
          onToggle={toggleLanguage}
        />
      </div>
    </header>
  );
}