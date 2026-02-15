import "/src/styles/ContactForm.css";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="row-title">
        Contato
        <span />
      </h2>

      <div className="contact-container">
        {/* INFORMAÇÕES */}
        <div className="contact-info">
          <h3>Vamos construir algo incrível 👋</h3>

          <p>
            Estou disponível para oportunidades, projetos freelance e parcerias
            estratégicas. Se você busca alguém comprometida com qualidade,
            performance e boas práticas, será um prazer conversar.
          </p>

          <ul>
            <li>
              <Mail size={18} />
              <span>seuemail@email.com</span>
            </li>

            <li>
              <MapPin size={18} />
              <span>Brasil • Remoto</span>
            </li>
          </ul>

          <div className="contact-socials">
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <form className="contact-form">
          <div className="input-group">
            <User size={18} />
            <input type="text" placeholder="Seu nome" required />
          </div>

          <div className="input-group">
            <Mail size={18} />
            <input type="email" placeholder="Seu e-mail" required />
          </div>

          <div className="input-group">
            <MessageSquare size={18} />
            <input type="text" placeholder="Assunto" required />
          </div>

          <div className="input-group textarea">
            <MessageSquare size={18} />
            <textarea placeholder="Sua mensagem" required />
          </div>

          <button className="btn primary">
            Enviar mensagem
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
