import "/src/styles/Experience.css";
import translations from "/src/translations";
import {

  FaCheckCircle,
  FaTools,

} from "react-icons/fa";

import { techIcons } from "/src/utils/Experience/icons"; 

export default function Experience({ language }) {

  const t = translations[language].experience;

  return (
    <section className="experience-section" id="experience">
      <h2 className="row-title">
        {t.title}
        <span />
      </h2>

      <div className="experience-container">
        <div className="timeline">
          {t.items.map((item) => (
            <div key={item.id} className={`timeline-item ${item.side}`}>
              <span className="timeline-dot" />

              <div className="card-timeline">
                {/* HEADER */}
                <div className="card-timeline-header">
                  <div className="header-top">
                    <h4 className="title">{item.role}</h4>
                    <p className="company">{item.company}</p>
                  </div>

                  <div className="header-bottom">
                    <p>{item.date}</p>

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
                      {item.responsibilities.map((resp, index) => (
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
                      {item.techs?.map((tech, index) => (
                        <span key={index}>
                          {techIcons[tech]} 
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