import { useState } from "react";
import "/src/styles/Formation.css";
import certificado from "/src/assets/images/portifolio_image/APIs.png";

import { FaBolt, FaGraduationCap, FaTimes } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";

export default function Formation() {
  const [openModalId, setOpenModalId] = useState(null);

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

          {/* CARD 2 */}
          <div className="timeline-item left">
            <span className="timeline-dot" />

            <div className="card-timeline">

              <span className="status-badge">Concluído</span>

              <div className="card-timeline-header">
                <div className="header-top">
                  <h4>Bacharelado em Ciências da Computação</h4>
                  <p className="company">Faculdade Pitágoras - FAMA</p>
                </div>

                <div className="header-bottom">
                  <p>2019 - Presencial</p>

                  <div className="badge-group">
                    <span className="local-badge">São Luís - MA</span>
                    <span className="cr-badge">CR: 8.6/10.0</span>
                  </div>
                </div>
              </div>

              <div className="card-timeline-body">
                <p className="description">
                  Formação focada em fundamentos de computação, engenharia de
                  software, estruturas de dados, banco de dados e
                  desenvolvimento de sistemas.
                </p>

                <div className="timeline-section">
                  <h5 className="timeline-title">
                    <FaBolt className="timeline-icon" />
                    Destaques
                  </h5>

                  <ul>
                    <li>Desenvolvimento de projetos acadêmicos completos</li>
                    <li>Aplicação prática de modelagem de banco de dados</li>
                    <li>Implementação de algoritmos eficientes</li>
                  </ul>
                </div>

                <div className="timeline-section">
                  <h5 className="timeline-title">
                    <FaGraduationCap className="timeline-icon" />
                    Principais Disciplinas
                  </h5>

                  <div className="discipline-badges">
                    <span className="discipline-badge">Algoritmos</span>
                    <span className="discipline-badge">Estruturas de Dados</span>
                    <span className="discipline-badge">Banco de Dados</span>
                    <span className="discipline-badge">Engenharia de Software</span>
                  </div>
                </div>

                <div className="separator"></div>
              </div>

              <div className="card-timeline-footer certificate-container">
                <div
                  className="certificate-trigger"
                  onClick={() => setOpenModalId(2)}
                  title="Clique para ver o certificado"
                >
                  <GiAchievement className="certificate-icon" />
                </div>
              </div>

              {openModalId === 2 && (
                <div
                  className="certificate-modal"
                  onClick={() => setOpenModalId(null)}
                >
                  <div
                    className="certificate-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaTimes
                      className="close-modal"
                      onClick={() => setOpenModalId(null)}
                    />

                    <h3 className="certificate-title">Certificado Acadêmico</h3>

                    <img
                      src={certificado}
                      alt="Certificado"
                      className="certificate-image"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>


          {/* CARD 1 */}
          <div className="timeline-item right">
            <span className="timeline-dot" />

            <div className="card-timeline">

              <span className="status-badge">Concluído</span>

              <div className="card-timeline-header">
                <div className="header-top">
                  <h4>Bacharelado em Ciências da Computação</h4>
                  <p className="company">Faculdade Pitágoras - FAMA</p>
                </div>

                <div className="header-bottom">
                  <p>2019 - Presencial</p>

                  <div className="badge-group">
                    <span className="local-badge">São Luís - MA</span>
                    <span className="cr-badge">CR: 8.6/10.0</span>
                  </div>
                </div>
              </div>

              <div className="card-timeline-body">
                <p className="description">
                  Formação focada em fundamentos de computação, engenharia de
                  software, estruturas de dados, banco de dados e
                  desenvolvimento de sistemas.
                </p>

               {/* Destaques */}
                <div className="timeline-section">
                  <h5 className="timeline-title">
                    <FaBolt className="timeline-icon" />
                    Destaques
                  </h5>

                  <ul>
                    <li>Desenvolvimento de projetos acadêmicos completos</li>
                    <li>Aplicação prática de modelagem de banco de dados</li>
                    <li>Implementação de algoritmos eficientes</li>
                  </ul>
                </div>

               {/* Principais Disciplinas */}
                <div className="timeline-section">
                  <h5 className="timeline-title">
                    <FaGraduationCap className="timeline-icon" />
                    Principais Disciplinas
                  </h5>

                  <div className="discipline-badges">
                    <span className="discipline-badge">Algoritmos</span>
                    <span className="discipline-badge">Estruturas de Dados</span>
                    <span className="discipline-badge">Banco de Dados</span>
                    <span className="discipline-badge">Engenharia de Software</span>
                  </div>
                </div>

                <div className="separator"></div>
              </div>

              {/* certificado */}
              <div className="card-timeline-footer certificate-container">
                <div
                  className="certificate-trigger"
                  onClick={() => setOpenModalId(1)}
                  title="Clique para ver o certificado"
                >
                  <GiAchievement className="certificate-icon" />
                </div>
              </div>

              {openModalId === 1 && (
                <div
                  className="certificate-modal"
                  onClick={() => setOpenModalId(null)}
                >
                  <div
                    className="certificate-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaTimes
                      className="close-modal"
                      onClick={() => setOpenModalId(null)}
                    />

                    <h3 className="certificate-title">Certificado Acadêmico</h3>

                    <img
                      src={certificado}
                      alt="Certificado"
                      className="certificate-image"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}