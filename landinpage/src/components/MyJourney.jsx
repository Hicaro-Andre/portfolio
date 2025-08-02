import React, { useState } from "react";
import "../styles/MyJourney.css";
import { FaGraduationCap, FaBriefcase, FaTrophy } from "react-icons/fa";

const milestones = [
  {
    year: "2020",
    title: "Formação em Ciência da Computação",
    description: "Graduação concluída na Universidade XYZ.",
    icon: <FaGraduationCap />,
  },
  {
    year: "2022",
    title: "Primeiro emprego como Desenvolvedor Web",
    description: "Início da jornada profissional na empresa ABC.",
    icon: <FaBriefcase />,
  },
  {
    year: "2024",
    title: "Projeto de destaque entregue",
    description: "Liderança no desenvolvimento de um sistema full-stack.",
    icon: <FaTrophy />,
  },
];

const MyJourney = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="journey-container">
      <h2 className="journey-heading">Minha Jornada</h2>

      <div className="timeline">
        {milestones.map((item, index) => (
          <div key={index} className="timeline-item fadeIn">
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              {expanded && (
                <p className="timeline-description">{item.description}</p>
              )}
            </div>
          </div>
        ))}
        <button
          className="toggle-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Recolher descrições" : "Expandir descrições"}
        </button>
      </div>

      <div className="english-section">
        <h3>Progresso em Inglês</h3>
        <div className="progress-wrapper">
          <span className="english-badge">
            Intermediário-Avançado (B2)
          </span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "70%" }}></div>
          </div>
        </div>
        <p className="english-description">
          Estudo inglês desde 2020 através de plataformas online como Duolingo, vídeos no YouTube e leitura técnica.
        </p>
      </div>
    </section>
  );
};

export default MyJourney;
