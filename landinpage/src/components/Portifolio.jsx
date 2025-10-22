import React from "react";
import "../styles/Portifolio.css";
import edf from "../assets/images/portifolio_image/edf.png";
import api from "../assets/images/portifolio_image/APIs.png";
import redenave from "../assets/images/portifolio_image/REDE NAVE.png";

// Ícones locais
import gitIcon from "../assets/images/portifolio_image/github-dark.svg";
import eyeIcon from "../assets/images/portifolio_image/eye.svg";




const Portifolio = () => {
  const projects = [
    {
      id: 1,
      title: "Educação Financeira",
      description:
        "Sistema completo de cadastro e gerenciamento de clientes com painel administrativo.",
      image: edf,
      status: "Em andamento",
      github: "https://github.com/Hicaro-Andre/educacao_financeira_web.git",
      live: "https://educacao-financeira-web.vercel.app/",
    },
    {
      id: 2,
      title: "Ecommerce API",
      description:
        "Landing page responsiva para consultoria financeira com formulário integrado.",
      image: api,
      status: "Em andamento",
      github: "https://github.com/seuusuario/projeto2",
      live: "https://projeto1.vercel.app",
    },
    {
      id: 3,
      title: "Projeto Integrador",
      description:
        "Landing page responsiva para consultoria financeira com formulário integrado.",
      image: redenave,
      status: "Em andamento",
      github: "https://github.com/seuusuario/projeto2",
      live: "https://projeto1.vercel.app",
    },
  ];

  return (
    <section className="port" id="port">
      <h2>
        <span className="highlight">Boas-Vindas</span> ao meu Portfólio
      </h2>
      <div className="port__container">
        {projects.map((project) => (
          <div key={project.id} className="card__port animated zoom-in">
            <img src={project.image} alt={`Imagem do ${project.title}`} />
            <h3>{project.title}</h3>

            {/* Badge do Status */}
            <div
              className={`status-badge ${
                project.status.toLowerCase().includes("andamento")
                  ? "in-progress"
                  : project.status.toLowerCase().includes("concluído")
                  ? "completed"
                  : "paused"
              }`}
            >
              {project.status}
            </div>

            <p>{project.description}</p>

            {/* Botões */}
            <div className="card__buttons">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  <img src={eyeIcon} alt="Ver Projeto" className="icon-btn" />
                  Ver Projeto
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <img src={gitIcon} alt="GitHub" className="icon-btn" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portifolio;
