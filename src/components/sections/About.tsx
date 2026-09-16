import { motion } from "framer-motion";
import "@/styles/components/about.css";
import { getExperience } from "@/utils/dateUtils";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/types";

type Props = {
  language?: Language;
};

export default function About({}: Props) {
  const { t } = useLanguage();
  const aboutT = t.about;
  const projectsT = t.projects;

  const completedProjects = Object.values(projectsT.items).filter(
    (item) =>
      item.status?.toLowerCase() === "concluído" ||
      item.status?.toLowerCase() === "completed"
  ).length;

  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="row-title">
        {aboutT.title}
        <span />
      </h2>

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="card main-card">
          <div className="about-content-text">
            <div className="about-top">
              <span className="about-role">{aboutT.role}</span>
            </div>
            <div className="about-text">
              <p>{aboutT.description.p1}</p>
              <p>{aboutT.description.p2}</p>
              <p>{aboutT.description.p3}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="about-stats"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="stat-card">
          <strong>{getExperience()}+</strong>
          <span>{aboutT.stats.experience}</span>
        </div>
        <div className="stat-card">
          <strong>{completedProjects}+</strong>
          <span>{aboutT.stats.projects}</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
