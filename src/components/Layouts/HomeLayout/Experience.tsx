import "/src/styles/Experience.css";
import translations from "/src/translations";

import {
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";

import { techIcons } from "/src/components/icons/techIcons";


type Language = "pt" | "en";

type ExperienceItem = {
  id: number;
  side: "left" | "right";
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
  responsibilitiesTitle: string;
  responsibilities: string[];
  techTitle: string;
  techs?: string[];
};

type Props = {
  language: Language;
};

export default function Experience({ language }: Props) {
  const t = translations[language].experience as {
    title: string;
    items: ExperienceItem[];
  };

  return (
    <section className="experience-section" id="experience">
      <h2 className="row-title">
        {t.title}
        <span />
      </h2>

      <div className="experience-container">
        <div className="timeline">
          {t.items.map((item: ExperienceItem) => (
            <div key={item.id} className={`timeline-item ${item.side}`}>
              <span className="timeline-dot" />

              <div className="card card-timeline">


                {/* HEADER */}
                <div className="card-timeline-header">
                  <div className="header-top">
                    <h4>{item.role}</h4>
                    <p>{item.company}</p>
                  </div>

                  <div className="header-bottom">
                    <div className="period">
                      <p >{item.date}</p>
                    </div>

                    <div className="badge-group">
                      <span className="local-badge">
                        {item.location}
                      </span>
                    </div>


                  </div>
                </div>

                {/* BODY */}
                <div className="card-timeline-body">
                  <p className="description">{item.description}</p>

                  {/* RESPONSABILIDADES */}
                  <div className="timeline-section">
                    <h5 className="timeline-title">
                      <FaCheckCircle className="timeline-icon" />
                      {item.responsibilitiesTitle}
                    </h5>

                    <ul>
                      {item.responsibilities.map((resp: string, index: number) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>

                    <div className="separator"></div>
                  </div>

                  {/* TECNOLOGIAS */}
                  <div className="timeline-section">
                    <h5 className="timeline-title">
                      <FaTools className="timeline-icon" />
                      {item.techTitle}
                    </h5>

                    <div className="tech-icons">
                      {item.techs?.map((tech: string, index: number) => (
                        <span key={index}>
                          {techIcons[tech as keyof typeof techIcons]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}