export interface Recipe {
  id: string;
  title: string;
  category: 'Base' | 'Funcional' | 'Premium' | 'Festiva';
  description: string;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    kcal: number;
    protein?: string;
    fat?: string;
    fiber?: string;
  };
  notes?: string;
  conservation?: string;
}

export interface ContentSection {
  title: string;
  content?: string; // Markdown-like or HTML
  table?: {
    headers: string[];
    rows: string[][];
  };
  list?: string[];
  type?: 'text' | 'table' | 'list' | 'warning' | 'tip' | 'scientific';
}

export interface Module {
  id: string;
  title: string;
  subtitle?: string;
  sections?: ContentSection[];
  recipes?: Recipe[];
  videoScript?: {
    title: string;
    duration: string;
    scenes: { time: string; visual: string; audio: string }[];
  };
  downloads?: { name: string; type: 'pdf' | 'template' }[];
}

export enum AppView {
  READER = 'READER',
  AI_ADVISOR = 'AI_ADVISOR',
  RECIPES = 'RECIPES',
  RESOURCES = 'RESOURCES'
}