import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiStoryblok,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSpringboot,
  SiPostgresql,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
  SiDocker,
} from "react-icons/si";

// Wrapper que aplica o fundo preto em qualquer ícone
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#000",
      borderRadius: "8px",
      padding: "8px",
      width: "36px",
      height: "36px",
    }}
  >
    {children}
  </span>
);

export const techIcons = {
  /*FRONT-END */
  html: <IconWrapper><FaHtml5 color="#ff0000" /></IconWrapper>,
  css: <IconWrapper><FaCss3Alt color="#0033FF" /></IconWrapper>,
  js: <IconWrapper><FaJs color="#ffff00" /></IconWrapper>,
  ts: <IconWrapper><SiTypescript color="#00E5FF" /></IconWrapper>,
  react: <IconWrapper><FaReact color="#7DF9FF" /></IconWrapper>,
  nextjs: <IconWrapper><SiNextdotjs color="#e6f1ff" /></IconWrapper>,
  sass: <IconWrapper><SiSass color="#ff4dff" /></IconWrapper>,
  tailwind: <IconWrapper><SiTailwindcss color="#00ffff" /></IconWrapper>,

  /*BACKEND e DATABASE*/
  node: <IconWrapper><FaNodeJs color="#39ff14" /></IconWrapper>,
  express: <IconWrapper><SiExpress color="#F0F8FF" /></IconWrapper>,
  nestjs: <IconWrapper><SiNestjs color="#FF0055" /></IconWrapper>,
  prisma: <IconWrapper><SiPrisma color="#00FFD1" /></IconWrapper>,
  // java: <IconWrapper><FaJava color="#ff0000" /></IconWrapper>,
  // sprintboot: <IconWrapper><SiSpringboot color="#39FF14" /></IconWrapper>,
  postgresql: <IconWrapper><SiPostgresql color="#00E5FF" /></IconWrapper>,
  mongo: <IconWrapper><SiMongodb color="#39FF14" /></IconWrapper>,
  firebase: <IconWrapper><SiFirebase color="#FFCA28" /></IconWrapper>,

  /*OUTRAS FERRAMENTAS*/
  git: <IconWrapper><FaGitAlt color="#FF5E00" /></IconWrapper>,
  github: <IconWrapper><FaGithub color="#F0F8FF" /></IconWrapper>,
  docker: <IconWrapper><SiDocker color="#00D4FF" /></IconWrapper>,
  storyblok: <IconWrapper><SiStoryblok color="#0CE8E0" /></IconWrapper>,
};