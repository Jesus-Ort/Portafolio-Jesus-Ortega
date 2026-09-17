/**
 * Definiciones de Tipos e Interfaces de TypeScript para el Portfolio de Jesús Ortega
 *
 * Este archivo centraliza los modelos de datos compartidos en toda la aplicación:
 * - Proyectos técnicos y de software
 * - Habilidades y competencias clasificadas
 * - Experiencia laboral y profesional
 * - Formularios de contacto y generación de leads
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: 'Full-Stack' | 'Frontend' | 'Cloud & Backend' | 'Open Source';
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  year?: string;
  metrics?: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    years: string;
    icon?: string;
  }[];
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface JobLeadSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  leadType: 'Full-time Role' | 'Contract / Consulting' | 'Technical Advisory' | 'Quick Question';
  timeline: string;
  budget?: string;
  message: string;
  submittedAt?: string;
  createdAt?: string;
  status?: 'Sent' | 'Delivered';
}

export type JobLead = JobLeadSubmission;
