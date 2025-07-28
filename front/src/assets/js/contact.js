// TODO: FORMULÁRIO

// TODO: Inicializa EmailJS
document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("C42PRG_XpaQf8mZAc");   
  const form = document.getElementById("contact-form");
  
  // TODO: Função para validar campos em tempo real
  function validateInput(input) {
    const value = input.value.trim();
    let isValid = false;
    let errorMessage = "";

    // TODO:Lista de domínios válidos para e-mails
    const validDomains = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "live.com", "icloud.com"];

    if (input.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);

        if (isValid) {
            const domain = value.split("@")[1]; // TODO: Obtém o domínio do e-mail
            isValid = validDomains.includes(domain);

            if (!isValid) errorMessage = "Digite um e-mail válido de um provedor reconhecido.";
        } else {
            errorMessage = "Digite um e-mail válido.";
        }
    } else if (input.id === "mensagem") {
        isValid = value.length >= 6;
        if (!isValid) errorMessage = "A mensagem deve ter no mínimo 6 caracteres.";
    } else if (input.id === "nome") {
        // TODO: Regra para validar nome
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        isValid = nameRegex.test(value) && value.length >= 3 && value.length <= 50;

        if (!isValid) errorMessage = "Digite um nome válido: mínimo 3 caracteres, sem números ou símbolos).";
    } else {
        isValid = value.length > 0;
        if (!isValid) errorMessage = `O campo "${input.name}" é obrigatório.`;
    }

    // TODO: Limpa estados anteriores
    input.classList.remove("input-error", "input-valid");
    const existingError = input.parentElement.querySelector(".error-message");
    if (existingError) existingError.remove();

    if (isValid) {
        input.classList.add("input-valid");
    } else {
        input.classList.add("input-error");

        // TODO: Cria e exibe a mensagem de erro
        const error = document.createElement("div");
        error.className = "error-message";
        error.textContent = errorMessage;
        error.style.color = "#e74c3c";
        error.style.fontSize = "0.9rem";
        error.style.marginTop = "4px";
        input.after(error);
    }

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
        form.reset(); // Limpa o formulário
        document.querySelectorAll("#contact-form span").forEach(span => span.remove()); // Remove ícones ✓ ✕
      }, (error) => {
        hideLoading();
        console.error("Erro:", error);
        showModal("Erro ao enviar. Tente novamente.", false);
      });
  });
  
  });


 