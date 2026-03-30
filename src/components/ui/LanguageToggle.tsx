type Language = "pt" | "en";

type Props = {
  language: Language;
  onToggle: () => void;
};

export default function LanguageToggle({ language, onToggle }: Props) {
  return (
    <button className="lang-toggle" onClick={onToggle}>
      <span className={`lang-option ${language === "pt" ? "active" : ""}`}>
        <img
          src="https://flagcdn.com/br.svg"
          alt="Português"
          className="flag"
        />
      </span>

      <span className={`lang-option ${language === "en" ? "active" : ""}`}>
        <img
          src="https://flagcdn.com/us.svg"
          alt="English"
          className="flag"
        />
      </span>

      <div className={`toggle-indicator ${language}`} />
    </button>
  );
}