import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Loader from "@/components/ui/Loader";
import ParticlesBg from "@/components/ui/ParticlesBg";

import ProjectNavbar from "@/components/common/ProjectNavbar";
import HeroDetails from "@/components/project-details/HeroDetails";
import AboutDetails from "@/components/project-details/AboutDetails";
import OtherProjects from "@/components/project-details/OtherProjects";

import wpp from "@/assets/whatsapp.svg";
import wppLight from "@/assets/whatsapp-light.svg";
import type { Language } from "@/types";

type ProjectDetailsProps = {
  language?: Language;
  setLanguage?: React.Dispatch<React.SetStateAction<Language>>;
};

export default function ProjectDetails({}: ProjectDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <>
      <ParticlesBg />

      {loading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <main>
            <ProjectNavbar />
            <HeroDetails />
            <AboutDetails />
            <OtherProjects />
          </main>

          <a
            href="https://wa.me/5598984245018"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale comigo no WhatsApp"
            title="WhatsApp"
          >
            <img src={wpp} alt="WhatsApp" width="42" height="42" className="whatsapp-icon-dark" />
            <img src={wppLight} alt="WhatsApp" width="42" height="42" className="whatsapp-icon-light" />
          </a>
        </motion.div>
      )}
    </>
  );
}
