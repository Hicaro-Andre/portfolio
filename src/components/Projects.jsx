import { useState, useEffect } from "react";
import "/src/styles/Projects.css";

const projects = [
  {
    title: "Monitora Saúde",
    description:
      "Sistema Web para monitoramento e avaliação de indicadores de saúde e processos.",
    techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],

    projectUrl: "https://monitora.saude.ma.gov.br/",
    githubUrl: "#",
  },
  {
    title: "App Hans+",
    description:
      "Plataforma com versão web e app Android que apoia o tratamento da hanseníase.",
    techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
    ],
    projectUrl: "https://hansmais.netlify.app/",
    githubUrl: "#",
  },
  {
    title: "RENAVEH",
    description:
      "Sistema web para cadastro de pacientes e gestão de notificações hospitalares.",
    techs: [
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],
    projectUrl: "https://renaveh.saude.ma.gov.br/",
    githubUrl: "#",
  },
  {
    title: "CadServ",
    description: "Sistema de cadastro e gestão de servidores.",
   techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    title: "PlanDox 2.0",
    description:
      "Software para planejamento experimental e análise de biodiesel.",
    techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portal ReACT",
    description: "Plataforma para gestão de projetos e notícias da rede ReACT.",
     techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],
    projectUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

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
        Projetos
        <span />
      </h2>

      <div className="carousel-wrapper">
        <button className="carousel-btn" onClick={prev} disabled={index === 0}>
          ‹
        </button>

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(calc(-${index} * (100% / ${visibleCards})))`,
            }}
          >
            {projects.map((project, i) => (
              <div className="project-card" key={i}>
                <div className="card-inner">
                  <div className="project-image">
                    <div className="image-overlay">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="details-btn"
                      >
                        Ver detalhes
                      </a>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>

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
                        Projeto
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

        <button
          className="carousel-btn"
          onClick={next}
          disabled={index === maxIndex}
        >
          ›
        </button>
      </div>
    </section>
  );
}
