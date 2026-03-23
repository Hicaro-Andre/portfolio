import "/src/styles/About.css";
import { Code } from "lucide-react";
import { getExperience } from "/src/utils/dateUtils.js";
import { projects } from "/src/data/projects.js";

export default function About() {
  const completedProjects = projects.filter(
    (project) => project.status === "Concluído",
  ).length;

  return (
    <section className="about-section" id="about">
      <h2 className="row-title">
        Sobre Mim
        <span />
      </h2>

      <div className="about-container">
        <div className="main-card">
          <div className="about-top">
            <span className="about-role">Full Stack Developer</span>
          </div>

          <div className="about-text">
            <p>
              Desenvolvedor Full Stack formado em Ciência da Computação, com
              foco em construção de aplicações modernas, APIs eficientes e
              interfaces responsivas.
            </p>

            <p>
              Busco criar soluções bem estruturadas, com código limpo,
              performance e escalabilidade. Atualmente evoluindo em arquitetura
              de software e estrutura de dados.
            </p>

            <p className="about-highlight">
              Em busca da minha primeira oportunidade como desenvolvedor
              júnior.
            </p>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-card">
          <strong>{getExperience()}+</strong>
          <span>Anos de Experiência</span>
        </div>

        <div className="stat-card">
          <strong>{completedProjects}+</strong>
          <span>Projetos Concluídos</span>
        </div>
      </div>
    </section>
  );
}
