import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  const [language, setLanguage] = useState("pt");

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home language={language} setLanguage={setLanguage} />}
        />

        <Route
          path="/project/:id"
          element={<ProjectDetails language={language} />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;