import "/src/styles/AboutDetails.css";
import { aboutProjects } from "/src/data/aboutProject";
import { projects } from "/src/data/projects";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaCogs } from "react-icons/fa";

// Tipagens
type Tech = {
  name: string;
  color: string;
  textColor?: string;
};

type Project = {
  id: number;
  status: string; // ✅ agora vem direto do mock
  techs: Tech[];
};

type AboutProject = {
  id: number;
  description: string;
  features?: string[];
  images: string[];
  imagesDescription?: string[];
  status: string;
  duration: string;
  team: string;
  client: string;
};

type Language = "pt" | "en";

type Props = {
  language: Language;
};

export default function AboutDetails({ language = "pt" }: Props) {
  const { id } = useParams<{ id: string }>();

  const about: AboutProject | undefined = aboutProjects.find(
    (p) => p.id === Number(id)
  );

  const project: Project | undefined = projects.find(
    (p) => p.id === Number(id)
  );

  // ✅ status direto do mock
  const status = project?.status;

  const [openGallery, setOpenGallery] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!about) return <p>Projeto não encontrado</p>;

  return (
    <section className="about-details">
      <div className="about-grid">

        {/* COLUNA ESQUERDA */}
        <div className="left-column">

          {/* SOBRE */}
          <div className="card card-details">
            <div className="card-header">
              <h3 className="card-title">Sobre o Projeto</h3>
              <p>{about.description}</p>
            </div>

            <div className="card-body">
              <h4 className="card-subtitle">
                <FaCogs className="card-icon" />
                Principais Funcionalidades
              </h4>

              <ul className="features">
                {about.features?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* GALERIA */}
          <div className="card card-details">
            <h3>Galeria</h3>

            <div className="gallery-container">
              <div className="gallery-grid">
                {about.images?.slice(0, 6).map((img, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => {
                      setOpenGallery(true);
                      setCurrentIndex(index);
                    }}
                  >
                    <img src={img} alt={`Imagem ${index}`} />
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
                Ver todas as fotos
              </button>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div className="right-column">

          {/* STATUS */}
          <div className="card card-details">
            <h4>Status</h4>

            <div className="status">
              <span
                className={`dot ${status === "Concluído" ? "done" : "progress"
                  }`}
              ></span>

              {status || "Sem status"}
            </div>
          </div>

          {/* TECNOLOGIAS */}
          <div className="card card-details">
            <h4>Tecnologias</h4>

            <div className="tech-list">
              {project?.techs?.map((tech, i) => (
                <span key={i} className="tech">
                  <span
                    className="tech-dot"
                    style={{ background: tech.color }}
                  ></span>

                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* INFO */}
          <div className="card card-details">
            <h4>Informações</h4>

            <div className="info">
              <p>
                <strong>Duração</strong>
                <br />
                {about.duration}
              </p>

              <p>
                <strong>Equipe</strong>
                <br />
                {about.team}
              </p>

              <p>
                <strong>Cliente</strong>
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
                {about.imagesDescription?.[currentIndex] ||
                  "Imagem do projeto"}
              </p>
            </div>

            <div
              className="gallery-dots"
              onClick={(e) => e.stopPropagation()}
            >
              {about.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`gallery-dot ${idx === currentIndex ? "active" : ""
                    }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>

          {/* ESQUERDA */}
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

          {/* DIREITA */}
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