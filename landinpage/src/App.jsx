import Hero from "./components/Hero.jsx";
import Portifolio from "./components/Portifolio.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import MyJourney from "./components/MyJourney.jsx";

function App() {
  
  return (
    <>
      <main>
        <Hero />
        <Portifolio />
        <Skills />
        <MyJourney />
        <About />
        <Footer />
      </main>

      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/98984245018"
        className="whatsapp-button"
        target="_blank"
      >
        <img
          className="icon-dark"
          src="src/assets/images/whatsapp-dark.svg"
          alt="Fale comigo no WhatsApp"
        />
      </a>
    </>
  );
}

export default App;
