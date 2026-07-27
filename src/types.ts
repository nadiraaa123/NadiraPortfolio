export type ProjectCategory = 'All' | 'Data Analyst' | 'Data Science' | 'Web Dev' | 'UI/UX Design' | 'Business Analytics';

export interface Metric {
  label: string;
  value: string;
  change?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Data Analysis' | 'Data Science' | 'Web Dev' | 'UI/UX Design' | 'Business & System Analysis' | string;
  tags: string[];
  description: string;
  fullStory?: string;
  image: string;
  metrics?: Metric[];
  keyInsights?: string[];
  toolsUsed: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  chartData?: { name: string; value: number; benchmark?: number }[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  companyLogo?: string;
  period: string;
  type: string; // e.g. "Full-time", "Internship", "Freelance"
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa: string;
  honors?: string;
  description: string;
  relevantCoursework: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  badgeColor: string;
  verifyUrl?: string;
  certificatePdfUrl?: string;
  certificateImageUrl?: string;
  summary?: string;
}

export interface OrganizationItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  keyContributions: string[];
  images?: string[];
  type?: string;
  location?: string;
}

export interface TechSkillCategory {
  title: string;
  icon: string;
  accentColor: string;
  skills: string[];
}
