export interface Project {
  title: string;
  description: string;
  techStack: string[];
  images: string[] | any[];
  link: string;
  dataAiHint: string;
  company?: string;
  designerName?: string;
  designerUrl?: string;
}

export interface Role {
  title: string;
  period: string;
  description: string;
}

export interface Experience {
  company: string;
  companyUrl?: string;
  location: string;
  roles: Role[];
  workType?: 'Remote' | 'On-site' | 'Hybrid';
}
