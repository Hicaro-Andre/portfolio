import "/src/styles/Experience.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <header className="row-title">
          <h2>
            Experiência
            <span />
          </h2>
        </header>

        <div className="timeline">
         
          {/* card 2  */}
          <div className="timeline-item left">
            <span className="timeline-dot" />
            <div className="card-timeline">
              {/* header */}
              <div className="card-timeline-header">
                <h4 className="title">Desenvolvedor Full Stack</h4>
                <p className="company">TecTeca</p>

                <div className="period">
                  <p className="date">Jan 2024 - Remoto</p>

                  <div className="badge-group">
                    <span className="local-badge">São Luís - MA</span>
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="card-timeline-body">
                <p className="description">
                  Atuei no desenvolvimento e manutenção de aplicações web full
                  stack, trabalhando tanto no front-end quanto no back-end.
                  Desenvolvi interfaces modernas com React, Next.js, TypeScript
                  e Tailwind, além de APIs em Node.js e integrações com serviços
                  externos. Também implementei novas funcionalidades, correções
                  e melhorias em sistemas existentes, com foco em organização de
                  código, performance e escalabilidade.
                </p>

                {/* Atividades e Responsabilidades */}
                <div className="timeline-section">
                   <h5 className="timeline-title">
                    <FaCheckCircle className="timeline-icon" />
                    Atividades e Responsabilidades
                  </h5>
                  <ul>
                    <li>Desenvolvimento de projetos acadêmicos completos</li>
                    <li>Aplicação prática de modelagem de banco de dados</li>
                    <li>Implementação de algoritmos eficientes</li>
                  </ul>

                  <div className="separator"></div>
                </div>

                {/* Tecnologias Usadas */}
                <div className="timeline-section">
                 <h5 className="timeline-title">
                    <FaTools className="timeline-icon" />
                    Tecnologias Usadas
                  </h5>
                  <div className="tech-icons">
                    <FaHtml5 color="#0033FF" />
                    <FaCss3Alt color="#0033FF" />
                    <FaJs color="#0033FF" />
                    <FaReact color="#0033FF" />
                    <FaNodeJs color="#0033FF" />
                    <FaGitAlt color="#0033FF" />
                    <FaGithub color="#0033FF" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card 1  */}
          <div className="timeline-item right">
            <span className="timeline-dot" />
            <div className="card-timeline">
              {/* header */}
              <div className="card-timeline-header">
                <h4 className="title"> Co-Fundador e Web Designer</h4>
                <p className="company">Upaon Solutions</p>

                <div className="period">
                  <p className="date">Abr 2020 - Remoto</p>

                  <div className="badge-group">
                    <span className="local-badge">São Luís - MA</span>
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="card-timeline-body">
                <p className="description">
                  Startup voltada à prestação de serviços em Tecnologia da
                  Informação e desenvolvimento de software.
                </p>

                {/* Atividades e Responsabilidades */}
                <div className="timeline-section">
                  <h5 className="timeline-title">
                    <FaCheckCircle className="timeline-icon" />
                    Atividades e Responsabilidades
                  </h5>
                  <ul>
                    <li>Desenvolvimento de projetos acadêmicos completos</li>
                    <li>Aplicação prática de modelagem de banco de dados</li>
                    <li>Implementação de algoritmos eficientes</li>
                  </ul>
                </div>

                {/* Tecnologias Usadas */}
                <div className="timeline-section">
                  <h5 className="timeline-title">
                    <FaTools className="timeline-icon" />
                    Tecnologias Usadas
                  </h5>
                  <div className="tech-icons">
                    <FaHtml5 color="#0033FF" />
                    <FaCss3Alt color="#0033FF" />
                    <FaJs color="#0033FF" />
                    <FaReact color="#0033FF" />
                    <FaNodeJs color="#0033FF" />
                    <FaGitAlt color="#0033FF" />
                    <FaGithub color="#0033FF" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
