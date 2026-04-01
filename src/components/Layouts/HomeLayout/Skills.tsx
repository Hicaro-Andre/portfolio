import { useState } from "react";
import "/src/styles/Skills.css";
import { techIcons } from "/src/components/icons/techIcons";
import { Code2, Server, Wrench, Languages } from "lucide-react";
import translations from "/src/translations";

// Tipagem das props
type SkillsProps = {
  language: "pt" | "en";
};

// Tipagem flexível (evita erro sem precisar tipar todo translations agora)
type Translations = {
  [key: string]: any;
};

export default function Skills({ language }: SkillsProps) {
  const [openLanguage, setOpenLanguage] = useState<string | null>(null);

  const toggleLanguage = (lang: string) => {
    setOpenLanguage(openLanguage === lang ? null : lang);
  };

  const t = (translations as Translations)[language]?.skills;

  return (
    <section className="skills-section" id="skills">
      <h2 className="row-title">
        {t.title}
        <span />
      </h2>

      <div className="skills-grid">
        {/* FRONT-END */}
        <div className="card skills-card">
          <div className="skills-header">
            <Code2 size={22} />
            <h3>{t.categories.frontend}</h3>
          </div>

          <ul className="skills-list enhanced">
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.html}
                  HTML5
                </span>
                <span className="skill-percent">98%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "98%" }} />
              </div>
            </li>

            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.css}
                  CSS3
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
                  {techIcons.js}
                  JavaScript
                </span>
                <span className="skill-percent">82%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "82%" }} />
              </div>
            </li>

            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.ts}
                  TypeScript
                </span>
                <span className="skill-percent">80%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "80%" }} />
              </div>
            </li>

            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  {techIcons.sass}
                  Sass
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
                  {techIcons.tailwind}
                  Tailwind
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
                  {techIcons.react}
                  React
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
                  {techIcons.nextjs}
                  NextJs
                </span>
                <span className="skill-percent">78%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "78%" }} />
              </div>
            </li>
          </ul>
        </div>

        {/* BACK-END */}
        <div className="card skills-card">
          <div className="skills-header purple">
            <Server size={22} />
            <h3>{t.categories.backend}</h3>
          </div>

          <ul className="skills-list enhanced">
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
        <div className="card skills-card">
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
        <div className="card skills-card">
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