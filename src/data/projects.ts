import redenave from "../assets/images/RedeNave.png";
import dashpie from "../assets/images/dashpie.png"
import studypanel from "../assets/images/general-img-landscape.png"


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
      { name: "TypeScript", color: "#00B4FF", textColor: "#000" },
      { name: "React", color: "#00E5FF", textColor: "#000" },
      { name: "Tailwind", color: "#00D9FF", textColor: "#000" },
      { name: "Node", color: "#00FF41", textColor: "#000" },
      { name: "Next", color: "#FFFFFF", textColor: "#000" },
      { name: "Nest", color: "#FF0040", textColor: "#fff" },
      { name: "Postgres", color: "#0099FF", textColor: "#000" },
      // { name: "Axios", color: "#5A29E4", textColor: "#fff" },
    ],
    projectUrl: "#",
    githubUrl: "#",
    image: dashpie,
  },
  {
    id: 3,
    techs: [
      { name: "TypeScript", color: "#00B4FF", textColor: "#000" },
      { name: "React", color: "#00E5FF", textColor: "#000" },
      { name: "Tailwind", color: "#00D9FF", textColor: "#000" },
      { name: "Node", color: "#00FF41", textColor: "#000" },
      { name: "Next", color: "#FFFFFF", textColor: "#000" },
      { name: "Nest", color: "#FF0040", textColor: "#fff" },
      { name: "Postgres", color: "#0099FF", textColor: "#000" },
      // { name: "Axios", color: "#5A29E4", textColor: "#fff" },
    ],
    projectUrl: "#",
    githubUrl: "#",
    image: studypanel,
  },
];