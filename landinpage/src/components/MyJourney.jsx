import React, { useEffect, useState } from "react";
import "../styles/MyJourney.css";

const timelineData = [
  {
    year: "2018",
    title: "Formação em Ciência da Computação",
    description:
      "Concluí o curso de Ciência da Computação, adquirindo bases sólidas em programação e lógica.",
    icon: "🎓",
  },
  {
    year: "2019",
    title: "Estágio em Desenvolvimento Web",
    description:
      "Trabalhei com front-end e back-end, desenvolvendo projetos reais para clientes.",
    icon: "💻",
  },
  {
    year: "2021",
    title: "Primeiro projeto Full Stack",
    description:
      "Implementei um sistema completo com React e Node.js, integrando APIs e banco de dados.",
    icon: "🚀",
  },
  {
    year: "2023",
    title: "Especialização em Back-End",
    description:
      "Aprimorei habilidades em Node.js, Express, MongoDB e escalabilidade de sistemas.",
    icon: "⚙️",
  },
];

const MyJourney = () => {
  const [englishProgress, setEnglishProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnglishProgress((prev) => {
        if (prev >= 75) return 75; // Avançado
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="journey" id="journey">
      <div className="journey-header">
        <h2>Minha Jornada</h2>
        <p>Um resumo da minha trajetória profissional e evolução pessoal.</p>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className="timeline-card fade-in" key={index}>
            <div className="timeline-marker">{item.icon}</div>
            <div className="timeline-body">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* English Progress */}
      <div className="english-progress">
        <h3>Nível de Inglês</h3>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${englishProgress}%` }}
          ></div>
          <div className="milestones">
            <span>Básico</span>
            <span>Intermediário</span>
            <span>Avançado</span>
            <span>Fluente</span>
          </div>
        </div>
        <small>Progresso atual: {englishProgress}%</small>
      </div>
    </section>
  );
};

export default MyJourney;
