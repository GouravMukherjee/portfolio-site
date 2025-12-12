export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type Skill = {
  id?: string;
  name: string;
  category: string;
  level?: number; // 1-5 or percentage
  skillLevel?: SkillLevel;
  icon?: string;
  description?: string;
  yearsOfExperience?: number;
  lastUsed?: string;
  certifications?: string[];
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
  icon?: string;
  description?: string;
};

export type SkillSet = {
  categories: SkillCategory[];
  totalSkills: number;
  primarySkills: string[];
};
