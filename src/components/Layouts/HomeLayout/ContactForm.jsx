import { useState } from "react";
import emailjs from "@emailjs/browser";
import { validateContactForm } from "/src/utils/validation.js";

import "/src/styles/ContactForm.css";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Phone,
  Github,
  X,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateContactForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setIsModalOpen(true); // 🔥 abre o modal
    } catch (error) {
      alert("Erro ao enviar mensagem ❌");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="row-title">
        Contato
        <span />
      </h2>

      <div className="contact-wrapper">
        <form className="contact" onSubmit={handleSubmit}>
          <h5>
            Vamos tirar sua <span>ideia</span> do papel.
          </h5>

          {/* Nome */}
          <div className="field">
            <label>Nome</label>
            <div className="input-wrapper">
              <User size={18} />
              <input id="name" value={form.name} onChange={handleChange}  maxLength={45} />
            </div>
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>

          {/* Email */}
          <div className="field">
            <label>E-mail</label>
            <div className="input-wrapper">
              <Mail size={18} />
              <input id="email" value={form.email} onChange={handleChange} maxLength={60}/>
            </div>
            {errors.email && (
              <small className="error-text">{errors.email}</small>
            )}
          </div>

          {/* Assunto */}
          <div className="field">
            <label>Assunto</label>
            <div className="input-wrapper">
              <MessageSquare size={18} />
              <input
                id="subject"
                value={form.subject}
                onChange={handleChange}
                maxLength={70}
              />
            </div>
            {errors.subject && (
              <small className="error-text">{errors.subject}</small>
            )}
          </div>

          {/* Mensagem */}
          <div className="field">
            <label>Mensagem</label>
            <div className="input-wrapper textarea">
              <MessageSquare size={18} />
              <textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                maxLength={500}
              />
            </div>
            {errors.message && (
              <small className="error-text">{errors.message}</small>
            )}
          </div>

          <button type="submit" className="btn primary submit-btn">
            Enviar mensagem <Send size={18} />
          </button>

          {/* Sociais */}
          <div className="sociais">
            <a href="mailto:hicaroandre@hotmail.com">
              <div className="card-icon-1">
                <Mail size={15} />
              </div>
            </a>

            <a href="https://wa.me/5598984245018" target="_blank">
              <div className="card-icon-2">
                <Phone size={15} />
              </div>
            </a>

            <a href="https://github.com/Hicaro-Andre" target="_blank">
              <div className="card-icon-3">
                <Github size={15} />
              </div>
            </a>
          </div>
        </form>
      </div>

      {/* 🔥 MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Mensagem enviada 🚀</h3>
            <p>Em breve entrarei em contato com você.</p>

            <button className="modal-btn" onClick={() => setIsModalOpen(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
