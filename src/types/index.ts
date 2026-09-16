export type Language = "pt" | "en";

export type Theme = "dark" | "light";

export interface Tech {
  name: string;
  color: string;
  textColor: string;
}

export interface Project {
  id: number;
  techs: Tech[];
  projectUrl: string;
  githubUrl: string;
  image: string;
  title?: string;
  description?: string;
  status?: string;
}

export interface ExperienceItem {
  id: number;
  side: "left" | "right";
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
  responsibilitiesTitle: string;
  responsibilities: string[];
  techTitle: string;
  techs?: string[];
}

export interface FormationItem {
  id: number;
  side: "left" | "right";
  status: string;
  course: string;
  institution: string;
  date: string;
  location: string;
  cr: string;
  description: string;
  highlightsTitle: string;
  highlights: string[];
  disciplinesTitle: string;
  disciplines: string[];
  certificateImage: string;
}

export interface AboutProjectData {
  id: number;
  images: string[];
  imagesDescription?: string[];
  description?: string;
  features?: string[];
  duration?: string;
  team?: string;
  client?: string;
}
