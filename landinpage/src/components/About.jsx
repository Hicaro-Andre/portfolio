import React from "react";
import "../styles/About.css";
import myfoto from "../assets/images/about_image/me.jpg";

// Ícones
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiStoryblok,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
  SiReactrouter,
  SiApollographql,
} from "react-icons/si";

const About = () => {
  return (
    <section className="about" id="about">
      
      <div className="about-header fade-in delay-0">
        <h2>
          <span className="highlight">Sobre</span> Mim
        </h2>
        <p className="subtitle fade-in delay-1">
           Sou <span className="text-strong">Hicaro André</span>, desenvolvedor Full Stack formado em Ciência da Computação, apaixonado por tecnologia e pelo poder de transformar ideias em soluções reais. Acredito que um bom sistema nasce da união entre lógica, design e propósito.
        </p>
      </div>

     
      <div className="about-container fade-in delay-2">
        
        <div className="about-skills">

          {/* Badges */}
          <ul className="about-badges">
            <li className="badge"><SiHtml5 className="icon" /> HTML</li>
            <li className="badge"><SiCss3 className="icon" /> CSS</li>
            <li className="badge"><SiJavascript className="icon" /> JavaScript</li>
            <li className="badge"><SiTypescript className="icon" /> TypeScript</li>
            <li className="badge"><SiReact className="icon" /> React</li>
            <li className="badge"><SiNextdotjs className="icon" /> Next.js</li>
            <li className="badge"><SiTailwindcss className="icon" /> Tailwind</li>
            <li className="badge"><SiBootstrap className="icon" /> Bootstrap</li>
            <li className="badge"><SiSass className="icon" /> Sass</li>
            <li className="badge"><SiNodedotjs className="icon" /> Node.js</li>
            <li className="badge"><SiExpress className="icon" /> Express</li>
            <li className="badge"><SiStoryblok className="icon" /> Storyblok</li>
            <li className="badge"><SiMysql className="icon" /> MySQL</li>
            <li className="badge"><SiMongodb className="icon" /> MongoDB</li>
            <li className="badge"><SiGit className="icon" /> Git</li>
            <li className="badge"><SiGithub className="icon" /> GitHub</li>
            <li className="badge"><SiJsonwebtokens className="icon" /> JWT</li>
            <li className="badge"><SiReactrouter className="icon" /> MVC</li>
            <li className="badge"><SiApollographql className="icon" /> API REST</li>
          </ul>

           {/* Nível de Inglês destacado */}
          <div className="english-level fade-in delay-3">
            <h3 className="english-title">Inglês</h3>
            <p className="english-text">
              Atualmente estou no nível <strong>Intermediário (B1/B2)</strong>, focando em fluência oral, escrita e compreensão de textos técnicos e do dia a dia.
            </p>
            <div className="level-bar">
              <div className="level-progress" style={{ width: "45%" }}>
                <span className="level-text">Intermediário (B1/B2)</span>
              </div>
            </div>
          </div>
        </div>

       
        <div className="about-photo">
          <div className="photo-wrapper">
            <img
              src={myfoto}
              alt="Hicaro André - Desenvolvedor Full Stack"
              className="photo"
            />
            <div className="photo-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
