import "/src/styles/Skills.css";
import { Layout, Server, Wrench, Languages } from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaPhp,
  FaLaravel,
  FaDocker,
} from "react-icons/fa";

import { SiTypescript, SiMysql, SiPostgresql } from "react-icons/si";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="row-title">
        Habilidades
        <span />
      </h2>

      <div className="skills-grid">
        {/* FRONT-END */}
        <div className="skills-card">
          <div className="skills-header">
            <Layout size={22} />
            <h3>Front-end</h3>
          </div>

          <ul className="skills-list enhanced">
            {/* HTML */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <FaHtml5 color="#ff0000" />
                  HTML5
                </span>
                <span className="skill-percent">90%</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }}></div>
              </div>
            </li>

            {/* CSS */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <FaCss3Alt color="#0033FF " />
                  CSS3
                </span>
                <span className="skill-percent">85%</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
            </li>

            {/* JS */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <FaJs color="#ffff00" />
                  JavaScript
                </span>
                <span className="skill-percent">55%</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "55%" }}></div>
              </div>
            </li>
          </ul>
        </div>

        {/* BACK-END */}
        <div className="skills-card">
          <div className="skills-header purple">
            <Server size={22} />
            <h3>Back-end</h3>
          </div>

          <ul className="skills-list enhanced">
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <FaNodeJs color="#39ff14" />
                  Node.js
                </span>
                <span className="skill-percent">90%</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }}></div>
              </div>
            </li>
          </ul>
        </div>

        {/* OUTRAS FERRAMENTAS */}
        <div className="skills-card">
          <div className="skills-header gradient">
            <Wrench size={22} />
            <h3>Outras Ferramentas</h3>
          </div>

          <ul className="skills-list enhanced">
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <FaGitAlt color="#FF5E00" />
                  Git & GitHub
                </span>
                <span className="skill-percent">90%</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* IDIOMAS */}

      <div className="skills-header languages">
        <Languages size={22} />
        <h3>Idiomas</h3>
      </div>

      <ul className="languages-list">
        <li className="language-item">
          <div className="language-top">
            <span className="flag">🇧🇷</span>
            <span className="language-name">Português</span>
            <span className="language-level native">Nativo</span>
          </div>
        </li>

        <li className="language-item">
          <div className="language-top">
            <span className="flag">🇺🇸</span>
            <span className="language-name">Inglês</span>
            <span className="language-level intermediate">Intermediário</span>
          </div>

          <span className="language-note">
            Leitura de documentação, artigos técnicos e comunicação básica
          </span>
        </li>
      </ul>
    </section>
  );
}
