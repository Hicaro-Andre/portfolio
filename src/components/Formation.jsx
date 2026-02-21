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
          {/* ITEM 1 */}
          <div className="timeline-item left">
            <span className="timeline-dot" />
            {/* <div className="card-timeline">
              <h4>Bacharel em Ciências da Computação</h4>
              <p className="company">Faculdade Pitágoras - FAMA</p>
              <span className="date">Concluído em 28 jun 2019</span>

              <p className="description">
                Formação focada em fundamentos de computação, engenharia de
                software, estruturas de dados, banco de dados e desenvolvimento
                de sistemas.
              </p>

              <ul>
                <li>Algoritmos</li>
                <li>Estruturas de Dados</li>
                <li>Banco de Dados</li>
                <li>Engenharia de Software</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
