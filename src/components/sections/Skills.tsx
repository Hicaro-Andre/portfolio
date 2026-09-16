import { motion } from "framer-motion";
import "@/styles/components/skills.css";
import { techIcons } from "@/components/icons/techIcons";
import { Code2, Server, Wrench, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/types";

type SkillsProps = {
  language?: Language;
};

export default function Skills({}: SkillsProps) {
  const { t } = useLanguage();
  const skillsT = t.skills;

  const frontendSkills = [
    { name: "HTML5", percent: "98%", icon: techIcons.html },
    { name: "CSS3", percent: "95%", icon: techIcons.css },
    { name: "JavaScript", percent: "82%", icon: techIcons.js },
    { name: "TypeScript", percent: "80%", icon: techIcons.ts },
    { name: "React", percent: "85%", icon: techIcons.react },
    { name: "Next.js", percent: "78%", icon: techIcons.nextjs },
    { name: "Sass", percent: "90%", icon: techIcons.sass },
    { name: "Tailwind", percent: "90%", icon: techIcons.tailwind },
  ];

  const backendSkills = [
    { name: "Node.js", percent: "90%", icon: techIcons.node },
    { name: "Express", percent: "90%", icon: techIcons.express },
    { name: "NestJS", percent: "50%", icon: techIcons.nestjs },
    { name: "Prisma", percent: "50%", icon: techIcons.prisma },
    { name: "PostgreSQL", percent: "60%", icon: techIcons.postgresql },
    { name: "MongoDB", percent: "75%", icon: techIcons.mongo },
    { name: "Firebase", percent: "80%", icon: techIcons.firebase },
  ];

  const toolSkills = [
    { name: "GitHub", percent: "95%", icon: techIcons.github },
    { name: "Git", percent: "92%", icon: techIcons.git },
    { name: "Docker", percent: "80%", icon: techIcons.docker },
    { name: "Storyblok", percent: "88%", icon: techIcons.storyblok },
  ];

  return (
    <motion.section
      className="skills-section"
      id="skills"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="row-title">
        {skillsT.title}
        <span />
      </h2>

      <div className="skills-grid">
        {/* FRONT-END */}
        <motion.div
          className="card skills-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="skills-header">
            <Code2 size={22} />
            <h3>{skillsT.categories.frontend}</h3>
          </div>

          <ul className="skills-list">
            {frontendSkills.map((skill, index) => (
              <li className="skill-item" key={index}>
                <div className="skill-top">
                  <span className="skill-name">
                    {skill.icon}
                    {skill.name}
                  </span>
                  <span className="skill-percent">{skill.percent}</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.percent }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* BACK-END */}
        <motion.div
          className="card skills-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="skills-header">
            <Server size={22} />
            <h3>{skillsT.categories.backend}</h3>
          </div>

          <ul className="skills-list">
            {backendSkills.map((skill, index) => (
              <li className="skill-item" key={index}>
                <div className="skill-top">
                  <span className="skill-name">
                    {skill.icon}
                    {skill.name}
                  </span>
                  <span className="skill-percent">{skill.percent}</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.percent }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* TOOLS */}
        <motion.div
          className="card skills-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="skills-header">
            <Wrench size={22} />
            <h3>{skillsT.categories.tools}</h3>
          </div>

          <ul className="skills-list">
            {toolSkills.map((skill, index) => (
              <li className="skill-item" key={index}>
                <div className="skill-top">
                  <span className="skill-name">
                    {skill.icon}
                    {skill.name}
                  </span>
                  <span className="skill-percent">{skill.percent}</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.percent }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* LANGUAGES */}
        <motion.div
          className="card skills-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="skills-header">
            <Languages size={22} />
            <h3>{skillsT.categories.languages}</h3>
          </div>

          <ul className="skills-list">
            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <img
                    src="https://flagcdn.com/br.svg"
                    className="flag"
                    alt="Brasil"
                    width="22"
                    height="16"
                  />
                  {skillsT.languageNames.portuguese}
                </span>
                <span className="language-level native">
                  {skillsT.levels.native}
                </span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </li>

            <li className="skill-item">
              <div className="skill-top">
                <span className="skill-name">
                  <img
                    src="https://flagcdn.com/us.svg"
                    className="flag"
                    alt="USA"
                    width="22"
                    height="16"
                  />
                  {skillsT.languageNames.english}
                </span>
                <span className="skill-percent">50%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
