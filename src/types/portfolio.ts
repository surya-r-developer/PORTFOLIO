export interface Profile {
  name: string;
  primaryTitle: string;
  heroIntro: string;
  aboutBio: string;
  college: string;
  degree: string;
  expectedGraduation: string;
  location: string;
  focusArea: string;
  careerGoal: string;
  interests: string[];
  profilePhotoUrl: string;
  resumeUrl: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  instagram: string;
  leetcode?: string;
  locationRepresentation: string;
}

export interface Skill {
  id: string;
  name: string;
  proficiency: number; // 0 - 100
  levelText: string; // e.g. "Intermediate", "Foundational", "Proficient"
  category: 'Languages' | 'Web Technologies' | 'Tools & Version Control' | 'Design & Principles';
  icon: string;
  description: string;
  featured: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  category: string;
  featured: boolean;
  date: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  certificateImage?: string;
  verificationUrl?: string;
  description: string;
  featured: boolean;
}

export interface EducationInfo {
  degree: string;
  college: string;
  location: string;
  expectedGraduation: string;
  highlights: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage?: string;
  updated_at: string;
  isFeatured?: boolean;
}

export interface PortfolioData {
  profile: Profile;
  contact: ContactInfo;
  skills: Skill[];
  projects: Project[];
  achievements: Achievement[];
  certifications: Certification[];
  education: EducationInfo;
  featuredGitHubRepos: string[]; // Repo names
  siteSettings: {
    heroText: string;
    footerText: string;
    showStatusDot: boolean;
    statusText: string;
  };
}
