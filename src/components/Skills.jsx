import "/src/styles/Skills.css";
import {
  Layout,
  Server,
  Wrench,
  Languages,
} from "lucide-react";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">
        Habilidades
        <span />
      </h2>

      <div className="skills-grid">
        {/* FRONT-END */}
        <div className="skills-card">
          <div className="skills-header pink">
            <Layout size={22} />
            <h3>Front-end</h3>
          </div>

          <ul className="skills-list">
            <li>HTML5</li>
            <li>CSS3 (Flexbox, Grid)</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Responsividade & Acessibilidade</li>
          </ul>
        </div>

        {/* BACK-END */}
        <div className="skills-card">
          <div className="skills-header purple">
            <Server size={22} />
            <h3>Back-end</h3>
          </div>

          <ul className="skills-list">
            <li>PHP</li>
            <li>Laravel</li>
            <li>APIs RESTful</li>
            <li>Autenticação & Segurança</li>
            <li>Node.js (básico)</li>
          </ul>
        </div>

        {/* OUTRAS FERRAMENTAS */}
        <div className="skills-card">
          <div className="skills-header gradient">
            <Wrench size={22} />
            <h3>Outras Ferramentas</h3>
          </div>

          <ul className="skills-list">
            <li>Git & GitHub</li>
            <li>MySQL / PostgreSQL</li>
            <li>Clean Code</li>
            <li>Metodologias Ágeis</li>
            <li>Figma (UI/UX)</li>
          </ul>
        </div>

        {/* IDIOMAS */}
        <div className="skills-card">
          <div className="skills-header languages">
            <Languages size={22} />
            <h3>Idiomas</h3>
          </div>

          <ul className="skills-list">
            <li>
              <strong>Português</strong> – Nativo
            </li>
            <li>
              <strong>Inglês</strong> – Intermediário <br />
              <span className="skill-note">
                Leitura de documentação, artigos técnicos e comunicação básica
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
