export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'AI & Mobile' | 'Real-Time & Cloud' | 'Community & Social' | 'Transit & Utilities';
  problem: string;
  solution: string;
  technologies: string[];
  github: string;
  demoUrl?: string;
  image: string;
  gallery: { title: string; image: string; description: string }[];
  videoUrl?: string;
  demoVideoUrl?: string;
  marketingVideoUrl?: string;
  featured: boolean;
  architecturalHighlights: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    tag?: string;
  }[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  employmentType: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  faculty: string;
  location: string;
  period: string;
  status: string;
  coursework: string[];
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  dateOrHours: string;
  status?: string;
  certificateId?: string;
  image: string;
  description: string;
  skillsAcquired: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  deliverables: string[];
  badge: string;
}
