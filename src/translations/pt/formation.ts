
import crSoftex from "/src/assets/certificado/cv-softex.png";
import crFama from "/src/assets/certificado/cr-fama.jpeg";

const formation = {
  title: "Formação",
  items: [
    {
      id: 1,
      side: "left",
      status: "Concluído",
      course: "Front-End React",
      institution: "Bolsa Futuro Digital - SOFTEX",
      date: "2025 - Presencial",
      location: "São Luís - MA",
      cr: "CR: 9.9/10.0",
      description:
        "Formação intensiva em desenvolvimento front-end pelo programa Bolsa Futuro Digital (SOFTEX), com foco na criação de interfaces modernas e aplicações web com React. Durante o curso, desenvolvi habilidades em componentização, consumo de APIs e boas práticas de desenvolvimento, com foco em performance, organização e experiência do usuário.",

      highlightsTitle: "Destaques",
      highlights: [
        "Participação como bolsista no programa SOFTEX, voltado à formação de talentos em tecnologia",
        "Desenvolvimento de aplicações front-end completas utilizando React",
        "Criação de interfaces responsivas e reutilizáveis com foco em UX/UI",
        "Integração com APIs REST e manipulação de dados no front-end",
        "Aplicação de boas práticas como componentização, organização de código e versionamento"
      ],

      disciplinesTitle: "Principais Disciplinas",
      disciplines: [
        "Fundamentos de React",
        "JavaScript Avançado",
        "Consumo de APIs REST",
        "Componentização e Gerenciamento de Estado",
        "HTML, CSS e Responsividade"
      ],

      certificateTitle: "Certificado Acadêmico",
      certificateImage: crSoftex,
    },

    {
      id: 2,
      side: "right",
      status: "Concluído",
      course: "Bacharelado em Ciências da Computação",
      institution: "Faculdade Pitágoras - FAMA",
      date: "2015 a 2019 - Presencial",
      location: "São Luís - MA",
      cr: "CR: 8.32/10.0",
      description:
        "Formação sólida em Ciência da Computação, com foco em desenvolvimento de software, algoritmos e estruturas de dados. Ao longo da graduação, desenvolvi competências em modelagem de sistemas, banco de dados e engenharia de software, aplicando raciocínio lógico na construção de soluções eficientes e escaláveis.",

      highlightsTitle: "Destaques",
      highlights: [
        "Desenvolvimento de projetos acadêmicos completos, desde a modelagem até a implementação",
        "Aplicação prática de estruturas de dados e algoritmos na resolução de problemas",
        "Experiência com modelagem e programação de banco de dados",
        "Participação em disciplinas práticas voltadas à engenharia de software e desenvolvimento de sistemas",
        "Desenvolvimento de raciocínio lógico e analítico aplicado à computação"
      ],

      disciplinesTitle: "Principais Disciplinas",
      disciplines: [
        "Algoritmos e Estruturas de Dados",
        "Programação Orientada a Objetos",
        "Banco de Dados e Modelagem de Dados",
        "Engenharia de Software",
        "Sistemas Operacionais"
      ],

      certificateTitle: "Certificado Acadêmico",
      certificateImage: crFama,
    }
  ],
};

export default formation;