import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "/src/styles/Projects.css";
import { projects } from "/src/data/projects";
import translations from "/src/translations";

// 🔥 Tipos
type Tech = {
  name: string;
  color: string;
  textColor: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  status?: string;
  techs: Tech[];
  projectUrl: string;
  githubUrl: string;
};

type Language = "pt" | "en"; // ajuste se tiver mais idiomas

type Props = {
  language: Language;
};

export default function ProjectsCarousel({ language }: Props) {
  const t = translations[language].projects;

  // Mescla dado fixo + tradução pelo id
  const translatedProjects = projects.map((project) => ({
    ...project,
    ...t.items[project.id as keyof typeof t.items],
  }));

  const [index, setIndex] = useState<number>(0);
  const [visibleCards, setVisibleCards] = useState<number>(3);

  const canSlide = projects.length > visibleCards;
  const isStaticDesktop = projects.length < 3 && visibleCards === 3;

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

  const maxIndex = projects.length - visibleCards;

  const next = (): void => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = (): void => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="projects" id="projects">
      <h2 className="row-title">
        {t.sectionTitle}
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
          >
            ‹
          </button>
        )}

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(calc(-${index} * (100% / ${visibleCards})))`,
            }}
          >

            {translatedProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="card card-inner">
                  <div className="project-image">

                    {project.status?.toLowerCase().includes("desenvolvimento") && (
                      <span className="dev-badge">{project.status}</span>
                    )}

                    <div className="image-overlay">
                      <Link
                        to={`/project/${project.id}`}
                        className="btn-overlay"
                      >
                        {t.viewDetails}
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
                      {project.techs.map((tech: Tech, idx: number) => (
                        <span
                          key={idx}
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
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.urlProject}
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {canSlide && (
          <button
            className="carousel-btn"
            onClick={next}
            disabled={index === maxIndex}
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
}