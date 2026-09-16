import { useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import "@/styles/components/hero-details.css";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import type { Tech, Language } from "@/types";

type Props = {
  language?: Language;
};

export default function HeroDetails({}: Props) {
  const { t } = useLanguage();
  const heroDetailsT = t.heroDetails;
  const projectsT = t.projects;

  const { id } = useParams<{ id: string }>();
  const projectBase = projects.find((proj) => proj.id === Number(id));

  const project = projectBase
    ? {
        ...projectBase,
        ...(projectsT.items[projectBase.id as keyof typeof projectsT.items] ?? {}),
      }
    : null;

  if (!project) return null;

  const isDev =
    project.status?.toLowerCase() === "em desenvolvimento" ||
    project.status?.toLowerCase() === "in development";

  return (
    <section className="hero-details">
      <div className="hero-details-container">
        {/* Status Mobile */}
        {isDev && (
          <div className="project-status-badge-mob">
            <span className="dot" />
            {project.status}
          </div>
        )}

        {/* Imagem Mobile */}
        <div className="project-image-mobile">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">
          {/* Status Desktop */}
          {isDev && (
            <div className="project-status-badge-desk">
              <span className="dot" />
              {project.status}
            </div>
          )}

          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>

          {/* Techs */}
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

          {/* Botão */}
          {project.projectUrl && project.projectUrl !== "#" && (
            <a
              href={project.projectUrl}
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
              {heroDetailsT.btnView}
            </a>
          )}
        </div>

        {/* Imagem Desktop */}
        <div className="project-image-desk">
          <img src={project.image} alt={project.title} />
        </div>
      </div>
    </section>
  );
}
