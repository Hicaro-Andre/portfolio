import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCogs } from "react-icons/fa";
import "@/styles/components/about-details.css";
import { aboutProjects } from "@/data/aboutProject";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import type { Tech, Language } from "@/types";

type Props = {
  language?: Language;
};

export default function AboutDetails({}: Props) {
  const { t } = useLanguage();
  const aboutDetailsT = t.aboutDetails;
  const projectsT = t.projects;

  const { id } = useParams<{ id: string }>();
  const numId = Number(id);

  const aboutBase = aboutProjects.find((a) => a.id === numId);
  const aboutTranslation = aboutDetailsT.items[numId as keyof typeof aboutDetailsT.items] ?? {};
  const about = aboutBase ? { ...aboutBase, ...aboutTranslation } : null;

  const projectBase = projects.find((proj) => proj.id === numId);
  const projectTranslation = projectsT.items[numId as keyof typeof projectsT.items] as
    | { status?: string }
    | undefined;
  const status = projectTranslation?.status;

  const [openGallery, setOpenGallery] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!openGallery) return;
      if (e.key === "Escape") setOpenGallery(false);
      if (e.key === "ArrowLeft" && about?.images) {
        setCurrentIndex((prev) => (prev === 0 ? about.images.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight" && about?.images) {
        setCurrentIndex((prev) => (prev === about.images.length - 1 ? 0 : prev + 1));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openGallery, about]);

  if (!about) return null;

  const isDone =
    status?.toLowerCase() === "concluído" ||
    status?.toLowerCase() === "completed";

  return (
    <section className="about-details">
      <div className="about-grid">
        {/* COLUNA ESQUERDA */}
        <div className="left-column">
          {/* SOBRE */}
          <div className="card card-details">
            <div className="card-header">
              <h3 className="card-title">{aboutDetailsT.sectionAbout}</h3>
              <p>{about.description}</p>
            </div>

            <div className="card-body">
              <h4 className="card-subtitle">
                <FaCogs className="card-icon" />
                {aboutDetailsT.sectionFeatures}
              </h4>

              <ul className="features">
                {about.features?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* GALERIA */}
          {about.images && about.images.length > 0 && (
            <div className="card card-details">
              <h4>{aboutDetailsT.sectionGallery}</h4>

              <div className="gallery-container">
                <div className="gallery-grid">
                  {about.images.slice(0, 6).map((img: string, index: number) => (
                    <div
                      key={index}
                      className="gallery-item"
                      onClick={() => {
                        setOpenGallery(true);
                        setCurrentIndex(index);
                      }}
                    >
                      <img
                        src={img}
                        alt={`${aboutDetailsT.sectionGallery} ${index + 1}`}
                        loading="lazy"
                      />
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
                  type="button"
                >
                  {aboutDetailsT.btnGallery}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* COLUNA DIREITA */}
        <div className="right-column">
          {/* STATUS */}
          <div className="card card-details">
            <h4>{aboutDetailsT.sectionStatus}</h4>

            <div className="status">
              <span className={`dot ${isDone ? "done" : "progress"}`} />
              {status || aboutDetailsT.noStatus}
            </div>
          </div>

          {/* TECNOLOGIAS */}
          <div className="card card-details">
            <h4>{aboutDetailsT.sectionTechs}</h4>

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
            <h4>{aboutDetailsT.sectionInfo}</h4>

            <div className="info">
              <p>
                <strong>{aboutDetailsT.labelDuration}</strong>
                <br />
                {about.duration}
              </p>

              <p>
                <strong>{aboutDetailsT.labelTeam}</strong>
                <br />
                {about.team}
              </p>

              <p>
                <strong>{aboutDetailsT.labelClient}</strong>
                <br />
                {about.client}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL GALERIA */}
      {openGallery && about.images && (
        <div className="gallery-modal" onClick={() => setOpenGallery(false)}>
          <button
            className="close-btn"
            onClick={() => setOpenGallery(false)}
            aria-label="Fechar galeria"
            type="button"
          >
            ✕
          </button>

          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-counter">
              {currentIndex + 1} / {about.images.length}
            </div>

            <img
              src={about.images[currentIndex]}
              className="gallery-full-image"
              alt="Projeto em tela cheia"
            />

            <div className="gallery-description">
              <p>
                {about.imagesDescription?.[currentIndex] ||
                  aboutDetailsT.defaultImageDesc}
              </p>
            </div>

            <div className="gallery-dots">
              {about.images.map((_: string, idx: number) => (
                <button
                  key={idx}
                  className={`gallery-dot ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  type="button"
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
            aria-label="Foto anterior"
            type="button"
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
            aria-label="Próxima foto"
            type="button"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
