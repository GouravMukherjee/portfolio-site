export type Experience = {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  locationType?: 'remote' | 'onsite' | 'hybrid';
  logo?: string;
  website?: string;
  accomplishments?: string[];
  responsibilities?: string[];
  stack?: string[];
  technologies?: string[];
  current?: boolean;
};

export type ExperienceTimeline = {
  experiences: Experience[];
  totalYears: number;
  currentPosition?: Experience;
};
