import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import { projects } from "/src/data/projects";
import type { Project, Tech } from "/src/data/projects";
import "/src/styles/OtherProjects.css";
import translations from "/src/translations";

type Language = "pt" | "en";

type Props = {
  language: Language;
};

export default function OtherProjects({ language = "pt" }: Props) {
  const t = translations[language].otherprojects;
  const p = translations[language].projects;

  const { id } = useParams<{ id: string }>();

  const randomProjects = useMemo<Project[]>(() => {
    const filteredProjects = projects.filter(
      (project) => project.id !== Number(id)
    );

    function shuffleArray(array: Project[]) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    return shuffleArray(filteredProjects).slice(0, 3);
  }, [id]);

  // Reutiliza projects.items para title e description
  const translatedProjects = randomProjects.map((project) => ({
    ...project,
    ...p.items[project.id as keyof typeof p.items],
  }));

  return (
    <section className="other-projects">
      <h2 className="row-title other">
        {t.sectionTitle}
        <span />
      </h2>

      <div className="other-projects-grid">
        {translatedProjects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="card other-project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="other-projects-techs">
              {project.techs.map((tech: Tech, i: number) => (
                <span
                  key={i}
                  className="tech-badge"
                  style={{
                    background: tech.color,
                    color: tech.textColor,
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}