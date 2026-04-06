import { useState, useEffect, useRef } from "react";
import translations from "/src/translations";
import "/src/styles/Formation.css";

import { FaBolt, FaGraduationCap } from "react-icons/fa";
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
  certificateImage: string;
};

type Props = {
  language: Language;
};

export default function Formation({ language }: Props) {
  const t = translations[language].formation as {
    title: string;
    items: FormationItem[];
  };

  const [openModalId, setOpenModalId] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // 🔥 REF do modal
  const modalRef = useRef<HTMLDivElement | null>(null);

  // 🔥 Fechar com animação
  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setOpenModalId(null);
      setIsClosing(false);
    }, 300);
  };


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        openModalId !== null &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModalId]);

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
                    <div className="period">
                      <p>{item.date}</p>
                    </div>
                    <div className="badge-group">
                      <span className="local-badge">{item.location}</span>
                      <span className="cr-badge">{item.cr}</span>
                    </div>
                  </div>
                </div>

                {/* BODY */}
                <div className="card-timeline-body">
                  <p className="description">{item.description}</p>

                  <div className="timeline-section">
                    <h5 className="timeline-title">
                      <FaBolt className="timeline-icon" />
                      {item.highlightsTitle}
                    </h5>

                    <ul>
                      {item.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="timeline-section">
                    <h5 className="timeline-title">
                      <FaGraduationCap className="timeline-icon" />
                      {item.disciplinesTitle}
                    </h5>

                    <div className="discipline-badges">
                      {item.disciplines.map((discipline, index) => (
                        <span key={index} className="discipline-badge">
                          {discipline}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="separator"></div>
                </div>

                {/* FOOTER */}
                <div className="certificate-container">
                  <div
                    className="certificate-trigger"
                    onClick={() =>
                      openModalId === item.id
                        ? handleClose()
                        : setOpenModalId(item.id)
                    }
                    title="Clique para ver o certificado"
                  >
                    <GiAchievement className="certificate-icon" />
                  </div>
                </div>

                {/* MODAL */}
                {(openModalId === item.id || isClosing) && (
                  <div
                    className={`certificate-modal ${openModalId === item.id && !isClosing ? "open" : ""
                      } ${isClosing ? "closing" : ""}`}
                  >
                    <div
                      ref={modalRef} // 🔥 AQUI É O SEGREDO
                      className={`certificate-content ${openModalId === item.id && !isClosing ? "open" : ""
                        } ${isClosing ? "closing" : ""}`}
                    >
                      <img
                        src={item.certificateImage}
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