import { useState } from "react";
import "/src/styles/Skills.css";
import {
  Code2,
  Server,
  Wrench,
  Languages,
  ChevronDown,
  Smartphone,
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiStoryblok,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

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
            <Code2 size={22} />
            <h3>Desenvolvimento Frontend</h3>
          </div>

          <ul className="skills-list enhanced">
            {/* html */}
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

            {/* css */}
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

            {/* js */}
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

            {/* ts */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <SiTypescript color="#4C9AFF" />
                  TypeScript
                </span>
                <span className="skill-percent">50%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "50%" }} />
              </div>
            </li>

            {/* React */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <FaReact color="#7DF9FF" />
                  React
                </span>
                <span className="skill-percent">65%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "65%" }} />
              </div>
            </li>
          </ul>
        </div>

        {/* BACK-END */}
        <div className="skills-card">
          <div className="skills-header purple">
            <Server size={22} />
            <h3>Backend e Database</h3>
          </div>

          <ul className="skills-list enhanced">
            {/* node */}
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

            {/* Express */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <SiExpress color="#F0F8FF" />
                  Express
                </span>
                <span className="skill-percent">80%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "80%" }} />
              </div>
            </li>

            {/* MongoDB */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <SiMongodb color="#6FCF97" />
                  MongoDB
                </span>
                <span className="skill-percent">75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "75%" }} />
              </div>
            </li>

            {/* Firebase */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <SiFirebase color="#FFCA28" />
                  Firebase
                </span>
                <span className="skill-percent">70%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "70%" }} />
              </div>
            </li>
          </ul>
        </div>

        {/* MOBILE */}
        {/* <div className="skills-card">
          <div className="skills-header green">
            <Smartphone size={22} />
            <h3>Desenvolvimento Mobile</h3>
          </div>

          <ul className="skills-list enhanced">
            
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <FaReact color="#61DAFB" />
                  React Native
                </span>
                <span className="skill-percent">40%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "40%" }} />
              </div>
            </li>
          </ul>
        </div> */}

        {/* OUTRAS FERRAMENTAS */}
        <div className="skills-card">
          <div className="skills-header gradient">
            <Wrench size={22} />
            <h3>Outras Ferramentas</h3>
          </div>

          <ul className="skills-list enhanced">
            {/* git */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <FaGitAlt color="#FF5E00" />
                  Git
                </span>
                <span className="skill-percent">90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }} />
              </div>
            </li>

            {/* GitHub */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <FaGithub color="#F0F8FF" />
                  GitHub
                </span>
                <span className="skill-percent">85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }} />
              </div>
            </li>

            {/* Storyblok */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <SiStoryblok color="#0CE8E0" />
                  Storyblok
                </span>
                <span className="skill-percent">70%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "70%" }} />
              </div>
            </li>
          </ul>
        </div>

        {/* IDIOMAS */}
        <div className="skills-card">
          <div className="skills-header gradient">
            <Languages size={22} />
            <h3>Idiomas</h3>
          </div>

          <ul className="skills-list enhanced">
            {/* português */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <img
                    src="https://flagcdn.com/br.svg"
                    alt="Brasil"
                    className="flag"
                  />
                  Português
                </span>
                <span className="language-level native">Nativo</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "100%" }} />
              </div>
            </li>

            {/* inglês */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <img
                    src="https://flagcdn.com/us.svg"
                    alt="Estados Unidos"
                    className="flag"
                  />
                  Inglês
                </span>
                <span className="skill-percent">50%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "50%" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
