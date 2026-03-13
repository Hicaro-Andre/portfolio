import "/src/styles/About.css";
import { Code } from "lucide-react";

export default function About() {
  return (
    <section className="about-section" id="about">
      
      <h2 className="row-title">
        Sobre Mim
        <span />
      </h2>

      <div className="about-container">
        <div className="main-card">

          <div className="about-header">
            <Code size={22} />
            <span>Full Stack Developer</span>
          </div>

          <div className="about-content">
            <p>
              Formado em Ciência da Computação, foco em arquitetura bem
              estruturada, APIs eficientes e interfaces responsivas.
              Comprometido com boas práticas, performance e qualidade de
              código. Atualmente aprofundando conhecimentos em estrutura de
              dados, arquitetura de aplicações e otimização.
            </p>

            <p>
              Busco oportunidade como Desenvolvedor Full Stack Júnior para
              contribuir com soluções de qualidade e crescer profissionalmente
              em um ambiente desafiador.
            </p>
          </div>

        </div>
      </div>

      <div className="about-stats">
        <div className="stat-card">
          <strong>1+</strong>
          <span>Anos de Experiência</span>
        </div>

        <div className="stat-card">
          <strong>2+</strong>
          <span>Projetos Concluídos</span>
        </div>
      </div>

    </section>
  );
}