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

  
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ops! Esqueceu o nome 😉";
    if (!formData.email.trim()) {
      newErrors.email = "Não esqueça seu e-mail, por favor!";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Hmm... esse e-mail parece inválido.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Qual o assunto?";
    if (!formData.message.trim())
      newErrors.message = "Escreva uma mensagem antes de enviar.";
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

  return (
    <section className="contact-form-section" id="contact">
      <h2 className="title-section">
        <span className="highlight">Vamos</span> Conversar?
      </h2>
      <p>
        Quer trocar uma ideia sobre oportunidades, projetos ou colaborações?
        É só preencher o formulário abaixo! 🚀
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className={`form-group ${errors.name ? "error" : ""}`}>
          <label htmlFor="name">Seu nome *</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ex: Ana Silva"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className={`form-group ${errors.email ? "error" : ""}`}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <div className={`form-group ${errors.subject ? "error" : ""}`}>
          <label htmlFor="subject">Assunto *</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Ex: Oportunidade de trabalho"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <span className="error-msg">{errors.subject}</span>}
        </div>

        <div className={`form-group ${errors.message ? "error" : ""}`}>
          <label htmlFor="message">Mensagem *</label>
          <textarea
            name="message"
            id="message"
            placeholder="Conte um pouco sobre a vaga, projeto ou ideia!"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error-msg">{errors.message}</span>}
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
            <p>Valeu por entrar em contato! Assim que possível, te retorno 😉</p>
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
