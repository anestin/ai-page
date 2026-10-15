
// Add missing React import for React.ReactNode
import React from 'react';

export interface Module {
  id: number;
  title: string;
  items: string[];
  activity: string;
  image: string;
  description?: string;
  subItems?: string[];
}

export interface CurriculumPart {
  id: string;
  title: string;
  modules: Module[];
}

export interface Bonus {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
}