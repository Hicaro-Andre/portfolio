import React, { useState } from "react";

import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";
import ParticlesBg from "./components/ParticlesBg.jsx";

// Imagem WhatsApp
import wpp from "./assets/whatsapp.svg";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";

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
        {/* <Projects /> */}
        <Experience />
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
