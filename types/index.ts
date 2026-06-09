export interface Skill {
  name: string;
  level: number;
  badge?: string;
}

export interface Experience {
  id: number;
  company: string;
  title: string;
  location: string;
  period: string;
  duration: string;
  current: boolean;
  highlights: string[];
  tech: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  featured: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  abbr: string;
  color: string;
}

export interface UseCase {
  title: string;
  icon: string;
  description: string;
  tech: string[];
}

export interface RecruiterQA {
  question: string;
  answer: string;
}
