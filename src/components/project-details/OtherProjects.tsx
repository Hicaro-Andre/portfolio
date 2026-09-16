import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import { projects } from "@/data/projects";
import type { Project, Tech, Language } from "@/types";
import "@/styles/components/other-projects.css";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  language?: Language;
};

export default function OtherProjects({}: Props) {
  const { t } = useLanguage();
  const otherProjectsT = t.otherprojects;
  const projectsT = t.projects;

  const { id } = useParams<{ id: string }>();

  const randomProjects = useMemo<Project[]>(() => {
    const filteredProjects = projects.filter(
      (project) => project.id !== Number(id)
    );

    function shuffleArray(array: Project[]) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    return shuffleArray(filteredProjects).slice(0, 3);
  }, [id]);

  const translatedProjects = randomProjects.map((project) => ({
    ...project,
    ...projectsT.items[project.id as keyof typeof projectsT.items],
  }));

  return (
    <section className="other-projects">
      <h2 className="row-title other">
        {otherProjectsT.sectionTitle}
        <span />
      </h2>

      <div className="other-projects-grid">
        {translatedProjects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="card other-project-card"
          >
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="other-projects-techs">
              {project.techs.map((tech: Tech, i: number) => (
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
