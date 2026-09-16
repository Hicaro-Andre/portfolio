import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { validateContactForm } from "@/utils/validation";
import "@/styles/components/contact.css";
import { Mail, Send, Phone, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/types";

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

export default function Contact({}: Props) {
  const [isSending, setIsSending] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  const contactT = t.contact;

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    if (errors[e.target.id as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.id]: undefined });
    }
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
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert("Erro ao enviar mensagem. Tente novamente ou use o WhatsApp.");
    } finally {
      setIsSending(false);
    }
  };

  const subtitleWords = contactT.subtitle.split(" ");
  const subtitlePrefix = subtitleWords.slice(0, -2).join(" ");
  const subtitleSuffix = subtitleWords.slice(-2).join(" ");

  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="row-title">
        {contactT.title}
        <span />
      </h2>

      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <form className="contact" onSubmit={handleSubmit} noValidate>
          <h5>
            {subtitlePrefix} <span>{subtitleSuffix}</span>
          </h5>

          {/* Nome */}
          <div className="field">
            <label htmlFor="name">{contactT.fields.name}</label>
            <div className="input-wrapper">
              <input
                id="name"
                value={form.name}
                onChange={handleChange}
                maxLength={45}
                required
                placeholder="Seu nome"
              />
            </div>
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>

          {/* Email */}
          <div className="field">
            <label htmlFor="email">{contactT.fields.email}</label>
            <div className="input-wrapper">
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                maxLength={60}
                required
                placeholder="seu.email@exemplo.com"
              />
            </div>
            {errors.email && (
              <small className="error-text">{errors.email}</small>
            )}
          </div>

          {/* Assunto */}
          <div className="field">
            <label htmlFor="subject">{contactT.fields.subject}</label>
            <div className="input-wrapper">
              <input
                id="subject"
                value={form.subject}
                onChange={handleChange}
                maxLength={70}
                required
                placeholder="Motivo do contato"
              />
            </div>
            {errors.subject && (
              <small className="error-text">{errors.subject}</small>
            )}
          </div>

          {/* Mensagem */}
          <div className="field">
            <label htmlFor="message">{contactT.fields.message}</label>
            <div className="input-wrapper textarea">
              <textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                maxLength={500}
                required
                placeholder="Escreva sua mensagem aqui..."
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
            {isSending ? contactT.buttonSend : contactT.button}
            {!isSending && <Send size={18} />}
          </button>

          {/* Sociais */}
          <div className="sociais">
            <a
              href="mailto:hicaroandre@hotmail.com"
              aria-label="Email"
              title="Email"
            >
              <div className="card-icon-1">
                <Mail size={16} />
              </div>
            </a>

            <a
              href="https://wa.me/5598984245018"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <div className="card-icon-2">
                <Phone size={16} />
              </div>
            </a>

            <a
              href="https://github.com/Hicaro-Andre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <div className="card-icon-3">
                <Github size={16} />
              </div>
            </a>
          </div>
        </form>
      </motion.div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="success-icon">✓</div>
            <h3>{contactT.modalTitle}</h3>
            <p>{contactT.modalMessage}</p>
            <button
              className="modal-btn"
              onClick={() => setIsModalOpen(false)}
              type="button"
            >
              {contactT.modalbtn}
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
}
