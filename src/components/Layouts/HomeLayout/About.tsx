import "/src/styles/About.css";
import { getExperience } from "/src/utils/dateUtils";
import useSectionObserver from "/src/hooks/useSectionObserver";
import translations from "/src/translations";

type Language = "pt" | "en";

type Props = {
  language: Language;
};

export default function About({ language }: Props) {
  useSectionObserver();
  const t = translations[language].about;
  const p = translations[language].projects;

  // Conta projetos concluídos a partir dos items traduzidos
  const completedProjects = Object.values(p.items).filter(
    (item) =>
      item.status?.toLowerCase() === "concluído" ||
      item.status?.toLowerCase() === "completed"
  ).length;

  return (
    <section className="about-section" id="about">
      <h2 className="row-title">
        {t.title}
        <span />
      </h2>

      <div className="about-container">
        <div className="card main-card">

          <div className="about-content-text">
            <div className="about-top">
              <span className="about-role">{t.role}</span>
            </div>
            <div className="about-text">
              <p>{t.description.p1}</p>
              <p>{t.description.p2}</p>
              <p>{t.description.p3}</p>
            </div>
          </div>

        </div>
      </div>

      <div className="about-stats">
        <div className=" stat-card">
          <strong>{getExperience()}+</strong>
          <span>{t.stats.experience}</span>
        </div>
        <div className=" stat-card">
          <strong>{completedProjects}+</strong>
          <span>{t.stats.projects}</span>
        </div>
      </div>
    </section>
  );
}