import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "/src/styles/Projects.css";
import { projects } from "/src/data/projects.js";
import translations from "/src/translations";

export default function ProjectsCarousel({language}) {
  const t = translations[language].projects
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const canSlide = projects.length > visibleCards;
  const isStaticDesktop = projects.length < 3 && visibleCards === 3;

  useEffect(() => {
    function handleResize() {
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

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="projects" id="projects">
      <h2 className="row-title">
        {t.title}
        <span />
      </h2>

      <div id="pro-section"
        className={`carousel-wrapper ${isStaticDesktop ? "static-mode" : ""}` }
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
            {/* ALTERAÇÃO 2: removi o index do map */}
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="card-inner">
                  <div className="project-image">
                    {/* 🔥 Badge */}
                    {project.status === "Em desenvolvimento" && (
                      <span className="dev-badge">{t.dev}</span>
                    )}

                    <div className="image-overlay">
                      <Link
                        to={`/project/${project.id}`}
                        className="details-btn"
                      >
                        {t.btnOverlay}
                      </Link>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3>
                      <Link to={`/project/${project.id}`}>{project.title}</Link>
                    </h3>

                    <p className="project-description">{project.description}</p>

                    <div className="project-techs">
                      {project.techs.map((tech, idx) => (
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
                        {t.projectUrl}
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