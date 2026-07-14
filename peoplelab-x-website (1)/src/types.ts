export type Language = 'da' | 'en';

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  parameters: string[];
}

export interface Situation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  trigger: string;
  auditFocus: string[];
}
