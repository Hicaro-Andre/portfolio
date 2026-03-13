import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ParticlesBg from "../components/ParticlesBg.jsx";

// Imagem WhatsApp
import wpp from "../assets/whatsapp.svg";

export default function ProjectDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

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
            <div>
              <h1>Detalhes do Projeto</h1>
              <p>Projeto: {id}</p>
            </div>
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