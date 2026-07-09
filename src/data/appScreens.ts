import type { ImageMetadata } from 'astro';
import mockupCenter from '../assets/mockups/mockup-1.png';
import mockupLeft from '../assets/mockups/mockup-2.png';
import mockupRight from '../assets/mockups/mockup-3.png';

export interface AppScreen {
  id: string;
  title: string;
  description: string;
  src: ImageMetadata;
}

export const appScreens: AppScreen[] = [
  {
    id: 'dashboard',
    title: 'Panou de control',
    description: 'Statistici, incasari si activitate — totul intr-o singura privire.',
    src: mockupCenter,
  },
  {
    id: 'programari',
    title: 'Programari',
    description: 'Calendar inteligent pentru gestionarea rezervarilor zilnice.',
    src: mockupLeft,
  },
  {
    id: 'clienti',
    title: 'Clienti',
    description: 'Istoric complet, preferinte si notite pentru fiecare client.',
    src: mockupRight,
  },
  {
    id: 'incasari',
    title: 'Incasari',
    description: 'Urmareste veniturile si performanta salonului in timp real.',
    src: mockupCenter,
  },
  {
    id: 'echipa',
    title: 'Echipa',
    description: 'Coordoneaza angajatii, turele si serviciile fara efort.',
    src: mockupLeft,
  },
];
