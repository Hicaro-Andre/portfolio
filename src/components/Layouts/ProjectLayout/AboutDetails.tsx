import "/src/styles/AboutDetails.css";
import { aboutProjects } from "/src/data/aboutProject";
import { projects } from "/src/data/projects";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaCogs } from "react-icons/fa";
import translations from "/src/translations";
import type { Tech } from "/src/data/projects";

type Language = "pt" | "en";

type Props = {
  language: Language;
};

export default function AboutDetails({ language = "pt" }: Props) {
  const t = translations[language].aboutDetails;  // labels + items traduzidos
  const p = translations[language].projects;       // status traduzido

  const { id } = useParams<{ id: string }>();
  const numId = Number(id);

  // Dado fixo (só imagens)
  const aboutBase = aboutProjects.find((a) => a.id === numId);

  // Tradução do about pelo id
  const aboutTranslation = t.items[numId as keyof typeof t.items] ?? {};

  // Merge: imagens fixas + tudo mais traduzido
  const about = aboutBase
    ? { ...aboutBase, ...aboutTranslation }
    : null;

  // Status vem de projects.items traduzido
  const projectBase = projects.find((proj) => proj.id === numId);
  const projectTranslation = p.items[numId as keyof typeof p.items] as
    | { status?: string }
    | undefined;
  const status = projectTranslation?.status;

  const [openGallery, setOpenGallery] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!about) return null;

  return (
    <section className="about-details">
      <div className="about-grid">

        {/* COLUNA ESQUERDA */}
        <div className="left-column">

          {/* SOBRE */}
          <div className="card card-details">
            <div className="card-header">
              <h3 className="card-title">{t.sectionAbout}</h3>
              <p>{about.description}</p>
            </div>

            <div className="card-body">
              <h4 className="card-subtitle">
                <FaCogs className="card-icon" />
                {t.sectionFeatures}
              </h4>

              <ul className="features">
                {about.features?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* GALERIA */}
          <div className="card card-details">
            <h3>{t.sectionGallery}</h3>

            <div className="gallery-container">
              <div className="gallery-grid">
                {about.images?.slice(0, 6).map((img: string, index: number) => (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => {
                      setOpenGallery(true);
                      setCurrentIndex(index);
                    }}
                  >
                    <img src={img} alt={`${t.sectionGallery} ${index + 1}`} />
                    <span className="gallery-badge">
                      {index + 1}/{about.images.length}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="gallery">
              <button
                className="btn primary"
                onClick={() => {
                  setOpenGallery(true);
                  setCurrentIndex(0);
                }}
              >
                {t.btnGallery}
              </button>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div className="right-column">

          {/* STATUS */}
          <div className="card card-details">
            <h4>{t.sectionStatus}</h4>

            <div className="status">
              <span
                className={`dot ${status?.toLowerCase() === "concluído" ||
                    status?.toLowerCase() === "completed"
                    ? "done"
                    : "progress"
                  }`}
              />
              {status || t.noStatus}
            </div>
          </div>

          {/* TECNOLOGIAS */}
          <div className="card card-details">
            <h4>{t.sectionTechs}</h4>

            <div className="tech-list">
              {projectBase?.techs?.map((tech: Tech, i: number) => (
                <span key={i} className="tech">
                  <span
                    className="tech-dot"
                    style={{ background: tech.color }}
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* INFO */}
          <div className="card card-details">
            <h4>{t.sectionInfo}</h4>

            <div className="info">
              <p>
                <strong>{t.labelDuration}</strong>
                <br />
                {about.duration}
              </p>

              <p>
                <strong>{t.labelTeam}</strong>
                <br />
                {about.team}
              </p>

              <p>
                <strong>{t.labelClient}</strong>
                <br />
                {about.client}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openGallery && (
        <div className="gallery-modal" onClick={() => setOpenGallery(false)}>
          <button className="close-btn" onClick={() => setOpenGallery(false)}>
            ✕
          </button>

          <div className="gallery-modal-content">
            <div className="gallery-counter">
              {currentIndex + 1} / {about.images.length}
            </div>

            <img
              src={about.images[currentIndex]}
              className="gallery-full-image"
              onClick={(e) => e.stopPropagation()}
            />

            <div
              className="gallery-description"
              onClick={(e) => e.stopPropagation()}
            >
              <p>
                {about.imagesDescription?.[currentIndex] || t.defaultImageDesc}
              </p>
            </div>

            <div
              className="gallery-dots"
              onClick={(e) => e.stopPropagation()}
            >
              {about.images.map((_: string, idx: number) => (
                <button
                  key={idx}
                  className={`gallery-dot ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>

          <button
            className="nav left"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) =>
                prev === 0 ? about.images.length - 1 : prev - 1
              );
            }}
          >
            ‹
          </button>

          <button
            className="nav right"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) =>
                prev === about.images.length - 1 ? 0 : prev + 1
              );
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}