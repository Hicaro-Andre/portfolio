import React from "react";
import "../styles/CareerJourney.css";
import { motion } from "framer-motion";
import { FaUserTie, FaRocket, FaGraduationCap, FaBook } from "react-icons/fa";

const CareerJourney = () => {
  const timeline = [
    {
      year: "2019",
      title: "Formação Acadêmica",
      subtitle:
        " Bacharel em Ciências da Computação -  Faculdade Pitágoras - FAMA",
      desc: "Comecei estudando lógica de programação e fundamentos de HTML, CSS e JavaScript.",
      icon: <FaGraduationCap />,
    },
    {
      year: "2019 - 2020",
      title: "Upaon Solutions",
      subtitle: "Co-Fundador e Web Designer",
      desc: "A Upaon Solutions foi uma startup voltada para a prestação de serviços em tecnologia da informação e desenvolvimento de software. Atuei como Web Designer, sendo responsável pela criação de interfaces intuitivas e responsivas. Como Co-Fundador, colaborei diretamente na estruturação da empresa, planejamento de projetos e definição de processos, contribuindo para o posicionamento inicial da marca no mercado de TI.",
      icon: <FaRocket />,
    },
    {
      year: "2023 - 2024",
      title: "TecTeca",
      subtitle: "Desenvolvedor Full Stack",
      desc: "Responsável pelo desenvolvimento full stack de aplicações web, com foco na implementação de novas funcionalidades e na análise de sistemas em back-end e front-end. Utilizo tecnologias modernas como Node.js, React, Next.js, TypeScript, JavaScript, Tailwind CSS, Storyblok, entre outras. Destaques incluem a criação de componentes reutilizáveis, consumo de APIs REST/GraphQL, e estruturação de aplicações com foco em performance e escalabilidade.",
      icon: <FaUserTie />,
    },
    {
      year: "2025",
      title: "Desenvolvimento Contínuo",
      subtitle: "Especialização Front-End, Back End & Inglês ",
      desc: "Em busca constante da excelência: atualmente imerso no programa Front-End da Softex, aprofundando React e TypeScript enquanto evoluo para inglês intermediário-avançado. Preparando-me para desafios globais e contribuições significativas em equipes de alta performance, com foco em criar experiências digitais excepcionais.",
      icon: <FaBook />,
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
          <h2 className="title-section">
            <span className="highlight">Minha</span> Jornada
          </h2>
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
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="english-section fade-in">
          <h3 className="english-title">Estudando Inglês </h3>
          <p className="english-text">
            Atualmente estou no módulo <strong>MAR</strong> do curso Mairo
            Vergara 5.0 — um passo importante no aprendizado real do inglês,
            focado em compreensão oral (áudio e vídeo) em nível autêntico.
          </p>
          <p className="english-text">
            Meu objetivo é alcançar fluência — entender, falar, ler e escrever
            com naturalidade no idioma.
          </p>

          <div className="level-bar">
            <div className="level-progress" style={{ width: "45%" }}>
              <span className="level-text">Intermediário (entre B1 e B2)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;
