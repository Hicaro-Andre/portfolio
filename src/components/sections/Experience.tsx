import { motion } from "framer-motion";
import "@/styles/components/experience.css";
import { useLanguage } from "@/context/LanguageContext";
import { FaCheckCircle, FaTools } from "react-icons/fa";
import { techIcons } from "@/components/icons/techIcons";
import type { Language, ExperienceItem } from "@/types";

type Props = {
  language?: Language;
};

export default function Experience({}: Props) {
  const { t } = useLanguage();
  const experienceT = t.experience as {
    title: string;
    items: ExperienceItem[];
  };

  return (
    <motion.section
      className="experience-section"
      id="experience"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="row-title">
        {experienceT.title}
        <span />
      </h2>

      <div className="experience-container">
        <div className="timeline">
          {experienceT.items.map((item: ExperienceItem, idx: number) => (
            <motion.div
              key={item.id}
              className={`timeline-item ${item.side}`}
              initial={{
                opacity: 0,
                x: item.side === "left" ? -35 : 35,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="timeline-dot" />

              <div className="card card-timeline">
                {/* HEADER */}
                <div className="card-timeline-header">
                  <div className="header-top">
                    <h4>{item.role}</h4>
                    <p>{item.company}</p>
                  </div>

                  <div className="header-bottom">
                    <div className="period">
                      <p>{item.date}</p>
                    </div>

                    <div className="badge-group">
                      <span className="local-badge">{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* BODY */}
                <div className="card-timeline-body">
                  <p className="description">{item.description}</p>

                  {/* RESPONSABILIDADES */}
                  <div className="timeline-section">
                    <h5 className="timeline-title">
                      <FaCheckCircle className="timeline-icon" />
                      {item.responsibilitiesTitle}
                    </h5>

                    <ul>
                      {item.responsibilities.map((resp: string, index: number) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>

                    <div className="separator" />
                  </div>

                  {/* TECNOLOGIAS */}
                  <div className="timeline-section">
                    <h5 className="timeline-title">
                      <FaTools className="timeline-icon" />
                      {item.techTitle}
                    </h5>

                    <div className="tech-icons">
                      {item.techs?.map((tech: string, index: number) => (
                        <span key={index} title={tech}>
                          {techIcons[tech as keyof typeof techIcons]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
