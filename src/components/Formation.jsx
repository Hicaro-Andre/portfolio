import "/src/styles/Formation.css";

export default function Formation() {
  return (
    <section className="training-section" id="formation">
      <div className="training-container">
        <header className="row-title">
          <h2>
            Formação
            <span />
          </h2>
        </header>

        <div className="timeline">
          
          {/* card 1 */}
          <div className="timeline-item left">
            <span className="timeline-dot" />
            <div className="card-timeline">
              {/* header */}
              <div className="card-timeline-header">
                {/* Badge de Status */}
                <span className="status-badge">Concluído</span>

                <h4 className="title">Bacharel em Ciências da Computação</h4>
                <p className="company">Faculdade Pitágoras - FAMA</p>

                <div className="period">
                  <p className="date">Concluído em 28 jun 2019</p>

                  <div className="badge-group">
                    <span className="local-badge">São Luís</span>
                    <span className="cr-badge">CR: 8.6/10.0</span>
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="card-timeline-body">
                <p className="description">
                  Formação focada em fundamentos de computação, engenharia de
                  software, estruturas de dados, banco de dados e
                  desenvolvimento de sistemas.
                </p>

                {/* Destaques */}
                <div className="timeline-section">
                  <h5>Destaques</h5>
                  <ul>
                    <li>Desenvolvimento de projetos acadêmicos completos</li>
                    <li>Aplicação prática de modelagem de banco de dados</li>
                    <li>Implementação de algoritmos eficientes</li>
                  </ul>
                </div>

                {/* Principais Disciplinas */}
                <div className="timeline-section">
                  <h5>Principais Disciplinas</h5>
                  <ul>
                    <li>Algoritmos</li>
                    <li>Estruturas de Dados</li>
                    <li>Banco de Dados</li>
                    <li>Engenharia de Software</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="timeline-item right">
            <span className="timeline-dot" />
            <div className="card-timeline">
              {/* header */}
              <div className="card-timeline-header">
                {/* Badge de Status */}
                <span className="status-badge">Concluído</span>

                <h4 className="title">Bacharel em Ciências da Computação</h4>
                <p className="company">Faculdade Pitágoras - FAMA</p>

                <div className="period">
                  <p className="date">Concluído em 28 jun 2019</p>

                  <div className="badge-group">
                    <span className="local-badge">São Luís</span>
                    <span className="cr-badge">CR: 8.6/10.0</span>
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="card-timeline-body">
                <p className="description">
                  Formação focada em fundamentos de computação, engenharia de
                  software, estruturas de dados, banco de dados e
                  desenvolvimento de sistemas.
                </p>

                {/* Destaques */}
                <div className="timeline-section">
                  <h5>Destaques</h5>
                  <ul>
                    <li>Desenvolvimento de projetos acadêmicos completos</li>
                    <li>Aplicação prática de modelagem de banco de dados</li>
                    <li>Implementação de algoritmos eficientes</li>
                  </ul>
                </div>

                {/* Principais Disciplinas */}
                <div className="timeline-section">
                  <h5>Principais Disciplinas</h5>
                  <ul>
                    <li>Algoritmos</li>
                    <li>Estruturas de Dados</li>
                    <li>Banco de Dados</li>
                    <li>Engenharia de Software</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
