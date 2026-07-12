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
    id: 'programari',
    title: 'Profil Angajat',
    description:
      'Calendar inteligent pentru gestionarea veniturilor si programarilor.',
    src: mockupLeft,
  },
  {
    id: 'dashboard',
    title: 'Profil Manager',
    description:
      'Statistici, notificari si activitate — totul intr-o singura privire.',
    src: mockupCenter,
  },
  {
    id: 'clienti',
    title: 'Profil Client',
    description:
      'Programari si istoric complet, cautari rapide si rezervari online',
    src: mockupRight,
  },
];
