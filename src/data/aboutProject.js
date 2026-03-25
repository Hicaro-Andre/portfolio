import { getProjectImages } from "/src/utils/projectImages";

import hans from "../assets/images_project/galery/p1/java.webp";
import p3 from "../assets/images_project/galery/p1/edf.png";

export const aboutProjects = [
  {
    id: 1,

    description:
      "O Monitora Saúde é uma plataforma web desenvolvida para a Secretaria de Estado da Saúde do Maranhão, com o objetivo de modernizar e centralizar o monitoramento de indicadores de saúde pública.",

    status: "Concluído",

    duration: "2 meses",
    team: "3 desenvolvedores",
    client: "Rede Nave",

    features: [
      "Dashboards interativos com indicadores em tempo real",
      "Gestão de usuários com diferentes níveis de acesso",
      "Interface responsiva para dispositivos móveis",
    ],

    images: getProjectImages("redenave"),
  },
  {
    id: 2,

    description:
      "A Monitora Saúde é uma plataforma web desenvolvida para a Secretaria de Estado da Saúde do Maranhão, com o objetivo de modernizar e centralizar o monitoramento de indicadores de saúde pública.",

    status: "Em andamento",

    duration: "4 meses",
    team: "4 desenvolvedores",
    client: "Secretaria de Saúde",

    features: [
      "Dashboards interativos com indicadores em tempo real",
      "Gestão de usuários com diferentes níveis de acesso",
      "Interface responsiva para dispositivos móveis",
    ],

    images: [p3, hans, hans, p3, hans, hans],
  },
  {
    id: 3,

    description:
      "D Monitora Saúde é uma plataforma web desenvolvida para a Secretaria de Estado da Saúde do Maranhão, com o objetivo de modernizar e centralizar o monitoramento de indicadores de saúde pública.",

    status: "Em andamento",

    duration: "4 meses",
    team: "4 desenvolvedores",
    client: "Secretaria de Saúde",

    features: [
      "Dashboards interativos com indicadores em tempo real",
      "Gestão de usuários com diferentes níveis de acesso",
      "Interface responsiva para dispositivos móveis",
    ],

    images: [hans, hans, hans, hans, hans, hans],
  },
  {
    id: 4,

    description:
      "O Monitora Saúde é uma plataforma web desenvolvida para a Secretaria de Estado da Saúde do Maranhão, com o objetivo de modernizar e centralizar o monitoramento de indicadores de saúde pública.",

    status: "Em andamento",

    duration: "4 meses",
    team: "4 desenvolvedores",
    client: "Secretaria de Saúde",

    features: [
      "Dashboards interativos com indicadores em tempo real",
      "Gestão de usuários com diferentes níveis de acesso",
      "Interface responsiva para dispositivos móveis",
    ],

    images: [p3, p3, hans, p3, hans, p3],
  },
  {
    id: 5,

    description:
      "O Monitora Saúde é uma plataforma web desenvolvida para a Secretaria de Estado da Saúde do Maranhão, com o objetivo de modernizar e centralizar o monitoramento de indicadores de saúde pública.",

    status: "Em andamento",

    duration: "4 meses",
    team: "4 desenvolvedores",
    client: "Secretaria de Saúde",

    features: [
      "Dashboards interativos com indicadores em tempo real",
      "Gestão de usuários com diferentes níveis de acesso",
      "Interface responsiva para dispositivos móveis",
    ],

    images: [hans, hans, hans, hans, hans, hans],
  },
];
