import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ParticlesBg from "@/components/ui/ParticlesBg";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Formation from "@/components/sections/Formation";
import Contact from "@/components/sections/Contact";

import wpp from "@/assets/whatsapp.svg";
import wppLight from "@/assets/whatsapp-light.svg";
import type { Language } from "@/types";

type LocationState = {
  scrollTo?: string;
};

type HomeProps = {
  language?: Language;
  setLanguage?: React.Dispatch<React.SetStateAction<Language>>;
};

export default function Home({}: HomeProps) {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as LocationState | null;

    if (state?.scrollTo === "projects") {
      const projectsSection = document.getElementById("projects");

      if (projectsSection) {
        setTimeout(() => {
          const elementPosition = projectsSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 20;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 120);
      }
    }
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ParticlesBg />

      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Formation />
        <Contact />
        <Footer />
      </main>

      {/* Botão WhatsApp */}
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
  );
}