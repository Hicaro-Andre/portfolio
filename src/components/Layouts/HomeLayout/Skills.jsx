import { useState } from "react";
import "/src/styles/Skills.css";
import { techIcons } from "/src/utils/Experience/icons"; 
import { Code2, Server, Wrench, Languages } from "lucide-react";

import translations from "/src/translations";

export default function Skills({ language }) {
  const [openLanguage, setOpenLanguage] = useState(null);

  const toggleLanguage = (lang) => {
    setOpenLanguage(openLanguage === lang ? null : lang);
  };

  const t = translations[language].skills;

  return (
    <section className="skills-section" id="skills">
      <h2 className="row-title">
        {t.title}
        <span />
      </h2>

      <div className="skills-grid">
        {/* FRONT-END */}
        <div className="skills-card">
          <div className="skills-header">
            <Code2 size={22} />
            <h3>{t.categories.frontend}</h3>
          </div>

          <ul className="skills-list enhanced">
            {/* HTML */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.html}
                  HTML5
                </span>
                <span className="skill-percent">90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }} />
              </div>
            </li>

            {/* CSS */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.css}
                  CSS3
                </span>
                <span className="skill-percent">90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }} />
              </div>
            </li>

            {/* JS */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.js}
                  JavaScript
                </span>
                <span className="skill-percent">72%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "72%" }} />
              </div>
            </li>

            {/* TS */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.ts}
                  TypeScript
                </span>
                <span className="skill-percent">66%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "66%" }} />
              </div>
            </li>

            {/* React */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.react}
                  React
                </span>
                <span className="skill-percent">75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "75%" }} />
              </div>
            </li>
          </ul>
        </div>

        {/* BACK-END */}
        <div className="skills-card">
          <div className="skills-header purple">
            <Server size={22} />
            <h3>{t.categories.backend}</h3>
          </div>

          <ul className="skills-list enhanced">
            {/* Java */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                 {techIcons.java}
                  Java
                </span>
                <span className="skill-percent">40%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "40%" }} />
              </div>
            </li>

            {/* Spring */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                 {techIcons.sprintboot}
                  Spring Boot
                </span>
                <span className="skill-percent">40%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "40%" }} />
              </div>
            </li>

            {/* Node */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.node}
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
                  {techIcons.express}
                  Express
                </span>
                <span className="skill-percent">90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }} />
              </div>
            </li>

            {/* PostgreSQL */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                   {techIcons.postgresql}
                  PostgreSQL
                </span>
                <span className="skill-percent">60%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "60%" }} />
              </div>
            </li>

            {/* MongoDB */}
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.mongo}
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
                  {techIcons.firebase}
                  Firebase
                </span>
                <span className="skill-percent">80%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "80%" }} />
              </div>
            </li>
          </ul>
        </div>

        {/* TOOLS */}
        <div className="skills-card">
          <div className="skills-header gradient">
            <Wrench size={22} />
            <h3>{t.categories.tools}</h3>
          </div>

          <ul className="skills-list enhanced">
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.git}
                  Git
                </span>
                <span className="skill-percent">92%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "92%" }} />
              </div>
            </li>

            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.github}
                  GitHub
                </span>
                <span className="skill-percent">95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "95%" }} />
              </div>
            </li>

            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.storyblok}
                  Storyblok
                </span>
                <span className="skill-percent">88%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "88%" }} />
              </div>
            </li>
          </ul>
        </div>

        {/* LANGUAGES */}
        <div className="skills-card">
          <div className="skills-header gradient">
            <Languages size={22} />
            <h3>{t.categories.languages}</h3>
          </div>

          <ul className="skills-list enhanced">
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <img src="https://flagcdn.com/br.svg" className="flag" />
                  {t.languageNames.portuguese}
                </span>
                <span className="language-level native">
                  {t.levels.native}
                </span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "100%" }} />
              </div>
            </li>

            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <img src="https://flagcdn.com/us.svg" className="flag" />
                  {t.languageNames.english}
                </span>
                <span className="skill-percent">42%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "42%" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}