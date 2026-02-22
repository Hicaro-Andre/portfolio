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
        {/* CARD PRINCIPAL */}
        <div className="main-card">
          <div className="main-content">
            {/* LADO ESQUERDO */}
            <div className="card main-text">
              <div className="about-header">
                <Code size={22} />
                <span>Full Stack Developer</span>
              </div>
              <p>
                Formado em Ciência da Computação, foco em arquitetura bem
                estruturada, APIs eficientes e interfaces responsivas.
                Comprometido com boas práticas, performance e qualidade de
                código. Atualmente aprofundando conhecimentos em estrutura de
                dados, arquitetura de aplicações e otimização. Busco
                oportunidade como Desenvolvedor Full Stack Júnior para
                contribuir com soluções de qualidade e crescer profissionalmente
                em um ambiente desafiador.
              </p>
            </div>

            {/* LADO DIREITO */}
            <div className="main-highlight">
              <div className="code-visual">
                <div className="code-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="file-name">developer.js</span>
                </div>

                <pre className="code-block">
                  {`const developer = {
  focus: "Performance",
  architecture: "Clean & Scalable",
  stack: ["Node.js", "React"],
  mindset: "Continuous Evolution"
}`}
                </pre>
              </div>
            </div>
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
