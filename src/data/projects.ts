import redenave from "../assets/images_project/profile_project/RedeNave.png";
import p2 from "../assets/images_project/profile_project/edf.png";
import p3 from "../assets/images_project/profile_project/java.webp";
import p4 from "../assets/images_project/profile_project/javascript.png";

export type Tech = {
  name: string;
  color: string;
  textColor: string;
};

export type Project = {
  id: number;
  techs: Tech[];
  projectUrl: string;
  githubUrl: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    techs: [
      { name: "TypeScript", color: "#00B4FF", textColor: "#000" },
      { name: "React", color: "#00E5FF", textColor: "#000" },
      { name: "Firebase", color: "#FFCA28", textColor: "#000" },
      { name: "Storyblok", color: "#0CE8E0", textColor: "#000" },
    ],
    projectUrl: "https://rede-nave-front.vercel.app/",
    githubUrl: "https://github.com/Hicaro-Andre/RedeNave-Front.git",
    image: redenave,
  },
  {
    id: 2,
    techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
    ],
    projectUrl: "https://hansmais.netlify.app/",
    githubUrl: "#",
    image: p2,
  },
  {
    id: 3,
    techs: [
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],
    projectUrl: "https://renaveh.saude.ma.gov.br/",
    githubUrl: "#",
    image: p3,
  },
  {
    id: 4,
    techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],
    projectUrl: "#",
    githubUrl: "#",
    image: p4,
  },

];