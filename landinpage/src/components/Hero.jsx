import React from 'react';
import '../styles/Hero.css'; 

// Importe as imagens
import linkedinDark from '../assets/images/hero_image/linkedin.svg';
import linkedinLight from '../assets/images/hero_image/linkedin-claro.svg';
import githubDark from '../assets/images/hero_image/github-dark.svg';
import githubLight from '../assets/images/hero_image/github-claro.svg';
import instagramDark from '../assets/images/hero_image/instagram-dark.svg';
import instagramLight from '../assets/images/hero_image/instagram-claro.svg';
import arrowDownDark from '../assets/images/hero_image/arrow-down-dark.svg';
import arrowDownLight from '../assets/images/hero_image/arrow-down-claro.svg';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__title">
          <h2 className="fade-in">Olá! <span className="wave">👋</span> meu nome é</h2>
          <h1>Hicaro André</h1>
          <div className="role-wrapper">
            <span className="dev-label">Desenvolvedor</span>
            <span className="typing-wrapper">
              <span className="typing">Full Stack</span>
              <span className="cursor">|</span>
            </span>
          </div>
        </div>

        <div className="hero__icons">
          <a href="https://www.linkedin.com/in/hicaroandre/" className="icon-fade">
            <img
              className="icon-dark"
              src={linkedinDark}
              alt="Perfil no LinkedIn"
            />
            <img
              className="icon-light"
              src={linkedinLight}
              alt="Perfil no LinkedIn"
            />
          </a>

          <a href="https://github.com/Hicaro-Andre" className="icon-fade">
            <img
              className="icon-dark"
              src={githubDark}
              alt="Perfil no GitHub"
            />
            <img
              className="icon-light"
              src={githubLight}
              alt="Perfil no GitHub"
            />
          </a>

          <a href="https://www.instagram.com/hicaroandre/" className="icon-fade">
            <img
              className="icon-dark"
              src={instagramDark}
              alt="Perfil no Instagram"
            />
            <img
              className="icon-light"
              src={instagramLight}
              alt="Perfil no Instagram"
            />
          </a>
        </div>
        <div className="hero__arrow">
          <a href="#port">
            <img
              className="icon-dark"
              src={arrowDownDark}
              alt="Seta"
            />
            <img
              className="icon-light"
              src={arrowDownLight}
              alt="Seta"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;