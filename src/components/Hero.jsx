import { useEffect, useRef, useState } from "react";
import "/src/styles/Hero.css";
import myfoto from "../assets/images/hero_image/me.jpg";

export default function Hero({ language }) {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`hero-section ${isVisible ? "visible" : ""}`}
      id="hero"
    >
      <div className="hero-bg-glow" />

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            {language === "pt" ? "Olá, eu sou" : "Hey, I’m"}
          </span>

          <h1 className="hero-name">
            Hicaro <span>André</span>
          </h1>

          <p className="hero-role">
            {language === "pt"
              ? "Desenvolvedor Full Stack"
              : "Full Stack Developer"}
          </p>

          <p className="hero-description">
            {language === "pt"
              ? "Construindo experiências digitais escaláveis com foco em performance, clareza e impacto real."
              : "Building scalable digital experiences focused on performance, clarity and real impact."}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              {language === "pt" ? "Ver Projetos" : "View Projects"}
            </a>

            <a href="/cv-hicaro-dev.pdf" download className="btn secondary">
              {language === "pt" ? "Baixar CV" : "Download CV"}
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-wrapper">
            <img
              src={myfoto}
              alt="Hicaro André - Full Stack Developer"
              className={`photo ${reduceMotion ? "" : "float"}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
