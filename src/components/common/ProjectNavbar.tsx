import { useNavigate } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
import { ArrowLeft } from "lucide-react";
import "@/styles/components/project-navbar.css";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";
import ThemeToggle from "@/components/ui/ThemeToggle";
import type { Language } from "@/types";

type ProjectNavbarProps = {
  language?: Language;
  setLanguage?: Dispatch<SetStateAction<Language>>;
};

export default function ProjectNavbar({}: ProjectNavbarProps) {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const navbarDetailsT = t.navbarDetails;

  const handleBackToProjects = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };

  return (
    <header className="project-navbar">
      <div className="project-navbar-container">
        <button
          onClick={handleBackToProjects}
          className="back-projects"
          type="button"
        >
          <ArrowLeft size={18} />
          {navbarDetailsT.btn}
        </button>

        <div className="project-navbar-actions">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
