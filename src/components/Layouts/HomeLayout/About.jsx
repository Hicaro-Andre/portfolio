import "/src/styles/About.css";
import { getExperience } from "/src/utils/dateUtils.js";
import { projects } from "/src/data/projects.js";
import translations from "/src/translations";

export default function About({ language }) {
  const completedProjects = projects.filter(
    (project) => project.status === "Concluído",
  ).length;

  const t = translations[language].about;

  return (
    <section className="about-section" id="about">
      <h2 className="row-title">
        {t.title}
        <span />
      </h2>

      <div className="about-container">
        <div className="main-card">
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
        <div className="stat-card">
          <strong>{getExperience()}+</strong>
          <span>{t.stats.experience}</span>
        </div>

        <div className="stat-card">
          <strong>{completedProjects}+</strong>
          <span>{t.stats.projects}</span>
        </div>
      </div>
    </section>
  );
}