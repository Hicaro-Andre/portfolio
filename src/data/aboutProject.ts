import { getProjectImages } from "../utils/projectImages";


export type AboutProject = {
  id: number;
  images: string[];
};

export const aboutProjects: AboutProject[] = [
  { id: 1, images: getProjectImages("redenave") },
  { id: 2, images: getProjectImages("hangtabosa") },

];