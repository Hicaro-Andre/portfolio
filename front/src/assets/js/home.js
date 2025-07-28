// TODO: Alteração do Tema Dark/Light
document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('switch-button');
  const body = document.body;

  // TODO: Verifica tema salvo ou preferência do sistema
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    themeSwitch.checked = true;
    body.classList.add('light-mode');
  } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches) {
    themeSwitch.checked = true;
    body.classList.add('light-mode');
  }

  // TODO: Alternância de tema
  themeSwitch.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  });
});


// TODO: Efeito do portifolio 
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animated").forEach(element => {
    observer.observe(element);
  });
});

// TODO: Efeito no skill
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".card__skills").forEach(card => {
    observer.observe(card);
  });
});



// TODO: Efeito no contato
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".about__text, .about__cta").forEach(element => {
    observer.observe(element);
  });
});



