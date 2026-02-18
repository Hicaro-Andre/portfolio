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

      <div className="contact-wrapper">
        {/* LADO ESQUERDO */}
        <div className="contact-left">
          

          <h2>Vamos construir algo incrível?</h2>

          <p>
            Estou disponível para oportunidades, projetos freelance e
            parcerias estratégicas. Se você busca alguém comprometido
            com performance, qualidade e boas práticas, será um prazer conversar.
          </p>

          <ul className="contact-list">
            <li>
              <Mail size={18} />
              <a href="mailto:seuemail@email.com">
                seuemail@email.com
              </a>
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

        {/* LADO DIREITO */}
        <form className="contact-right">
          <div className="field">
            <label htmlFor="name">Nome</label>
            <div className="input-wrapper">
              <User size={18} />
              <input id="name" type="text" required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <div className="input-wrapper">
              <Mail size={18} />
              <input id="email" type="email" required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject">Assunto</label>
            <div className="input-wrapper">
              <MessageSquare size={18} />
              <input id="subject" type="text" required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Mensagem</label>
            <div className="input-wrapper textarea">
              <MessageSquare size={18} />
              <textarea id="message" required />
            </div>
          </div>

          <button type="submit" className="btn-send">
            Enviar mensagem
            <Send size={18} />
          </button>

          <p className="form-status success">
            ✔ Mensagem enviada com sucesso!
          </p>
        </form>

      </div>
    </section>
  );
}
