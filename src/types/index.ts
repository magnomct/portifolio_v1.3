import type { ReactNode } from 'react';

export interface HeroStat {
  num: string;
  label: string;
}

export interface ProblemSolution {
  title: string;
  arrow: string;
  solution: string;
  accentColor?: 'amber' | 'teal';
}

export interface ProjectStep {
  num: string;
  title: string;
  description: string;
}

export interface CloudPlatform {
  title: string;
  description: string;
  highlight?: string;
  descriptionAfter?: string;
}

export interface DevOpsCategory {
  title: string;
  tags: string[];
}

export interface AIDifferentiatorStat {
  num: string;
  label: string;
}

export interface Certification {
  status: 'issued' | 'preparing' | 'in-progress';
  title: string;
  issuer: string;
  details: string;
}

export interface AcademicBackground {
  degree: string;
  institution: string;
  year: number;
}

export interface TimelineItem {
  count: number;
  height: string;
  year: string;
  highlight?: boolean;
}

export interface SocialLink {
  platform: string;
  handle: string;
  description: string;
}

export interface ContactInfo {
  label: string;
  value: string;
}

export interface SlideData {
  id: string;
  part: string;
  title: string;
  kicker: string;
  content: ReactNode;
}