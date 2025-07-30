// App.jsx
import { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import Portfolio from './components/Portifolio.jsx';
import Skills from './components/Skills.jsx';


function App() {
  useEffect(() => {
    // Tema
    const switchButton = document.getElementById('switch-button');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      body.classList.add('light-mode');
      if (switchButton) switchButton.checked = true;
    }

    if (switchButton) {
      switchButton.addEventListener('change', function () {
        if (this.checked) {
          body.classList.add('light-mode');
          localStorage.setItem('theme', 'light');
        } else {
          body.classList.remove('light-mode');
          localStorage.setItem('theme', 'dark');
        }
      });
    }

    // IntersectionObserver
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animated, .card__skills, .about__text, .about__cta').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Portfolio />
      <Skills />


      {/* Botão WhatsApp */}
      <a href="https://wa.me/98984245018" className="whatsapp-button" target="_blank">
        <img
          className="icon-dark"
          src="src/assets/images/whatsapp-dark.svg"
          alt="Fale comigo no WhatsApp"
        />
        <img
          className="icon-light"
          src="src/assets/images/whatsapp-claro.svg"
          alt="Fale comigo no WhatsApp"
        />
      </a>

      {/* Botão de Tema */}
      <input type="checkbox" id="switch-button" className="theme-switch" />
      <label htmlFor="switch-button" className="theme-label">
        <i className="fas fa-sun"></i>
        <i className="fas fa-moon"></i>
      </label>
    </>
  );
}

export default App;
