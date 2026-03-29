import { useState } from "react";
import translations from "/src/translations";
import "/src/styles/Formation.css";

import certificado from "/src/assets/images_project/profile_project/APIs.png";

import { FaBolt, FaGraduationCap, FaTimes } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";

// 🔥 Tipos
type Language = "pt" | "en";

type FormationItem = {
  id: number;
  side: "left" | "right";
  status: string;
  course: string;
  institution: string;
  date: string;
  location: string;
  cr: string;
  description: string;
  highlightsTitle: string;
  highlights: string[];
  disciplinesTitle: string;
  disciplines: string[];
  certificateTitle: string;
};

type Props = {
  language: Language;
};

export default function Formation({ language }: Props) {
  const t = translations[language].formation as {
    title: string;
    items: FormationItem[];
  };

  // 🔥 number | null (importante!)
  const [openModalId, setOpenModalId] = useState<number | null>(null);

  return (
    <section className="training-section" id="formation">
      <h2 className="row-title">
        {t.title}
        <span />
      </h2>

      <div className="training-container">
        <div className="timeline">
          {t.items.map((item: FormationItem) => (
            <div key={item.id} className={`timeline-item ${item.side}`}>
              <span className="timeline-dot" />

              <div className="card card-timeline">
                <span className="status-badge">{item.status}</span>

                {/* HEADER */}
                <div className="card-timeline-header">
                  <div className="header-top">
                    <h4>{item.course}</h4>
                    <p className="company">{item.institution}</p>
                  </div>

                  <div className="header-bottom">
                    <p>{item.date}</p>

                    <div className="badge-group">
                      <span className="local-badge">{item.location}</span>
                      <span className="cr-badge">{item.cr}</span>
                    </div>
                  </div>
                </div>

                {/* BODY */}
                <div className="card-timeline-body">
                  <p className="description">{item.description}</p>

                  {/* Destaques */}
                  <div className="timeline-section">
                    <h5 className="timeline-title">
                      <FaBolt className="timeline-icon" />
                      {item.highlightsTitle}
                    </h5>

                    <ul>
                      {item.highlights.map((highlight: string, index: number) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Disciplinas */}
                  <div className="timeline-section">
                    <h5 className="timeline-title">
                      <FaGraduationCap className="timeline-icon" />
                      {item.disciplinesTitle}
                    </h5>

                    <div className="discipline-badges">
                      {item.disciplines.map(
                        (discipline: string, index: number) => (
                          <span key={index} className="discipline-badge">
                            {discipline}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="separator"></div>
                </div>

                {/* FOOTER / CERTIFICADO */}
                <div className="card-timeline-footer certificate-container">
                  <div
                    className="certificate-trigger"
                    onClick={() => setOpenModalId(item.id)}
                    title="Clique para ver o certificado"
                  >
                    <GiAchievement className="certificate-icon" />
                  </div>
                </div>

                {/* MODAL */}
                {openModalId === item.id && (
                  <div
                    className="certificate-modal"
                    onClick={() => setOpenModalId(null)}
                  >
                    <div
                      className="certificate-content"
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        e.stopPropagation()
                      }
                    >
                      <FaTimes
                        className="close-modal"
                        onClick={() => setOpenModalId(null)}
                      />

                      <h3 className="certificate-title">
                        {item.certificateTitle}
                      </h3>

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
          ))}
        </div>
      </div>
    </section>
  );
}