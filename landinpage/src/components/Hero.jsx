import "/src/styles/Hero.css";
import myfoto from "../assets/images/hero_image/me.jpg";

export default function Hero({ language }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* FOTO – MOBILE */}
        <div className="hero-photo mobile">
          <Photo language={language} />
        </div>

        {/* TEXTO */}
        <div className="hero-content">
          <h3 className="hero-eyebrow">
            {language === "pt" ? "Olá, eu sou" : "Hey, I’m"}
          </h3>

          <h1 className="hero-name">Hicaro André</h1>

          <p className="hero-role">
            {language === "pt"
              ? "Desenvolvedor Full Stack"
              : "Full Stack Developer"}
          </p>

          <p className="hero-description">
            {language === "pt" ? (
              <>
                Desenvolvendo soluções digitais que unem
                <span> inovação</span>,<span> funcionalidade</span> e uma
                <span> experiência fluida</span> para o usuário.
              </>
            ) : (
              <>
                Creating digital solutions that combine
                <span> innovation</span>,<span> functionality</span> and a
                <span> smooth user experience</span>.
              </>
            )}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              {language === "pt" ? "Ver Projetos" : "View Projects"}
            </a>

            <a
              href="/cv-hicaro-dev.pdf"
              download
              className="btn secondary"
            >
              {language === "pt" ? "Baixar CV" : "Download CV"}
            </a>
          </div>
        </div>

        {/* FOTO – DESKTOP */}
        <div className="hero-photo desktop">
          <Photo language={language} />
        </div>
      </div>
    </section>
  );
}

function Photo({ language }) {
  return (
    <div className="photo-border">
      <div className="photo-wrapper">
        <img
          src={myfoto}
          alt={
            language === "pt"
              ? "Hicaro André - Desenvolvedor Full Stack"
              : "Hicaro André - Full Stack Developer"
          }
          className="photo"
        />
      </div>
    </div>
  );
}
