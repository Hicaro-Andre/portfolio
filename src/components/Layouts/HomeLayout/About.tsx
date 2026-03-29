import "/src/styles/About.css";
import { getExperience } from "/src/utils/dateUtils";
import { projects } from "/src/data/projects";
import translations from "/src/translations";

// 🔥 Tipos
type Project = {
  id: number;
  title: string;
  description: string;
  status?: string;
};

type Language = "pt" | "en"; // ajuste se tiver mais idiomas

type Props = {
  language: Language;
};

export default function About({ language }: Props) {
  const completedProjects = projects.filter(
    (project: Project) => project.status === "Concluído"
  ).length;

  const t = translations[language].about;

  return (
    <section className="about-section" id="about">
      <h2 className="row-title">
        {t.title}
        <span />
      </h2>

      <div className="about-container">
        <div className="card main-card">
          <div className="about-top">
            <span className="about-role">{t.role}</span>
          </div>

          <div className="about-text">
            <p>{t.description.p1}</p>
            <p>{t.description.p2}</p>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div className="card stat-card">
          <strong>{getExperience()}+</strong>
          <span>{t.stats.experience}</span>
        </div>

        <div className="card stat-card">
          <strong>{completedProjects}+</strong>
          <span>{t.stats.projects}</span>
        </div>
      </div>
    </section>
  );
}