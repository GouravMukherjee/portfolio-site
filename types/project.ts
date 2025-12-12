export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  images?: string[];
  tags?: string[];
  technologies?: string[];
  category?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  startDate?: string;
  endDate?: string;
  client?: string;
  role?: string;
  teamSize?: number;
  highlights?: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  createdAt?: string;
  updatedAt?: string;
};

export type ProjectFilters = {
  featured?: boolean;
  category?: string;
  tag?: string;
  limit?: number;
  offset?: number;
};

export type ProjectMetadata = {
  totalProjects: number;
  featuredProjects: number;
  categories: string[];
  tags: string[];
};
