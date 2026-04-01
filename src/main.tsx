import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/Globals.css";
import "./styles/Global/Buttons.css";
import "./styles/Global/Typography.css";
import "./styles/Global/Cards.css";
import "./styles/Global/Animation.css";
import "./styles/Global/Normalize.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(

  <StrictMode>
    <App />
  </StrictMode>
);