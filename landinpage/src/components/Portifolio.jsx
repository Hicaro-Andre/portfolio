import React from 'react';
import '../styles/Portifolio.css';
import testeprogect from "../assets/images/portifolio_image/teste.jpg"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Educação Financeira",
      description: "Sistema completo de cadastro e gerenciamento de clientes com painel administrativo.",
      image: testeprogect,
      status: "Em andamento",
      github: "https://github.com/seuusuario/projeto1",
      live: "https://projeto1.vercel.app"
    },
    {
      id: 2,
      title: "Ecommerce API",
      description: "Landing page responsiva para consultoria financeira com formulário integrado.",
      image: testeprogect,
      status: "Em andamento",
      github: "https://github.com/seuusuario/projeto2",
      live: "https://projeto1.vercel.app"
    },
    // {
    //   id: 3,
    //   title: "Projeto Tal 3",
    //   description: "API RESTful com Node.js e MongoDB para e-commerce de livros.",
    //   image: "/images/projeto3.png",
    //   status: "Em pausa",
    //   github: "https://github.com/seuusuario/projeto3",
    //   live: ""
    // }
  ];

  return (
    <section className="port" id="port">
      <h2>Boas-Vindas ao meu Portfólio</h2>

      <div className="port__container">
        {projects.map((project) => (
          <div key={project.id} className="card__port animated zoom-in">
            <img src={project.image} alt={`Imagem do ${project.title}`} />
            <h3>{project.title}</h3>
            <div className={`status-badge ${project.status.toLowerCase().replace(" ", "-")}`}>
              {project.status}
            </div>
            <p>{project.description}</p>

            <div className="card__buttons">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="btn">
                  Ver Projeto
                </a>
              )}
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
