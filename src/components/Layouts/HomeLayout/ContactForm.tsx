import { useState } from "react";
import emailjs from "@emailjs/browser";
import { validateContactForm } from "/src/utils/validation";

import "/src/styles/ContactForm.css";
import { Mail, Send, Phone, Github } from "lucide-react";

import translations from "/src/translations";

// 🔥 Tipos
type Language = "pt" | "en";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<FormData>;

type Props = {
  language?: Language;
};

export default function Contact({ language = "pt" }: Props) {
  const [isSending, setIsSending] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = translations[language]?.contact;

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsModalOpen(true);

      // limpa formulário
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="row-title">
        {t.title}
        <span />
      </h2>

      <div className="contact-wrapper">
        <form className="contact" onSubmit={handleSubmit}>
          <h5>
            {t.subtitle.split(" ").slice(0, -2).join(" ")}{" "}
            <span>{t.subtitle.split(" ").slice(-2).join(" ")}</span>
          </h5>

          {/* Nome */}
          <div className="field">
            <label>{t.fields.name}</label>
            <div className="input-wrapper">
              <input
                id="name"
                value={form.name}
                onChange={handleChange}
                maxLength={45}
              />
            </div>
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>

          {/* Email */}
          <div className="field">
            <label>{t.fields.email}</label>
            <div className="input-wrapper">
              <input
                id="email"
                value={form.email}
                onChange={handleChange}
                maxLength={60}
              />
            </div>
            {errors.email && (
              <small className="error-text">{errors.email}</small>
            )}
          </div>

          {/* Assunto */}
          <div className="field">
            <label>{t.fields.subject}</label>
            <div className="input-wrapper">
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
            <label>{t.fields.message}</label>
            <div className="input-wrapper textarea">
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

          {/* BOTÃO */}
          <button
            type="submit"
            className="btn primary"
            disabled={isSending}
          >
            {isSending ? t.buttonSend : t.button}
            {!isSending && <Send size={18} />}
          </button>

          {/* Sociais */}
          <div className="sociais">
            <a href="mailto:hicaroandre@hotmail.com">
              <div className="card-icon-1">
                <Mail size={15} />
              </div>
            </a>

            <a
              href="https://wa.me/5598984245018"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-icon-2">
                <Phone size={15} />
              </div>
            </a>

            <a
              href="https://github.com/Hicaro-Andre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-icon-3">
                <Github size={15} />
              </div>
            </a>
          </div>
        </form>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal success-modal">

            <div className="success-icon">
              ✓
            </div>

            <h3>{t.modalTitle}</h3>
            <p>{t.modalMessage}</p>

            <button
              className="modal-btn"
              onClick={() => setIsModalOpen(false)}
            >
              {t.modalbtn}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}