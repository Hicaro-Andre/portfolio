import "/src/styles/Experience.css";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <header className="experience-header">
          <h2>Experiência</h2>
          <span className="experience-line" />
        </header>

        <div className="timeline">

          {/* ITEM 1 */}
          <div className="timeline-item left">
            <span className="timeline-dot" />
            <div className="timeline-card">
              <h3>Desenvolvedora Full Stack Júnior</h3>
              <p className="company">SES / MA</p>
              <span className="date">Jan 2024 — Presente</span>
              <p className="description">
                Desenvolvimento de sistemas web para saúde pública,
                APIs REST e interfaces acessíveis.
              </p>

              <ul>
                <li>Laravel e PHP</li>
                <li>APIs REST</li>
                <li>MySQL e PostgreSQL</li>
              </ul>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="timeline-item right">
            <span className="timeline-dot" />
            <div className="timeline-card">
              <h3>Estagiária em Engenharia de Software</h3>
              <p className="company">DartiLab — UFMA</p>
              <span className="date">Jun 2025 — Presente</span>
              <p className="description">
                Modernização de sistemas e desenvolvimento mobile.
              </p>

              <ul>
                <li>React Native</li>
                <li>FastAPI</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="timeline-item left">
            <span className="timeline-dot" />
            <div className="timeline-card">
              <h3>Monitora de Engenharia de Software</h3>
              <p className="company">UFMA</p>
              <span className="date">Mar 2024 — Jul 2024</span>
              <p className="description">
                Apoio acadêmico e orientação em projetos.
              </p>

              <ul>
                <li>UML</li>
                <li>Scrum</li>
                <li>Git</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
