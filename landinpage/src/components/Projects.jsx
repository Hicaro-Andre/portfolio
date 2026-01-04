import React from "react";
import "/src/styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "App Hans+",
      description:
        "O Hans+ é uma plataforma com versão web e app Android que apoia o tratamento da hanseníase, permitindo registrar medicações, monitorar sintomas e acessar informações confiáveis.",
      techs: ["Flutter", "Dart", "Firebase"],
      status: null,
    },
    {
      title: "RENAVEH",
      description:
        "Sistema web para cadastro de pacientes, gestão de notificações hospitalares e transferências entre hospitais, com controle de acesso por papéis e permissões.",
      techs: ["Laravel", "MySQL"],
      status: null,
    },
    {
      title: "Maranhão Livre da Fome",
      description:
        "Sistema no eixo saúde que combate a insegurança alimentar com cadastro e acompanhamento de famílias em vulnerabilidade, permitindo avaliações e histórico individual.",
      techs: ["Laravel", "MySQL"],
      status: "Em Desenvolvimento",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projetos</h2>
      <span className="projects-line" />

      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              {project.status && (
                <span className="project-status">{project.status}</span>
              )}
              <span className="project-hover">Ver Detalhes</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-techs">
                {project.techs.map((tech, i) => (
                  <span className="tech-badge" key={i}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href="#">Ver Projeto</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
