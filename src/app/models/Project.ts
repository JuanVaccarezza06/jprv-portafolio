export interface ProjectTranslations {
  title: string;
  intro: string;
  story: string[];
  mainFeatures: string[];
}

export default interface Project {
  id: string;
  translations: {
    es: ProjectTranslations;
    en: ProjectTranslations;
  };

  // Language-agnostic fields
  stack: string[];
  technologies: string[];
  code: string;
  codeFilename: string;
  codeLanguage: string;
  githubLink?: string;
  demoLink?: string;
  videoUrl?: string;
}
