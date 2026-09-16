import { useEffect, useRef, useState } from "react";
import "@/styles/components/hero.css";
import myfoto from "@/assets/images/me.jpg";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/types";

type Props = {
  language?: Language;
};

export default function Hero({}: Props) {
  const heroRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { t } = useLanguage();
  const heroT = t.hero;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
            <span className="planet planet-1" />
            <span className="planet planet-2" />
            <span className="planet planet-3" />
          </div>

          <div className="photo-border">
            <div className="photo-wrapper">
              <img
                src={myfoto}
                alt="Hicaro André - Full Stack Developer"
                className="photo"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="hero-content">
          <span className="hero-eyebrow">{heroT.eyebrow}</span>

          <h1 className="hero-name">
            Hicaro <span>André</span>
          </h1>

          <div className="hero-role-container">
            <div className="barra-gradiente" />
            <p className="hero-role">{heroT.role}</p>
          </div>

          <p className="hero-description">
            {heroT.description.part1}{" "}
            <span className="highlight">{heroT.description.highlight1}</span>{" "}
            {heroT.description.part2}{" "}
            <span className="highlight">{heroT.description.highlight2}</span>
            {heroT.description.part3}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              {heroT.buttons.projects}
            </a>

            <a href="/hicaro-cv.pdf" download className="btn secondary">
              {heroT.buttons.cv}
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="orbit-ring">
            <span className="planet planet-1" />
            <span className="planet planet-2" />
            <span className="planet planet-3" />
          </div>

          <div className="photo-border">
            <div className="photo-wrapper">
              <img
                src={myfoto}
                alt="Hicaro André - Full Stack Developer"
                className="photo"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
