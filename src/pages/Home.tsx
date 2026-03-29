import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ParticlesBg from "../components/ParticlesBg";

import Hero from "../components/Layouts/HomeLayout/Hero";
import About from "../components/Layouts/HomeLayout/About";
import ContactForm from "../components/Layouts/HomeLayout/ContactForm";
import Skills from "../components/Layouts/HomeLayout/Skills";
import Experience from "../components/Layouts/HomeLayout/Experience";
import Projects from "../components/Layouts/HomeLayout/Projects";
import Formation from "../components/Layouts/HomeLayout/Formation";

// Imagem WhatsApp
import wpp from "../assets/whatsapp.svg";

type Language = "pt" | "en";

type LocationState = {
  scrollTo?: string;
};

type HomeProps = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

function Home({ language, setLanguage }: HomeProps) {
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
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <ParticlesBg />

      <main>
        <Navbar language={language} setLanguage={setLanguage} />
        <Hero language={language} />
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Experience language={language} />
        <Formation language={language} />
        <ContactForm language={language} />
        <Footer language={language} />
      </main>

      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/98984245018"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="icon-dark" src={wpp} alt="Fale comigo no WhatsApp" />
      </a>
    </>
  );
}

export default Home;