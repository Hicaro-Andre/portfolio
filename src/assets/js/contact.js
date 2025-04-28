// TODO: FORMULÁRIO

// TODO: Inicializa EmailJS
document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("C42PRG_XpaQf8mZAc");   
  const form = document.getElementById("contact-form");
  
  // TODO: Função para validar campos em tempo real
  function validateInput(input) {
    const value = input.value.trim();
    let isValid = false;
  
    if (input.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    } else if (input.id === "mensagem") {
      isValid = value.length >= 6;
    } else {
      isValid = value.length > 0;
    }
  
    // TODO: Verifica se já existe um ícone de validação e remove apenas ele
    const existingIcon = input.parentElement.querySelector(".validation-icon");
    if (existingIcon) existingIcon.remove();
  
    const icon = document.createElement("span");
    icon.className = "validation-icon"; // TODO: adiciona classe para facilitar
    icon.style.marginLeft = "8px";
  
    if (isValid) {
      icon.textContent = "✓";
      icon.style.color = "green";
    } else {
      icon.textContent = "✕";
      icon.style.color = "red";
    }
  
    input.parentElement.appendChild(icon); // TODO: insere dentro do container pai
    return isValid;
  }
  
  
  // TODO: Validar inputs em tempo real
  document.querySelectorAll("#contact-form input, #contact-form textarea").forEach(input => {
    input.addEventListener("input", () => validateInput(input));
  });
  
  // TODO: Modal Simples
  function showModal(message, success = true) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.padding = "20px";
    modal.style.backgroundColor = success ? "#d4edda" : "#f8d7da";
    modal.style.color = success ? "#155724" : "#721c24";
    modal.style.border = "1px solid";
    modal.style.borderColor = success ? "#c3e6cb" : "#f5c6cb";
    modal.style.zIndex = "9999";
    modal.style.textAlign = "center";
    modal.style.borderRadius = "8px";
    modal.innerText = message;
  
    document.body.appendChild(modal);
  
    setTimeout(() => modal.remove(), 3000); // TODO: Remove modal após 3 segundos
  }
  
  // TODO:Loading Spinner
  function showLoading() {
    const spinner = document.createElement("div");
    spinner.id = "loading-spinner";
    spinner.style.position = "fixed";
    spinner.style.top = "50%";
    spinner.style.left = "50%";
    spinner.style.transform = "translate(-50%, -50%)";
    spinner.innerHTML = `<div style="width:50px;height:50px;border:5px solid #ccc;border-top:5px solid #333;border-radius:50%;animation:spin 1s linear infinite;"></div>`;
  
    document.body.appendChild(spinner);
  }
  
  function hideLoading() {
    document.getElementById("loading-spinner")?.remove();
  }
  
  // TODO: Animação para o spinner
  const style = document.createElement('style');
  style.innerHTML = `
  @keyframes spin {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }`;
  document.head.appendChild(style);
  
  // TODO: Enviar Formulário
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    let isFormValid = true;
  
    document.querySelectorAll("#contact-form input, #contact-form textarea").forEach(input => {
      const valid = validateInput(input);
      if (!valid) isFormValid = false;
    });
  
    if (!isFormValid) {
      showModal("Por favor, preencha corretamente os campos obrigatórios!", false);
      return;
    }
  
    showLoading();
  
    const templateParams = {
      from_name: form.nome.value,
      email: form.email.value,
      message: form.mensagem.value,
    };
  
    emailjs.send("service_bz0zc1c", "template_lfe127c", templateParams)
      .then(() => {
        hideLoading();
        showModal("Mensagem enviada com sucesso!");
        form.reset(); // TODO: Limpa o formulário
        document.querySelectorAll("#contact-form span").forEach(span => span.remove()); // Remove ícones ✓ ✕
      }, (error) => {
        hideLoading();
        console.error("Erro:", error);
        showModal("Erro ao enviar. Tente novamente.", false);
      });
  });
  });