import "/src/styles/AboutDetails.css";
import { aboutProjects } from "/src/data/aboutProject.js";
import { projects } from "/src/data/projects.js";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaCogs } from "react-icons/fa";

export default function AboutDetails() {
  const { id } = useParams();
  const about = aboutProjects.find((p) => p.id === Number(id));
  const project = projects.find((p) => p.id === Number(id));

  const [openGallery, setOpenGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!about) return <p>Projeto não encontrado</p>;

  return (
    <section className="about-details">
      <div className="about-grid">
        {/* COLUNA ESQUERDA */}
        <div className="left-column">
          {/* sobre o projeto */}
          <div className="card">
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

          {/* GALERIA FORA DO CARD */}
          <div className="card">
            <div className="gallery-container">
              <h3>Galeria</h3>

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

        {/* COLUNA DIREITA */}
        <div className="right-column">
          <div className="card">
            <h4>Status</h4>
            <div className="status">
              <span
                className={`dot ${about.status === "Concluído" ? "done" : "progress"}`}
              ></span>
              {about.status}
            </div>
          </div>

          <div className="card">
            <h4>Tecnologias</h4>
            <div className="tech-list">
              {project.techs?.map((tech, i) => (
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

          <div className="card ">
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
        <div
          className="gallery-modal"
          onClick={() => setOpenGallery(false)} // 🔥 FECHAR CLICANDO FORA
        >
          {/* BOTÃO FECHAR */}
          <button className="close-btn" onClick={() => setOpenGallery(false)}>
            ✕
          </button>

          <div className="gallery-counter">
            {currentIndex + 1} / {about.images.length}
          </div>

          {/* IMAGEM */}
          <img
            src={about.images[currentIndex]}
            className="gallery-full-image"
            onClick={(e) => e.stopPropagation()} // 🔥 NÃO FECHA AO CLICAR NA IMAGEM
          />

          {/* BOTÃO ESQUERDA */}
          <button
            className="nav left"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) =>
                prev === 0 ? about.images.length - 1 : prev - 1,
              );
            }}
          >
            ‹
          </button>

          {/* BOTÃO DIREITA */}
          <button
            className="nav right"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) =>
                prev === about.images.length - 1 ? 0 : prev + 1,
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
