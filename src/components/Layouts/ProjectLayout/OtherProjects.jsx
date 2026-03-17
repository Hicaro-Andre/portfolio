import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "/src/data/projects.js";
import "/src/styles/OtherProjects.css";

export default function OtherProjects() {
  const { id } = useParams();

  const otherProjects = projects.filter((project) => project.id !== Number(id));

  const [index, setIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 768) {
        setVisibleCards(1);
        setIsCarousel(otherProjects.length >= 5);
      } else {
        setVisibleCards(3);
        setIsCarousel(otherProjects.length >= 4);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [otherProjects.length]);

  const maxIndex = otherProjects.length - visibleCards;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="other-projects">
      <h3 className="row-title">
        Outros Projetos
        <span />
      </h3>

      {/* GRID NORMAL */}
      {!isCarousel && (
        <div className="other-projects-grid">
          {otherProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="other-project-card"
            >
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-techs">
                {project.techs.map((tech, i) => (
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
      )}

      {/* CAROUSEL */}
      {isCarousel && (
        <div className="carousel-wrapper">
          <button
            className="carousel-btn"
            onClick={prev}
            disabled={index === 0}
          >
            ‹
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(calc(-${index} * (100% / ${visibleCards})))`,
              }}
            >
              {otherProjects.map((project) => (
                <div className="carousel-card" key={project.id}>
                  <Link
                    to={`/project/${project.id}`}
                    className="other-project-card"
                  >
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-techs">
                      {project.techs.map((tech, i) => (
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
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-btn"
            onClick={next}
            disabled={index === maxIndex}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
