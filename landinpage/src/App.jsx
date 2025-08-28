import Hero from "./components/Hero.jsx";
import Portifolio from "./components/Portifolio.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import MyJourney from "./components/MyJourney.jsx";
{/* Imagem WhatsApp */}
import wpp from "./assets/whatsapp-dark.svg"
import ContactForm from "./components/ContactForm.jsx";


function App() {
  
  return (
    <>
      <main>
        <Hero />
        <Portifolio />
        <About />
        {/* <MyJourney /> */}
        <ContactForm /> 
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
          src={wpp}
          alt="Fale comigo no WhatsApp"
        />
      </a>
    </>
  );
}

export default App;
