/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Coordinate {
  x: number; // percentage width 0-100
  y: number; // percentage height 0-100
}

export interface Milestone {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  islandName: string;
  icon: string; // lucide icon name
  coordinates: Coordinate;
  date: string;
  details: string[];
}

export interface Challenge {
  id: string;
  title: string;
  islandName: string;
  description: string;
  icon: string;
  techStack: string[];
  color: string;
  details: string[];
}

export interface Winner {
  id: string;
  year: string;
  rank: string;
  teamName: string;
  project: string;
  prize: string;
  description: string;
  avatar: string;
}

export interface Organizer {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'galleon' | 'frigate' | 'sloop'; // Gold, Silver, Bronze
  logo: string; // SVG or fallback
  website: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Highlight {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}
