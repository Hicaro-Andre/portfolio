export const getProjectImages = (projectFolder) => {
  // Busca todas as imagens na pasta do projeto
  const modules = import.meta.glob('../assets/projects/*/*.{png,jpg,jpeg,svg,webp,gif}', { 
    eager: true,
    import: 'default'
  });
  
  // Filtra as imagens do projeto específico e retorna os URLs
  return Object.keys(modules)
    .filter(path => path.includes(projectFolder))
    .map(path => modules[path]);
};