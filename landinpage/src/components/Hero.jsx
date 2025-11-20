import "../styles/Hero.css";
import "/src/index.css";
import myfoto from "../assets/images/hero_image/me.jpg";

export default function Hero({ language }) {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="photo-content-mobile">
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
              <div className="photo-glow"></div>
            </div>
          </div>
        </div>

        <div className="hero__title">
          <h3>{language === "pt" ? "Opa, eu sou" : "Hey, I’m"}</h3>

          <h1 className="anim-gradient">Hicaro André</h1>

          <p className="cargo">
            <span>
              {language === "pt"
                ? "Desenvolvedor Full Stack"
                : "Full Stack Developer"}
            </span>
          </p>

          <p className="description">
            {language === "pt" ? (
              <>
                Desenvolvendo soluções digitais que unem
                <span> inovação, funcionalidade </span>e uma
                <span> jornada fluida </span>
                para o usuário.
              </>
            ) : (
              <>
                Creating digital solutions that combine
                <span> innovation, functionality </span>
                and a<span> smooth journey </span>
                for the user.
              </>
            )}
          </p>

          <div className="hero__buttons">
            <a href="#port" className="btn btn-primary">
              {language === "pt" ? "Ver Projetos" : "View Projects"}
               <i className="fas fa-chevron-right"></i>
            </a>

            <a
              href="/public/cv hicaro-dev.pdf"
              download
              className="btn btn-secondary"
            >
              <i className="fas fa-file-download"></i>
              {language === "pt" ? "Baixar CV" : "Download CV"}
              
            </a>
          </div>
        </div>

        <div className="photo-content-desk">
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
              <div className="photo-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
