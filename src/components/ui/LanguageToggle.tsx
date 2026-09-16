import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/types";

type LanguageToggleProps = {
  language?: Language;
  onToggle?: () => void;
};

export default function LanguageToggle({
  language: propLanguage,
  onToggle: propToggle,
}: LanguageToggleProps) {
  const context = useLanguage();
  const language = propLanguage ?? context.language;
  const onToggle = propToggle ?? context.toggleLanguage;

  return (
    <button
      className="lang-toggle"
      onClick={onToggle}
      aria-label={language === "pt" ? "Alterar para Inglês" : "Switch to Portuguese"}
      title={language === "pt" ? "Switch to English" : "Mudar para Português"}
      type="button"
    >
      <span className={`lang-option ${language === "pt" ? "active" : ""}`}>
        <img
          src="https://flagcdn.com/br.svg"
          alt="Português"
          className="flag"
          width="20"
          height="20"
        />
      </span>

      <span className={`lang-option ${language === "en" ? "active" : ""}`}>
        <img
          src="https://flagcdn.com/us.svg"
          alt="English"
          className="flag"
          width="20"
          height="20"
        />
      </span>

      <div className={`toggle-indicator ${language}`} />
    </button>
  );
}