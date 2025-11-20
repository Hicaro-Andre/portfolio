import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Limites de caracteres
  const CHAR_LIMITS = {
    name: 70,
    email: 80,
    subject: 50,
    message: 2000,
  };

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let limitedValue = value;

    // Aplicar limites de caracteres
    if (value.length > CHAR_LIMITS[name]) {
      limitedValue = value.slice(0, CHAR_LIMITS[name]);
    }

    setFormData({ ...formData, [name]: limitedValue });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    // Validação do nome
    if (!formData.name.trim()) {
      newErrors.name = "Ops! Esqueceu o nome 😉";
    } else if (formData.name.length > CHAR_LIMITS.name) {
      newErrors.name = `O nome deve ter no máximo ${CHAR_LIMITS.name} caracteres.`;
    }

    // Validação do email
    if (!formData.email.trim()) {
      newErrors.email = "Não esqueça seu e-mail, por favor!";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Hmm... esse e-mail parece inválido.";
    } else if (formData.email.length > CHAR_LIMITS.email) {
      newErrors.email = `O e-mail deve ter no máximo ${CHAR_LIMITS.email} caracteres.`;
    }

    // Validação do assunto
    if (!formData.subject.trim()) {
      newErrors.subject = "Qual o assunto?";
    } else if (formData.subject.length > CHAR_LIMITS.subject) {
      newErrors.subject = `O assunto deve ter no máximo ${CHAR_LIMITS.subject} caracteres.`;
    }

    // Validação da mensagem
    if (!formData.message.trim()) {
      newErrors.message = "Escreva uma mensagem antes de enviar.";
    } else if (formData.message.length > CHAR_LIMITS.message) {
      newErrors.message = `A mensagem deve ter no máximo ${CHAR_LIMITS.message} caracteres.`;
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setShowModal(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => setShowModal(false);

  // Função para mostrar contador de caracteres
  const getCharCount = (fieldName) => {
    return `${formData[fieldName].length}/${CHAR_LIMITS[fieldName]}`;
  };

  return (
    <section className="contact-form-section" id="contact">
      <h2>Vamos Conversar?</h2>
      <p>
        Quer trocar uma ideia sobre oportunidades, projetos ou colaborações? É
        só preencher o formulário abaixo! 🚀
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className={`form-group ${errors.name ? "error" : ""}`}>
          <label htmlFor="name">Nome *</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleChange}
            maxLength={CHAR_LIMITS.name}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className={`form-group ${errors.email ? "error" : ""}`}>
          <label htmlFor="name">Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu@email.com"
            value={formData.email}
            onChange={handleChange}
            maxLength={CHAR_LIMITS.email}
          />

          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <div className={`form-group ${errors.subject ? "error" : ""}`}>
          <label htmlFor="name">Assunto *</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Sobre o que você quer falar?"
            value={formData.subject}
            onChange={handleChange}
            maxLength={CHAR_LIMITS.subject}
          />

          {errors.subject && (
            <span className="error-msg">{errors.subject}</span>
          )}
        </div>

        <div className={`form-group ${errors.message ? "error" : ""}`}>
          <label htmlFor="name">Mensagem *</label>
          <textarea
            name="message"
            id="message"
            placeholder="Conte-nos como podemos ajudá-lo..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            maxLength={CHAR_LIMITS.message}
          ></textarea>
          {/* <div className="char-counter">
            {getCharCount('message')}
          </div> */}
          {errors.message && (
            <span className="error-msg">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className={`submit-btn ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="checkmark-circle">
              <div className="checkmark draw"></div>
            </div>
            <h3>Mensagem enviada!</h3>
            <p>
              Valeu por entrar em contato! Assim que possível, te retorno 😉
            </p>
            <button className="close-btn" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
