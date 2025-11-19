import React, { useState } from "react";

import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Portifolio from "./components/Portifolio.jsx";
import About from "./components/About.jsx";
import CareerJourney from "./components/CareerJourney.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";
import ParticlesBg from "./components/ParticlesBg.jsx";

// Imagem WhatsApp
import wpp from "./assets/whatsapp.svg";

function App() {
  const [language, setLanguage] = useState("pt");

  return (
    <>
      <ParticlesBg />

      <main>
      
        <Navbar language={language} setLanguage={setLanguage} />
        <Hero language={language} />
        <About language={language} />
        <Portifolio language={language} />
        <CareerJourney language={language} />
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
