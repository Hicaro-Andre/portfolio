import redenave from "../assets/images_project/profile_project/RedeNave.png"
import p2 from "../assets/images_project/profile_project/edf.png"
import p3 from "../assets/images_project/profile_project/java.webp"
import p4 from "../assets/images_project/profile_project/javascript.png"


export const projects = [
  {
    id: 1,
    status: "Concluído",
    title: "Rede Nave",
    description:
      "Plataforma digital que apoia o protagonismo feminino com trilhas de aprendizagem, eventos e conteúdos acessíveis sobre desenvolvimento pessoal e empreendedorismo.",
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
    status: "Em desenvolvimento",
    title: "App Hans+",
    description:
      "Plataforma com versão web e app Android que apoia o tratamento da hanseníase.",
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
    status: "Em desenvolvimento",
    title: "RENAVEH",
    description:
      "Sistema web para cadastro de pacientes e gestão de notificações hospitalares.",
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
    status: "Em desenvolvimento",
    title: "CadServ",
    description: "Sistema de cadastro e gestão de servidores.",
    techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],
    projectUrl: "#",
    githubUrl: "#",

    image: p4,
  },
   {
    id: 5,
    status: "Em desenvolvimento",
    title: "São Paulo",
    description: "Sistema de cadastro e gestão de servidores.",
    techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],
    projectUrl: "#",
    githubUrl: "#",

    image: p4,
  },
  //  {
  //   id: 6,
  //   status: "Em desenvolvimento",
  //   title: "Barcelona",
  //   description: "Sistema de cadastro e gestão de servidores.",
  //   techs: [
  //     { name: "Laravel", color: "#ff0000", textColor: "#fff" },
  //     { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
  //     { name: "JavaScript", color: "#ffff00", textColor: "#000" },
  //   ],
  //   projectUrl: "#",
  //   githubUrl: "#",

  //   image: p4,
  // },
];