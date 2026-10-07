import type { Skill } from '@/entities/skill/@x/question';
import type { Specialization } from '@/entities/specialization/@x/question';
import type { Creator } from '@/shared/model';

export interface Question {
  title: string;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  slug: string;
  id: number;
  keywords: string[];
  questionSpecializations: Specialization[];
  questionSkills: Skill[];
  complexity: number;
  rate: number;
  createdBy?: Creator;
}

export interface QuestionFilterParams {
  page?: number;
  limit?: number;
  titleOrDescription?: string;
  specializationSlug?: string;
  skills?: number[];
  complexity?: string[];
  rate?: number[];
}
