import { useEffect, useRef, useState } from "react";
import "/src/styles/Hero.css";
import myfoto from "/src/assets/images/hero_image/me.jpg";
import translations from "/src/translations";

export default function Hero({ language }) {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const t = translations[language].hero;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
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
        <div className="hero-photo-mobile">
          <div className="orbit-ring">
            <span className="planet planet-1"></span>
            <span className="planet planet-2"></span>
            <span className="planet planet-3"></span>
          </div>

          <div className="photo-border">
            <div className="photo-wrapper">
              <img
                src={myfoto}
                alt="Hicaro André - Full Stack Developer"
                className="photo"
              />
            </div>
          </div>
        </div>

        <div className="hero-content">
          <span className="hero-eyebrow">{t.eyebrow}</span>

          <h1 className="hero-name">
            Hicaro <span>André</span>
          </h1>

          <div className="hero-role-container">
            <div className="barra-gradiente"></div>

            <p className="hero-role">{t.role}</p>
          </div>

          <p className="hero-description">
            {t.description.part1}{" "}
            <span className="highlight">{t.description.highlight1}</span>{" "}
            {t.description.part2}{" "}
            <span className="highlight">{t.description.highlight2}</span>
            {t.description.part3}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              {t.buttons.projects}
            </a>

            <a href="/public/hicaro-cv.pdf" download className="btn secondary">
              {t.buttons.cv}
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="orbit-ring">
            <span className="planet planet-1"></span>
            <span className="planet planet-2"></span>
            <span className="planet planet-3"></span>
          </div>

          <div className="photo-border">
            <div className="photo-wrapper">
              <img
                src={myfoto}
                alt="Hicaro André - Full Stack Developer"
                className="photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}