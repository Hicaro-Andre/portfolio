import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ParticlesBg from "../components/ParticlesBg.jsx";

import ProjectNavbar from "../components/Layouts/ProjectLayout/ProjectNavbar.jsx";
import HeroDetails from "../components/Layouts/ProjectLayout/HeroDetails.jsx";
import AboutDetails from "../components/Layouts/ProjectLayout/AboutDetails.jsx";
import OtherProjects from "../components/Layouts/ProjectLayout/OtherProjects.jsx";

// Imagem WhatsApp
import wpp from "../assets/whatsapp.svg";

export default function ProjectDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <>
      {/* Fundo de partículas sempre ativo */}
      <ParticlesBg />

      {/* Enquanto carrega mostra o spinner */}
      {loading ? (
        <Loader /> // Spinner de carregamento
      ) : (
        <>
          <main>
            <ProjectNavbar language={language} setLanguage={setLanguage} />
            <HeroDetails />
            <AboutDetails />
            <OtherProjects />
          </main>

          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/98984245018"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon-dark"
              src={wpp}
              alt="Fale comigo no WhatsApp"
            />
          </a>
        </>
      )}
    </>
  );
}
