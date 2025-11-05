import "../styles/Hero.css";

// Imagens
import linkedinDark from "../assets/images/hero_image/linkedin.svg";
import githubDark from "../assets/images/hero_image/github-dark.svg";
import instagramDark from "../assets/images/hero_image/instagram-dark.svg";
import myfoto from "../assets/images/about_image/me.jpg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="about-photo-mobile">
          <div className="photo-wrapper">
            <img
              src={myfoto}
              alt="Hicaro André - Desenvolvedor Full Stack"
              className="photo"
            />
            <div className="photo-glow"></div>
          </div>
        </div>

        <div className="hero__title">
          <h3>Opa, eu sou</h3>
          <h1>Hicaro André</h1>

          <p class="cargo">Desenvolvedor Full Stack</p>

          <nav className="hero__icons" aria-label="Redes sociais">
            <a
              href="https://www.linkedin.com/in/hicaroandre/"
              className="icon-fade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinDark}
                alt="Perfil no LinkedIn de Hicaro André"
              />
            </a>

            <a
              href="https://github.com/Hicaro-Andre"
              className="icon-fade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubDark} alt="Perfil no GitHub de Hicaro André" />
            </a>

            <a
              href="https://www.instagram.com/hicaroandre/"
              className="icon-fade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramDark}
                alt="Perfil no Instagram de Hicaro André"
              />
            </a>
          </nav>

          {/* Botões */}
          <div className="hero__buttons">
            <a href="#projetos" className="btn btn-primary">
              Ver Projetos
            </a>
            <a href="#contato" className="btn btn-outline">
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className="about-photo-desk">
          <div class="photo-border">
          <div className="photo-wrapper">
            <img
              src={myfoto}
              alt="Hicaro André - Desenvolvedor Full Stack"
              className="photo"
            />
            <div className="photo-glow"></div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
