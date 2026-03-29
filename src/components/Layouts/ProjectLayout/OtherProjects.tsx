import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import { projects } from "/src/data/projects";
import "/src/styles/OtherProjects.css";

// Tipagem dos dados
type Tech = {
  name: string;
  color: string;
  textColor: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  techs: Tech[];
};

export default function OtherProjects() {
  const { id } = useParams<{ id: string }>();

  const randomProjects = useMemo<Project[]>(() => {
    const filteredProjects = projects.filter(
      (project: Project) => project.id !== Number(id)
    );

    function shuffleArray(array: Project[]): Project[] {
      const shuffled = [...array];

      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      return shuffled;
    }

    return shuffleArray(filteredProjects).slice(0, 3);
  }, [id]);

  return (
    <section className="other-projects">
      <h2 className="row-title other">
        Outros Projetos
        <span />
      </h2>

      <div className="other-projects-grid">
        {randomProjects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="card other-project-card"
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="other-projects-techs">
              {project.techs.map((tech, i) => (
                <span
                  key={i}
                  className="tech-badge"
                  style={{
                    background: tech.color,
                    color: tech.textColor,
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}