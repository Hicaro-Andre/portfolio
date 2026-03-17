import monitora from "../assets/images/portifolio_image/APIs.png"
import hans from "../assets/images/portifolio_image/REDE NAVE.png"

export const projects = [
  {
    id: 1,
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

    image: monitora,
  },
  {
    id: 2,
    title: "App Hans+",
    description:
      "Plataforma com versão web e app Android que apoia o tratamento da hanseníase.",
    techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
    ],
    projectUrl: "https://hansmais.netlify.app/",
    githubUrl: "#",

     image: hans,
  },
  {
    id: 3,
    title: "RENAVEH",
    description:
      "Sistema web para cadastro de pacientes e gestão de notificações hospitalares.",
    techs: [
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],
    projectUrl: "https://renaveh.saude.ma.gov.br/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "CadServ",
    description: "Sistema de cadastro e gestão de servidores.",
    techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Rede Nave",
    description: "Sistema de cadastro e gestão de servidores.",
    techs: [
      { name: "Laravel", color: "#ff0000", textColor: "#fff" },
      { name: "PostgreSQL", color: "#0033FF", textColor: "#fff" },
      { name: "JavaScript", color: "#ffff00", textColor: "#000" },
    ],
    projectUrl: "#",
    githubUrl: "#",
  },
];