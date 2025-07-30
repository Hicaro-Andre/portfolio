import React from 'react';
import '../styles/About.css';

const About = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Seção de contato não encontrada!");
    }
  };

  return (
    <section className="about" id="about">
      <h2>Sobre Mim</h2>
      <div className="about__content">
        <div className="about__text animated slide-in-left">
          <div className="about__description">
            <p>
              Prazer, sou um desenvolvedor Full Stack apaixonado por
              tecnologia e inovação. Tenho experiência prática em diversas
              stacks e estou sempre em busca de criar soluções digitais
              robustas, eficientes e com design elegante.
            </p>
            <p>
              Neste portfólio, compartilho não apenas projetos, mas a
              mentalidade por trás de cada desenvolvimento — onde
              criatividade, lógica e foco no usuário se unem para
              transformar ideias em experiências reais.
            </p>
            <p>
              Estou pronto para contribuir com equipes que valorizam
              qualidade, colaboração e resultados.
            </p>
          </div>
        </div>

        <div className="about__cta animated slide-in-right">
          <button onClick={handleContactClick} className="cta-button">
            <span>Contate-me</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
