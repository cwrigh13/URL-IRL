export interface CaseStudy {
  id: string;
  title: string;
  library: string;
  location: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  image: string;
  additionalImages?: string[];
  featured: boolean;
  fullDescription?: string;
  technicalDetails?: string;
  implementation?: string;
  outcomes?: string;
  lessonsLearned?: string;
  nextSteps?: string;
}

export type CaseStudyCategory = 
  | 'Multilingual Services'
  | 'Resource Management'
  | 'Catalog Management'
  | 'Patron Engagement'
  | 'Mobile Apps'
  | 'Automation'
  | 'Digital Archives'
  | 'Analytics'
  | 'All';

export interface CaseStudyFilters {
  category: CaseStudyCategory;
  searchTerm: string;
}

export interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
  filters: CaseStudyFilters;
  onFilterChange: (filters: CaseStudyFilters) => void;
}

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  stats?: {
    libraries: number;
    projects: number;
    satisfaction: number;
  };
}
