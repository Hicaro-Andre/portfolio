import "/src/styles/About.css";
import { Code, FileText } from "lucide-react";

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">
        Sobre Mim
        <span />
      </h2>

      <div className="about-cards">
        <div className="about-card">
          <div className="card-header">
            <div className="icon pink">
              <Code size={20} />
            </div>
            <h3>Desenvolvedora Full-Stack</h3>
          </div>

          <p>
            Desenvolvedora Full-Stack com experiência em PHP/Laravel e SQL
            (MySQL/PostgreSQL). Atuo na criação e integração de APIs RESTful,
            otimização de consultas para relatórios estratégicos e
            desenvolvimento de sistemas web escaláveis e seguros. Também
            construo interfaces responsivas priorizando usabilidade e
            acessibilidade.
          </p>
        </div>

        <div className="about-card">
          <div className="card-header">
            <div className="icon purple">
              <FileText size={20} />
            </div>
            <h3>Experiência em Saúde Pública</h3>
          </div>

          <p>
            Atuação em projetos de tecnologia para saúde pública,
            desenvolvendo sistemas e relatórios estratégicos em tempo real.
            Experiência em interoperabilidade de dados, boas práticas de Clean
            Code, versionamento Git e metodologias ágeis.
          </p>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-card">
          <strong>2+</strong>
          <span>Anos de Experiência</span>
        </div>

        <div className="stat-card highlight">
          <strong>5+</strong>
          <span>Projetos Concluídos</span>
        </div>
      </div>
    </section>
  );
}
