type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export const validateContactForm = ({
  name,
  email,
  subject,
  message,
}: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  // Nome (mín 3, só letras e espaços)
  if (!name || name.trim().length < 3) {
    errors.name = "Nome deve ter pelo menos 3 caracteres";
  }

  // Email (padrão + provedores válidos)
  if (!email) {
    errors.email = "E-mail obrigatório";
  } else if (email.length > 254) {
    errors.email = "E-mail muito longo";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Formato de e-mail inválido";
  } else {
    const validProviders = [
      "gmail.com",
      "outlook.com",
      "hotmail.com",
      "yahoo.com",
      "icloud.com",
      "live.com",
    ];

    const domain = email.split("@")[1]?.toLowerCase();

    if (!domain || !validProviders.includes(domain)) {
      errors.email = "Use um provedor válido (gmail, outlook, etc)";
    }
  }

  // Assunto (mín 5)
  if (!subject || subject.length < 5) {
    errors.subject = "Assunto muito curto";
  }

  // Mensagem (mín 10)
  if (!message || message.length < 10) {
    errors.message = "Mensagem muito curta";
  }

  return errors;
};