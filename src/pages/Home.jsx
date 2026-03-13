import React, { useState } from "react";

import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import ParticlesBg from "../components/ParticlesBg.jsx";

import Hero from "../components/Layouts/HomeLayout/Hero.jsx";
import About from "../components/Layouts/HomeLayout/About.jsx";
import ContactForm from "../components/Layouts/HomeLayout/ContactForm.jsx";
import Skills from "../components/Layouts/HomeLayout/Skills.jsx";
import Experience from "../components/Layouts/HomeLayout/Experience.jsx";
import Projects from "../components/Layouts/HomeLayout/Projects.jsx";
import Formation from "../components/Layouts/HomeLayout/Formation.jsx";

// Imagem WhatsApp
import wpp from "../assets/whatsapp.svg";



function App() {
  const [language, setLanguage] = useState("pt");

  return (
    <>
      <ParticlesBg />

      <main>
      
        <Navbar language={language} setLanguage={setLanguage} />
        <Hero language={language} />
        <About language={language} />
        <Skills />
        <Projects />
        <Experience />
        <Formation />
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

export default App;
