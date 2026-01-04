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
      <h2 className="contact-title">
        Contato
        <span />
      </h2>

      <div className="contact-container">
        {/* INFORMAÇÕES */}
        <div className="contact-info">
          <h3>Vamos conversar 👋</h3>
          <p>
            Estou aberta a oportunidades, projetos freelance ou apenas uma boa
            conversa sobre tecnologia. Sinta-se à vontade para entrar em
            contato.
          </p>

          <ul>
            <li>
              <Mail size={18} />
              <span>seuemail@email.com</span>
            </li>

            <li>
              <MapPin size={18} />
              <span>Brasil</span>
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

          <button type="submit">
            Enviar mensagem
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
