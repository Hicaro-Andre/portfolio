import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ProjectDetails from "@/pages/ProjectDetails";
import ScrollToTop from "@/components/common/ScrollToTop";
import useSectionObserver from "@/hooks/useSectionObserver";

export default function App() {
  useSectionObserver();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}