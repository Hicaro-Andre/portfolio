import React from "react";
import Hero from "./components/Hero.jsx";
import Portifolio from "./components/Portifolio.jsx";
import About from "./components/About.jsx";
import CareerJourney from "./components/CareerJourney.jsx";
import Footer from "./components/Footer.jsx";
// Imagem WhatsApp
import wpp from "./assets/whatsapp.svg";
import ContactForm from "./components/ContactForm.jsx";
import ParticlesBg from "./components/ParticlesBg.jsx";

function App() {
  return (
    <>
      <ParticlesBg />

      <main>
        <Hero />
        <Portifolio />
        <About />
        <CareerJourney />
        <ContactForm />
        <Footer />
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
