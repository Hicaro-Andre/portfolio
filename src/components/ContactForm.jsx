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
        <form className="contact">
          <h5>
            Vamos tirar sua <span>ideia</span> do papel.
          </h5>
          
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

          <button type="submit" className="btn primary submit-btn">
            Enviar mensagem <Send size={18} />
          </button>

          <div className="sociais">
            {/* email */}
            <a href="mailto:seuemail@email.com">
              <div className="card-icon-1">
                <Mail size={15} />
              </div>
            </a>
            {/* wpp */}
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-icon-2">
                <Phone size={15} />
              </div>
            </a>

            {/* github */}
            <a
              href="https://github.com/seuusuario"
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
    </section>
  );
}
