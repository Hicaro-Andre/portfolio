import React from 'react';
import '../styles/Portifolio.css'; 

const Portfolio = () => {
  // Dados dos projetos (pode vir de uma API ou arquivo JSON)
  const projects = [
    {
      id: 1,
      title: "Projeto Tal 1",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus reiciendis nisi iste odit laudantium! Minima officiis, aut impedit sapiente numquam fugiat voluptatum, amet tenetur suscipit qui perspiciatis ab! Nulla, cumque!",
      image: "" // Adicione o caminho da imagem
    },
    {
      id: 2,
      title: "Projeto Tal 2",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus reiciendis nisi iste odit laudantium! Minima officiis, aut impedit sapiente numquam fugiat voluptatum, amet tenetur suscipit qui perspiciatis ab! Nulla, cumque!",
      image: "" // Adicione o caminho da imagem
    },
    {
      id: 3,
      title: "Projeto Tal 3",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus reiciendis nisi iste odit laudantium! Minima officiis, aut impedit sapiente numquam fugiat voluptatum, amet tenetur suscipit qui perspiciatis ab! Nulla, cumque!",
      image: "" // Adicione o caminho da imagem
    }
  ];

  return (
    <section className="port" id="port">
      <h2>Boas-Vindas ao meu Portfólio</h2>
      <div className="port__container">
        {projects.map((project) => (
          <div key={project.id} className="card__port animated zoom-in">
            <img src={project.image} alt={`foto do ${project.title}`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;