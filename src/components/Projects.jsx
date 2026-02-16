import { useState } from "react";
import "/src/styles/Projects.css";

const projects = [
  {
    title: "Monitora Saúde",
    description:
      "Sistema Web para monitoramento e avaliação de indicadores de saúde e processos, oferecendo dados atualizados para apoiar a gestão, o planejamento estratégico e a promoção da saúde no Maranhão.",
    techs: ["Laravel", "PostgreSQL"],
    projectUrl: "https://monitora.saude.ma.gov.br/",
    githubUrl: "#",
  },
  {
    title: "App Hans+",
    description:
      "Plataforma com versão web e app Android que apoia o tratamento da hanseníase, permitindo registrar medicações, monitorar sintomas e acessar informações confiáveis.",
    techs: ["Flutter", "Dart", "Firebase"],
    projectUrl: "https://hansmais.netlify.app/",
    githubUrl: "#",
  },
  {
    title: "RENAVEH",
    description:
      "Sistema web para cadastro de pacientes, gestão de notificações hospitalares e transferências entre hospitais, com controle de acessos por permissões.",
    techs: ["Laravel", "MySQL"],
    projectUrl: "https://renaveh.saude.ma.gov.br/",
    githubUrl: "#",
  },
  {
    title: "CadServ",
    description:
      "Sistema de cadastro e gestão de servidores, permitindo controle de dados pessoais, funcionais e administrativos.",
    techs: ["Laravel", "MySQL"],
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    title: "PlanDox 2.0",
    description:
      "Nova versão de um software para planejamento experimental e análise de qualidade do biodiesel, com arquitetura baseada em microserviços.",
    techs: ["Python", "Docker"],
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portal ReACT",
    description:
      "Plataforma para gestão de projetos, notícias, editais e equipes da Rede de Aplicação de Ciência e Tecnologia (ReACT).",
    techs: ["Laravel", "PostgreSQL"],
    projectUrl: "#",
    githubUrl: "#",
  },
];

const CARD_WIDTH = 360;
const VISIBLE_CARDS = 3;

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  const maxIndex = projects.length - VISIBLE_CARDS;

  return (
    <section className="projects" id="projects">
      <h2 className="row-title">
        Projetos
        <span />
      </h2>

      <div className="carousel-wrapper">
        <button
          className="carousel-btn"
          onClick={() => index > 0 && setIndex(index - 1)}
          disabled={index === 0}
        >
          ‹
        </button>

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
            }}
          >
            {projects.map((project, i) => (
              <div className="project-card" key={i}>
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
                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-techs">
                    {project.techs.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
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
            ))}
          </div>
        </div>

        <button
          className="carousel-btn"
          onClick={() => index < maxIndex && setIndex(index + 1)}
          disabled={index === maxIndex}
        >
          ›
        </button>
      </div>
    </section>
  );
}
