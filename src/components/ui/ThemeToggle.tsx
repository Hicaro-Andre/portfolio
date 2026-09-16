import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import "@/styles/components/theme-toggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
      title={theme === "dark" ? "Tema Claro" : "Tema Escuro"}
      type="button"
    >
      <span className={`theme-option ${theme === "light" ? "active" : ""}`}>
        <Sun size={17} className="theme-icon-sun" />
      </span>

      <span className={`theme-option ${theme === "dark" ? "active" : ""}`}>
        <Moon size={17} className="theme-icon-moon" />
      </span>

      <div className="theme-indicator" />
    </button>
  );
}
