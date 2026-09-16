import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "@/styles/components/projects.css";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import type { Tech, Language } from "@/types";

type Props = {
  language?: Language;
};

export default function Projects({}: Props) {
  const { t } = useLanguage();
  const projectsT = t.projects;

  const translatedProjects = projects.map((project) => ({
    ...project,
    ...projectsT.items[project.id as keyof typeof projectsT.items],
  }));

  const [index, setIndex] = useState<number>(0);
  const [visibleCards, setVisibleCards] = useState<number>(3);

  useEffect(() => {
    function handleResize(): void {
      if (window.innerWidth <= 767) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1023) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const canSlide = projects.length > visibleCards;
  const isStaticDesktop = projects.length < 3 && visibleCards === 3;
  const maxIndex = Math.max(0, projects.length - visibleCards);

  const next = (): void => {
    if (index < maxIndex) setIndex((prev) => prev + 1);
  };

  const prev = (): void => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="row-title">
        {projectsT.sectionTitle}
        <span />
      </h2>

      <div
        id="pro-section"
        className={`carousel-wrapper ${isStaticDesktop ? "static-mode" : ""}`}
      >
        {canSlide && (
          <button
            className="carousel-btn"
            onClick={prev}
            disabled={index === 0}
            aria-label="Projeto anterior"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--color-primary)" }}
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(calc(-${index} * (100% / ${visibleCards})))`,
            }}
          >
            {translatedProjects.map((project) => {
              const isDev =
                project.status?.toLowerCase().includes("desenvolvimento") ||
                project.status?.toLowerCase().includes("development");

              return (
                <div className="project-card" key={project.id}>
                  <div className="card card-inner">
                    <div className="project-image">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                        />
                      )}

                      {isDev && (
                        <span className="dev-badge">
                          {project.status}
                        </span>
                      )}

                      <div className="image-overlay">
                        <Link
                          to={`/project/${project.id}`}
                          className="btn-overlay"
                        >
                          {projectsT.viewDetails}
                        </Link>
                      </div>
                    </div>

                    <div className="project-content">
                      <h3>
                        <Link to={`/project/${project.id}`}>
                          {project.title}
                        </Link>
                      </h3>

                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-techs">
                        {project.techs.map((tech: Tech, techIdx: number) => (
                          <span
                            key={techIdx}
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

                      <div className="project-links">
                        <a
                          href={project.projectUrl}
                          target={project.projectUrl && project.projectUrl !== "#" ? "_blank" : undefined}
                          rel={project.projectUrl && project.projectUrl !== "#" ? "noopener noreferrer" : undefined}
                          onClick={(e) => {
                            if (!project.projectUrl || project.projectUrl === "#") {
                              e.preventDefault();
                            }
                          }}
                        >
                          {projectsT.urlProject}
                        </a>

                        <a
                          href={project.githubUrl}
                          target={project.githubUrl && project.githubUrl !== "#" ? "_blank" : undefined}
                          rel={project.githubUrl && project.githubUrl !== "#" ? "noopener noreferrer" : undefined}
                          onClick={(e) => {
                            if (!project.githubUrl || project.githubUrl === "#") {
                              e.preventDefault();
                            }
                          }}
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {canSlide && (
          <button
            className="carousel-btn"
            onClick={next}
            disabled={index === maxIndex}
            aria-label="Próximo projeto"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--color-primary)" }}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>
    </motion.section>
  );
}
