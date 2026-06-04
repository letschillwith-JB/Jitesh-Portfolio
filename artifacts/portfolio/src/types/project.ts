export type ProjectFeature = {
  icon: string;
  title: string;
  description: string;
};

export type StackCategory = {
  category: string;
  items: string[];
};

export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: ProjectFeature[];
  stack: StackCategory[];
  chips: string[];
  status: string;
  featured: boolean;
  order: number;
  results: string[];
  lessonsLearned: string;
};