import { getProjectImages } from "../utils/projectImages";
import hans from "../assets/images_project/galery/p1/java.webp";
import p3 from "../assets/images_project/galery/p1/edf.png";

export type AboutProject = {
  id: number;
  images: string[];
};

export const aboutProjects: AboutProject[] = [
  { id: 1, images: getProjectImages("redenave") },
  { id: 2, images: [p3, hans, hans, p3, hans, hans] },
  { id: 3, images: [hans, hans, hans, hans, hans, hans] },
  { id: 4, images: [p3, p3, hans, p3, hans, p3] },
];