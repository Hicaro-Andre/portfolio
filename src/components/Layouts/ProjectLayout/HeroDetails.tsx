import "/src/styles/HeroDetails.css";
import { useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { projects } from "/src/data/projects";
import type { Tech } from "/src/data/projects";
import translations from "/src/translations";

type Language = "pt" | "en";

type Props = {
  language: Language;
};

export default function HeroDetails({ language }: Props) {
  const t = translations[language].heroDetails;
  const p = translations[language].projects;

  const { id } = useParams<{ id: string }>();

  const projectBase = projects.find((proj) => proj.id === Number(id));

  const project = projectBase
    ? {
      ...projectBase,
      ...(p.items[projectBase.id as keyof typeof p.items] ?? {}),
    }
    : null;

  if (!project) return null;

  return (
    <section className="hero-details">
      <div className="hero-details-container">

        {/* status mobile */}
        {(project.status?.toLowerCase() === "em desenvolvimento" ||
          project.status?.toLowerCase() === "in development") && (
            <div className="project-status-badge-mob">
              <span className="dot" />
              {project.status}
            </div>
          )}

        {/* image mobile */}
        <div className="project-image-mobile">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">

          {/* status desk */}
          {(project.status?.toLowerCase() === "em desenvolvimento" ||
            project.status?.toLowerCase() === "in development") && (
              <div className="project-status-badge-desk">
                <span className="dot" />
                {project.status}
              </div>
            )}

          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>

          {/* techs */}
          <div className="project-techs">
            {project.techs.map((tech: Tech, index: number) => (
              <span
                key={index}
                className="tech-badge"
                style={{ background: tech.color, color: tech.textColor }}
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* btn */}
          <a
            href={project.projectUrl}
            className="btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} />
            {t.btnView}
          </a>

        </div>

        {/* image desk */}
        <div className="project-image-desk">
          <img src={project.image} alt={project.title} />
        </div>

      </div>
    </section>
  );
}