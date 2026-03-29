import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ParticlesBg from "../components/ParticlesBg";

import ProjectNavbar from "../components/Layouts/ProjectLayout/ProjectNavbar";
import HeroDetails from "../components/Layouts/ProjectLayout/HeroDetails";
import AboutDetails from "../components/Layouts/ProjectLayout/AboutDetails";
import OtherProjects from "../components/Layouts/ProjectLayout/OtherProjects";

import wpp from "../assets/whatsapp.svg";

type Language = "pt" | "en";

type ProjectDetailsProps = {
  language: Language;
};

export default function ProjectDetails({ language }: ProjectDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <>
      <ParticlesBg />

      {loading ? (
        <Loader />
      ) : (
        <>
          <main>
            <ProjectNavbar language={language} />
            <HeroDetails />
            <AboutDetails />
            <OtherProjects />
          </main>

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