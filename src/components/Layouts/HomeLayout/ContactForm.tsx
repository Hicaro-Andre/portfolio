import { useState } from "react";
import emailjs from "@emailjs/browser";
import { validateContactForm } from "/src/utils/validation";

import "/src/styles/ContactForm.css";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Phone,
  Github,
} from "lucide-react";

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
  const t = translations[language]?.contact;

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 🔥 Tipagem do evento
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const validationErrors = validateContactForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      );

      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setIsModalOpen(true);
    } catch (error) {
      alert(t.error);
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
              <User size={18} />
              <input
                id="name"
                value={form.name}
                onChange={handleChange}
                maxLength={45}
              />
            </div>
            {errors.name && (
              <small className="error-text">{errors.name}</small>
            )}
          </div>

          {/* Email */}
          <div className="field">
            <label>{t.fields.email}</label>
            <div className="input-wrapper">
              <Mail size={18} />
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
            <label>{t.fields.message}</label>
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

          <button type="submit" className="btn primary">
            {t.button} <Send size={18} />
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
          <div className="modal">
            <h3>{t.success.title}</h3>
            <p>{t.success.description}</p>

            <button
              className="modal-btn"
              onClick={() => setIsModalOpen(false)}
            >
              {t.success.close}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}