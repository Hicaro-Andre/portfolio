
import "../styles/Hero.css";

// Importe as imagens
import linkedinDark from "../assets/images/hero_image/linkedin.svg";
import githubDark from "../assets/images/hero_image/github-dark.svg";
import instagramDark from "../assets/images/hero_image/instagram-dark.svg";
import arrowDownDark from "../assets/images/hero_image/arrow-down-dark.svg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__title">
          <h2 className="fade-in">
            Hey! <span className="wave">👋</span> eu sou
          </h2>
          <h1>Hicaro André</h1>

          {/* Desenvolvedor Full Stack */}
          <div className="role-wrapper">
            <span className="dev-label">Desenvolvedor</span>
            <span className="typing-wrapper">
              <span className="typing">Full Stack</span>
              <span className="cursor">|</span>
            </span>
          </div>
        </div>

        {/* Ícones sociais */}
        <nav className="hero__icons" aria-label="Redes sociais">
          <a
            href="https://www.linkedin.com/in/hicaroandre/"
            className="icon-fade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon-dark"
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
            <img
              className="icon-dark"
              src={githubDark}
              alt="Perfil no GitHub de Hicaro André"
            />
            
          </a>

          <a
            href="https://www.instagram.com/hicaroandre/"
            className="icon-fade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon-dark"
              src={instagramDark}
              alt="Perfil no Instagram de Hicaro André"
            />
          
          </a>
        </nav>

        {/* Botões cv */}
        <div className="cta-wrapper">
          <a href="../assets/cv hicaro-dev.pdf" download className="cta-btn secondary">
            Baixar CV
          </a>
        </div>
        {/* Seta animada */}
        <div className="hero__arrow">
          <a href="#port" aria-label="Ir para seção de portfólio">
            <img
              className="icon-dark arrow-bounce"
              src={arrowDownDark}
              alt="Ir para seção de portfólio"
            />
            
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
