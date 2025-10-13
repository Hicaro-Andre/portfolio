import React from "react";
import "../styles/About.css";
import myfoto from "../assets/images/about_image/me.jpg";

// Ícones das tecnologias
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";


const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Coluna de texto */}
        <div className="about-text fade-in delay-0">
          <h2 className="about-title">
            <span className="highlight">Sobre</span> Mim
          </h2>

          <p className="about-tagline fade-in delay-1">
            Transformando ideias em código escalável, eficiente e elegante.
          </p>

          <p className="about-intro fade-in delay-2">
            Sou desenvolvedor Full Stack focado em construir interfaces rápidas,
            APIs escaláveis e soluções que resolvem problemas reais. Busco
            entregar código limpo e acessível, com foco em performance e UX.
          </p>

          {/* Badges de habilidades */}
          <ul className="about-badges fade-in delay-3">
            <li className="badge">
              <SiJavascript className="icon" /> JavaScript
            </li>
            <li className="badge">
              <SiTypescript className="icon" /> TypeScript
            </li>
            <li className="badge">
              <SiReact className="icon" /> React
            </li>
            <li className="badge">
              <SiNodedotjs className="icon" /> Node.js
            </li>
            <li className="badge">
              <SiExpress className="icon" /> Express
            </li>
            <li className="badge">
              <SiMongodb className="icon" /> MongoDB
            </li>
          </ul>

         
          
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
