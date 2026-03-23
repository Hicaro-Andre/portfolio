import "/src/styles/HeroDetails.css";
import { useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { projects } from "/src/data/projects.js";

export default function HeroDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <section className="hero-details">
        <h2 className="project-not-found">Projeto não encontrado</h2>
      </section>
    );
  }

  return (
    <section className="hero-details">
      <div className="hero-details-container">
        {/* image mobile */}
        <div className="project-image-mobile">
          <img src={project.image} alt={project.title} />
        </div>

        {/* CONTENT */}
        <div className="project-content">
      
          {project.status?.toLowerCase() === "em desenvolvimento" && (
            <div className="project-status-badge">
              <span className="dot"></span>
              Em desenvolvimento
            </div>
          )}

          <h1 className="project-title">{project.title}</h1>

          <p className="project-description">{project.description}</p>

          {/* TECHS */}
          <div className="project-techs">
            {project.techs.map((tech, index) => (
              <span
                key={index}
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

          {/* BUTTON */}
          <a
            href={project.projectUrl}
            className="btn primary project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} />
            Ver Projeto Live
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
