import { Dispatch, SetStateAction } from "react";

type Language = "pt" | "en";

export function useLanguage(
  setLanguage: Dispatch<SetStateAction<Language>>
) {
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return { toggleLanguage };
}