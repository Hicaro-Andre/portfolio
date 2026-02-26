import "/src/styles/Experience.css";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <header className="row-title">
          <h2>Experiência
            <span />
          </h2>
         
        </header>

        <div className="timeline">

          {/* card 1  */}
          <div className="timeline-item left">
            <span className="timeline-dot" />
            <div className="card-timeline">

               {/* header */}
              <div className="card-timeline-header">
                <h4 className="title">Desenvolvedor Full Stack</h4>
                <p className="company">TecTeca</p>

                <div className="period">
                  <p className="date">Concluído em 28 jun 2019</p>

                  <div className="badge-group">
                    <span className="local-badge">São Luís</span>
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

                {/* Atividades e Responsabilidades */}
                <div className="timeline-section">
                  <h5>Atividades e Responsabilidades</h5>
                  <ul>
                    <li>Desenvolvimento de projetos acadêmicos completos</li>
                    <li>Aplicação prática de modelagem de banco de dados</li>
                    <li>Implementação de algoritmos eficientes</li>
                  </ul>
                </div>

                {/* Principais Disciplinas */}
                <div className="timeline-section">
                  <h5>Tecnologias Usadas</h5>
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

           {/* card 2  */}
          <div className="timeline-item right">
            <span className="timeline-dot" />
            <div className="card-timeline">

               {/* header */}
              <div className="card-timeline-header">
                <h4 className="title"> Co-Fundador e Web Designer</h4>
                <p className="company">Upaon Solutions</p>

                <div className="period">
                  <p className="date">Concluído em 28 jun 2019</p>

                  <div className="badge-group">
                    <span className="local-badge">São Luís</span>
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

                {/* Atividades e Responsabilidades */}
                <div className="timeline-section">
                  <h5>Atividades e Responsabilidades</h5>
                  <ul>
                    <li>Desenvolvimento de projetos acadêmicos completos</li>
                    <li>Aplicação prática de modelagem de banco de dados</li>
                    <li>Implementação de algoritmos eficientes</li>
                  </ul>
                </div>

                {/* Principais Disciplinas */}
                <div className="timeline-section">
                  <h5>Tecnologias Usadas</h5>
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
