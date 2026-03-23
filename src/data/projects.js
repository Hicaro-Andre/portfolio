import p1 from "../assets/images_project/profile_project/APIs.png"
import p2 from "../assets/images_project/profile_project/edf.png"
// import p3 from "../assets/images_project/profile_project/java.webp"
// import p4 from "../assets/images_project/profile_project/javascript.png"


export const projects = [
  {
    id: 1,
    status: "Concluído",
    title: "Monitora Saúde",
    description:
      "Sistema Web para monitoramento e avaliação de indicadores de saúde e processos.",
    techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],
    projectUrl: "https://monitora.saude.ma.gov.br/",
    githubUrl: "#",
    image: p1,
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
  // {
  //   id: 3,
  //   status: "Em desenvolvimento",
  //   title: "RENAVEH",
  //   description:
  //     "Sistema web para cadastro de pacientes e gestão de notificações hospitalares.",
  //   techs: [
  //     { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
  //     { name: "JavaScript", color: "#ffff00", textColor: "#000" },
  //   ],
  //   projectUrl: "https://renaveh.saude.ma.gov.br/",
  //   githubUrl: "#",
  //   image: p3,
  // },
  // {
  //   id: 4,
  //   status: "Em desenvolvimento",
  //   title: "CadServ",
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