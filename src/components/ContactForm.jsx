import "/src/styles/ContactForm.css";
import { Mail, User, MessageSquare, Send, Phone, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="row-title">
        Contato
        <span />
      </h2>

      <div className="contact-wrapper">
        {/* LADO ESQUERDO */}
        <div className="contact-left">
          <h5>
            Vamos tirar sua <span>ideia</span> do papel.
          </h5>

          <div className="contact-cards">
            {/* EMAIL */}
            <a href="mailto:seuemail@email.com" className="contact-card">
              <div className="card-icon-1">
                <Mail size={20} />
              </div>
              <div className="card-content">
                <span className="card-label">E-mail</span>
                <span className="card-value">hicaroandre@hotmail.com</span>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="card-icon-2">
                <Phone size={20} />
              </div>
              <div className="card-content">
                <span className="card-label">WhatsApp</span>
                <span className="card-value">+55 (98) 98424-5018</span>
              </div>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="card-icon-3">
                <Github size={20} />
              </div>
              <div className="card-content">
                <span className="card-label">GitHub</span>
                <span className="card-value">github.com/Hicaro-Andre</span>
              </div>
            </a>
          </div>
        </div>

        {/* LADO DIREITO */}
        <form className="contact-right">
          <div className="field">
            <label htmlFor="name">Nome</label>
            <div className="input-wrapper">
              <User size={18} color="#58a6ff" />
              <input id="name" type="text" required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <div className="input-wrapper">
              <Mail size={18} color="#58a6ff" />
              <input id="email" type="email" required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject">Assunto</label>
            <div className="input-wrapper">
              <MessageSquare size={18} color="#58a6ff" />
              <input id="subject" type="text" required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Mensagem</label>
            <div className="input-wrapper textarea">
              <MessageSquare size={18} color="#58a6ff" />
              <textarea id="message" required />
            </div>
          </div>

          <button type="submit" className="btn primary">
            Enviar mensagem <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
