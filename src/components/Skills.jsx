import { useState } from "react";
import "/src/styles/Skills.css";
import {
  Layout,
  Server,
  Wrench,
  Languages,
  ChevronDown,
} from "lucide-react";

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
  const [openLanguage, setOpenLanguage] = useState(null);

  const toggleLanguage = (lang) => {
    setOpenLanguage(openLanguage === lang ? null : lang);
  };

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
            <h3>Desenvolvimento Frontend</h3>
          </div>

          <ul className="skills-list enhanced">
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <FaHtml5 color="#ff0000" />
                  HTML5
                </span>
                <span className="skill-percent">90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }} />
              </div>
            </li>

            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <FaCss3Alt color="#0033FF" />
                  CSS3
                </span>
                <span className="skill-percent">85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }} />
              </div>
            </li>

            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <FaJs color="#ffff00" />
                  JavaScript
                </span>
                <span className="skill-percent">55%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "55%" }} />
              </div>
            </li>
          </ul>
        </div>

        {/* BACK-END */}
        <div className="skills-card">
          <div className="skills-header purple">
            <Server size={22} />
            <h3>Desenvolvimento Backend</h3>
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
                <div className="progress-fill" style={{ width: "90%" }} />
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
                <div className="progress-fill" style={{ width: "90%" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* IDIOMAS */}
      <div className="languages-content">
        <div className="skills-header languages">
          <Languages size={22} />
          <h3>Idiomas</h3>
        </div>

        <ul className="languages-list">
          {/* Português */}
          <li className="language-item">
            <div className="language-top">
              <span className="flag">🇧🇷</span>
              <span className="language-name">Português</span>
              <span className="language-level native">Nativo</span>
            </div>
          </li>

          {/* Inglês com Accordion */}
          <li className="language-item">
            <div
              className="language-top clickable"
              onClick={() => toggleLanguage("english")}
            >
              <span className="flag">🇺🇸</span>
              <span className="language-name">Inglês</span>
              <span className="language-level intermediate">
                Intermediário
              </span>

              <ChevronDown
                size={18}
                className={`arrow ${
                  openLanguage === "english" ? "rotate" : ""
                }`}
              />
            </div>

            {openLanguage === "english" && (
              <span className="language-note">
                Leitura de documentação, artigos técnicos e comunicação básica
              </span>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}