import "/src/styles/AboutDetails.css";
import { aboutProjects } from "/src/data/aboutProject.js";
import { useParams } from "react-router-dom";

export default function AboutDetails() {
  const { id } = useParams();

  const about = aboutProjects.find((p) => p.id === Number(id));

  return (
    <section className="about-details">
      <div className="about-grid">
        {/* COLUNA ESQUERDA */}
        <div className="left-column">
          {/* SOBRE O PROJETO */}
          <div className="card">
            <h3 className="card-title">Sobre o Projeto</h3>

            <p>
              O Monitora Saúde é uma plataforma web desenvolvida para a
              Secretaria de Estado da Saúde do Maranhão, com o objetivo de
              modernizar e centralizar o monitoramento de indicadores de saúde
              pública.
            </p>

            <h4>Principais Funcionalidades</h4>

            <ul className="features">
              <li>Dashboards interativos com indicadores em tempo real</li>
              <li>Gestão de usuários com diferentes níveis de acesso</li>
              <li>Interface responsiva para dispositivos móveis</li>
            </ul>
          </div>

          {/* PROCESSO */}
          <div className="card">
            <h3 className="card-title">Processo de Desenvolvimento</h3>

            <div className="timeline">
              <div className="timeline-item">
                <span className="step">1</span>
                <div>
                  <strong>Análise de Requisitos</strong>
                  <p>Levantamento das necessidades do sistema.</p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="step">2</span>
                <div>
                  <strong>Arquitetura do Sistema</strong>
                  <p>Estrutura MVC utilizando Laravel.</p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="step">3</span>
                <div>
                  <strong>Desenvolvimento Backend</strong>
                  <p>Criação de APIs e integração com PostgreSQL.</p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="step">4</span>
                <div>
                  <strong>Interface do Usuário</strong>
                  <p>Dashboards e visualização de dados.</p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="step">5</span>
                <div>
                  <strong>Testes e Deploy</strong>
                  <p>Testes finais e implantação em produção.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div className="right-column">
          {/* STATUS */}
          <div className="card small">
            <h4>Status</h4>
            <div className="status">
              <span className="dot"></span>
              {about.status}
            </div>
          </div>

          {/* TECNOLOGIAS */}
          <div className="card small">
            <h4>Tecnologias</h4>

            <div className="tech-list">
              <span className="tech laravel">Laravel</span>
              <span className="tech postgres">PostgreSQL</span>
            </div>
          </div>

          {/* INFO */}
          <div className="card small">
            <h4>Informações</h4>

            <div className="info">
              <p>
                <strong>Duração</strong>
                <br />4 meses
              </p>
              <p>
                <strong>Equipe</strong>
                <br />4 desenvolvedores
              </p>
              <p>
                <strong>Cliente</strong>
                <br />
                Secretaria de Saúde
              </p>
            </div>
          </div>

          {/* IMPACTO */}
          <div className="card small impact">
            <h4>Impacto</h4>

            <div className="impact-grid">
              <div>
                <strong>50+</strong>
                <p>Indicadores</p>
              </div>

              <div>
                <strong>200+</strong>
                <p>Usuários</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
