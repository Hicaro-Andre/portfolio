import React, { useState } from "react";
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
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.subject.trim()) newErrors.subject = "Assunto é obrigatório";
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória";
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
    setSuccess(false);

    // Simulação de envio
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section className="contact-form-section" id="contact">
      <h2>Contato</h2>
      <p>Entre em contato comigo preenchendo o formulário abaixo.</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {/* Nome */}
        <div className={`form-group ${errors.name ? "error" : ""}`}>
          <label htmlFor="name">Nome *</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            aria-label="Nome"
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className={`form-group ${errors.email ? "error" : ""}`}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
            aria-label="Email"
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        {/* Assunto */}
        <div className={`form-group ${errors.subject ? "error" : ""}`}>
          <label htmlFor="subject">Assunto *</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Assunto da mensagem"
            value={formData.subject}
            onChange={handleChange}
            aria-label="Assunto"
          />
          {errors.subject && (
            <span className="error-msg">{errors.subject}</span>
          )}
        </div>

        {/* Mensagem */}
        <div className={`form-group ${errors.message ? "error" : ""}`}>
          <label htmlFor="message">Mensagem *</label>
          <textarea
            name="message"
            id="message"
            placeholder="Escreva sua mensagem..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            aria-label="Mensagem"
          ></textarea>
          {errors.message && (
            <span className="error-msg">{errors.message}</span>
          )}
        </div>

        {/* Botão de envio */}
        <button
          type="submit"
          className={`submit-btn ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar Mensagem"}
        </button>

        {/* Feedback de sucesso */}
        {success && <p className="success-msg">Mensagem enviada com sucesso!</p>}
      </form>
    </section>
  );
};

export default ContactForm;
