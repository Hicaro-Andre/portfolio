import React from "react";
import "../styles/CareerJourney.css";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaGraduationCap, FaLanguage } from "react-icons/fa";

const CareerJourney = () => {
  const timeline = [
    {
      year: "2022",
      title: "Início na Programação",
      desc: "Comecei estudando lógica de programação e fundamentos de HTML, CSS e JavaScript.",
      icon: <FaCode />,
    },
    {
      year: "2023",
      title: "Front-End Moderno",
      desc: "Aprofundei meus estudos em React, Next.js e Tailwind, criando interfaces modernas e performáticas.",
      icon: <FaRocket />,
    },
    {
      year: "2024",
      title: "Full Stack Development",
      desc: "Expandindo para o back-end com Node.js, Express e banco de dados (MongoDB e MySQL).",
      icon: <FaGraduationCap />,
    },
    {
      year: "2025",
      title: "Nível Atual",
      desc: "Estudando em inglês para aprimorar fluência técnica e consolidar habilidades avançadas em React e TypeScript.",
      icon: <FaLanguage />,
    },
  ];

  return (
    <section className="career" id="career">
      <div className="career-container">
        <motion.h2
          className="career-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="highlight">Minha</span> Jornada
        </motion.h2>

        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="english-section fade-in">
          <h3 className="english-title">📘 Study in English</h3>
          <p className="english-text">
            I’m currently improving my technical English to reach fluency in
            documentation, communication, and professional coding environments.
          </p>

          <div className="level-bar">
            <div className="level-progress" style={{ width: "70%" }}>
              <span className="level-text">Intermediate (B2)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;
