import "/src/styles/About.css";
import { Code, RefreshCw, Crosshair } from "lucide-react";

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
            <div className="main-text">
              <span className="main-badge">Full Stack Developer</span>

              <p>
                Desenvolvedor com formação em Ciência da Computação, focado em
                arquitetura bem estruturada, APIs eficientes e interfaces
                responsivas.
              </p>

              <p>
                Busco evolução contínua em performance, segurança e qualidade de
                código, aplicando boas práticas e organização em cada projeto.
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

        {/* CARDS SECUNDÁRIOS */}
        <div className="about-grid">
          <div className="card">
            <div className="card-header">
              <div className="icon pink">
                <RefreshCw size={20} />
              </div>
              <h3>Evolução Contínua</h3>
            </div>

            <p>
              Atualmente focado em consolidar fundamentos de estrutura de dados,
              arquitetura de aplicações e desenvolvimento orientado a
              performance.
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="icon pink">
                <Crosshair size={20} />
              </div>
              <h3>Objetivo</h3>
            </div>

            <p>
              Busco oportunidade como Desenvolvedor Full Stack Júnior para
              aplicar meus conhecimentos em projetos reais, contribuir com
              soluções de qualidade e crescer profissionalmente em um ambiente
              desafiador.
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
