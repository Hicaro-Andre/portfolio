document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('switch-button');
  const body = document.body;

  // Verifica tema salvo ou preferência do sistema
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    themeSwitch.checked = true;
    body.classList.add('light-mode');
  } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches) {
    themeSwitch.checked = true;
    body.classList.add('light-mode');
  }

  // Alternância de tema
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