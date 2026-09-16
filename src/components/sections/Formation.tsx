import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "@/styles/components/formation.css";
import { useLanguage } from "@/context/LanguageContext";
import { FaBolt, FaGraduationCap } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import type { Language, FormationItem } from "@/types";

type Props = {
  language?: Language;
};

export default function Formation({}: Props) {
  const { t } = useLanguage();
  const formationT = t.formation as {
    title: string;
    items: FormationItem[];
  };

  const [openModalId, setOpenModalId] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenModalId(null);
      setIsClosing(false);
    }, 280);
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

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && openModalId !== null) {
        handleClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModalId]);

  return (
    <motion.section
      className="training-section"
      id="formation"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="row-title">
        {formationT.title}
        <span />
      </h2>

      <div className="training-container">
        <div className="timeline">
          {formationT.items.map((item: FormationItem, idx: number) => (
            <motion.div
              key={item.id}
              className={`timeline-item ${item.side}`}
              initial={{
                opacity: 0,
                x: item.side === "left" ? -35 : 35,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
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

                  <div className="separator" />
                </div>

                {/* FOOTER */}
                <div className="certificate-container">
                  <button
                    className="certificate-trigger"
                    onClick={() =>
                      openModalId === item.id
                        ? handleClose()
                        : setOpenModalId(item.id)
                    }
                    title="Clique para ver o certificado"
                    aria-label="Ver certificado"
                    type="button"
                  >
                    <GiAchievement className="certificate-icon" />
                  </button>
                </div>

                {/* MODAL */}
                {(openModalId === item.id || isClosing) && (
                  <div
                    className={`certificate-modal ${
                      openModalId === item.id && !isClosing ? "open" : ""
                    } ${isClosing ? "closing" : ""}`}
                  >
                    <div
                      ref={modalRef}
                      className={`certificate-content ${
                        openModalId === item.id && !isClosing ? "open" : ""
                      } ${isClosing ? "closing" : ""}`}
                    >
                      <img
                        src={item.certificateImage}
                        alt={`Certificado ${item.course}`}
                        className="certificate-image"
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
