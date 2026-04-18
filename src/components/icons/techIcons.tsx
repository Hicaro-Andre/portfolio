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

export const techIcons = {
  /*FRONT-END */
  html: <FaHtml5 color="#ff0000" />,
  css: <FaCss3Alt color="#0033FF" />,
  js: <FaJs color="#ffff00" />,
  ts: <SiTypescript color="#00E5FF" />,
  react: <FaReact color="#7DF9FF" />,
  nextjs: <SiNextdotjs color="#e6f1ff" />,
  sass: <SiSass color="#ff4dff" />,
  tailwind: <SiTailwindcss color="#00ffff" />,

  /*BACKEND e DATABASE*/
  node: <FaNodeJs color="#39ff14" />,
  express: <SiExpress color="#F0F8FF" />,
  nestjs: <SiNestjs color="#FF0055" />,
  prisma: <SiPrisma color="#00FFD1" />,
  // java: <FaJava color="#ff0000" />,
  // sprintboot: <SiSpringboot color="#39FF14" />,
  postgresql: <SiPostgresql color="#00E5FF" />,
  mongo: <SiMongodb color="#39FF14" />,
  firebase: <SiFirebase color="#FFCA28" />,


  /*OUTRAS FERRAMENTAS*/
  git: <FaGitAlt color="#FF5E00" />,
  github: <FaGithub color="#F0F8FF" />,
  docker: <SiDocker color="#00D4FF" />,
  storyblok: <SiStoryblok color="#0CE8E0" />,

};
