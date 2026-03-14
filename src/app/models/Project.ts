export default interface Project {
  id: string;
  title: string;
  intro: string;
  story: string[];
  stack: string[];           
  technologies: string[];    
  mainFeatures: string[];    
  code: string;
  codeFilename: string;      
  codeLanguage: string;      
  githubLink?: string;       
  demoLink?: string;         
  videoUrl?: string;         
}