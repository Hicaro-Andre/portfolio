import React from 'react';
import '../styles/Skills.css';

// Importando todas as imagens
import reactDark from '../assets/images/skills_image/react-dark.svg';
import nodeDark from '../assets/images/skills_image/node-dark.svg';
import jsDark from '../assets/images/skills_image/javascript-dark.svg';
import tsDark from '../assets/images/skills_image/typescript-dark.svg';
import gitDark from '../assets/images/skills_image/git-dark.svg';
import htmlDark from '../assets/images/skills_image/html-dark.svg';
import cssDark from '../assets/images/skills_image/css-dark.svg';
import sassDark from '../assets/images/skills_image/sass-dark.svg';
import tailwindDark from '../assets/images/skills_image/tailwind-dark.svg';


const Skills = () => {
  const skills = [
    {
      id: 1,
      name: 'REACT',
      darkIcon: reactDark,
      description: 'React revoluciona a construção de interfaces com sua abordagem baseada em componentes. Rápido, modular e eficiente, é a escolha principal para aplicações modernas e responsivas.'
    },
    {
      id: 2,
      name: 'NODE',
      darkIcon: nodeDark,
      description: 'Node.js leva o JavaScript ao servidor, permitindo criar APIs e sistemas completos com alta performance. Ideal para aplicações em tempo real, como chats e plataformas de streaming.'
    },
    {
      id: 3,
      name: 'JAVASCRIPT',
      darkIcon: jsDark,
      description: 'JavaScript é a alma interativa da web. Ele permite a criação de interfaces dinâmicas, animações fluídas e funcionalidades inteligentes que elevam a experiência do usuário a outro nível.'
    },
    {
      id: 4,
      name: 'TYPESCRIPT',
      darkIcon: tsDark,
      description: 'TypeScript potencializa o JavaScript com tipagem estática, tornando o desenvolvimento mais seguro e escalável. Ideal para projetos robustos, oferece ferramentas poderosas para construir aplicações sólidas.'
    },
    {
      id: 5,
      name: 'GIT',
      darkIcon: gitDark,
      description: 'Git é a ferramenta essencial de versionamento, possibilitando rastrear mudanças e colaborar em projetos de forma segura e organizada. Fundamental para qualquer fluxo de trabalho de desenvolvimento.'
    },
    {
      id: 6,
      name: 'HTML',
      darkIcon: htmlDark,
      description: 'HTML é a espinha dorsal da web, estruturando o conteúdo de páginas de forma semântica e acessível. Com ele, criamos sites claros, organizados e otimizados para motores de busca e dispositivos variados.'
    },
    {
      id: 7,
      name: 'CSS',
      darkIcon: cssDark,
      description: 'CSS dá vida às páginas, transformando estruturas simples em experiências visuais impressionantes. Com estilos modernos e responsivos, personalizamos layouts para qualquer tela ou dispositivo.'
    },
    {
      id: 8,
      name: 'SASS',
      darkIcon: sassDark,
      description: 'Sass potencializa o CSS com recursos como variáveis, funções e mixins. Ele organiza e simplifica o código de estilos, tornando o desenvolvimento mais produtivo e a manutenção muito mais prática.'
    },
    {
      id: 9,
      name: 'TAILWIND',
      darkIcon: tailwindDark,
      description: 'Tailwind CSS acelera o desenvolvimento com uma abordagem utilitária de classes. Rápido, flexível e altamente customizável, permite criar interfaces responsivas e bonitas com menos esforço.'
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2>Habilidades</h2>
      <div className="skill__container">
        {skills.map((skill) => (
          <div key={skill.id} className="card__skills animated">
            <img
              className="icon-dark"
              src={skill.darkIcon}
              alt={skill.name.toLowerCase()}
            />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;