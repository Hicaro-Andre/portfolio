import React from "react";
import "../styles/About.css";
import myfoto from "../assets/images/about_image/me.jpg"

const About = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Coluna de texto */}
        <div className="about-text fade-in delay-0">
          <h2 className="about-title">
            <span className="highlight">Sobre</span> Mim
          </h2>

          <p className="about-intro fade-in delay-1">
            Sou desenvolvedor Full Stack focado em construir interfaces rápidas,
            APIs escaláveis e soluções que resolvem problemas reais. Busco
            entregar código limpo e acessível, com foco em performance e UX.
          </p>

          {/* Badges de habilidades */}
          <ul className="about-badges fade-in delay-2">
            <li className="badge">JavaScript</li>
            <li className="badge">TypeScript</li>
            <li className="badge">React</li>
            <li className="badge">Node.js</li>
            <li className="badge">Express</li>
            <li className="badge">MongoDB</li>
          </ul>

         

          {/* Botão de download */}
          <div className="about-cta fade-in delay-4">
            <a href="/public/cv hicaro-dev.pdf" download className="cta-btn">
              Baixar CV
            </a>
          </div>
        </div>

        {/* Coluna de foto */}
        <div className="about-photo fade-in delay-2">
          <img
            src={myfoto}
            alt="Foto profissional de perfil"
            className="photo"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
