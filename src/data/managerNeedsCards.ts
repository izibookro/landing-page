import type { ImageMetadata } from 'astro';
import aiWhatsapp from '../assets/mockups/ai-whatsapp.png';
import managerHomeIncome from '../assets/mockups/manager-home-income.png';
import managerMemberSchedule from '../assets/mockups/manager-member-schedule.png';
import mockupManagerReportsSummary from '../assets/mockups/manager-reports-summary.png';

export interface ManagerNeedsCard {
  id: string;
  title: string;
  subtitle: string;
  image: ImageMetadata;
  secondaryImage?: ImageMetadata;
  layout: 'tall' | 'wide' | 'compact';
  theme: 'primary' | 'dark' | 'green' | 'neutral' | 'warm' | 'sky';
}

export const managerNeedsCards: ManagerNeedsCard[] = [
  {
    id: 'ai-booking',
    title: 'Programări cu Fane AI',
    subtitle:
      'Clienti mai fericiti, programari mai rapide și mai simple direct in Whatsapp exact cum ar comunica cu un stilist.',
    image: aiWhatsapp,
    layout: 'tall',
    theme: 'neutral',
  },
  {
    id: 'team',
    title: 'Gestionare echipă',
    subtitle: 'Urmărește performanța si activitateaechipei în timp real.',
    image: managerMemberSchedule,
    layout: 'wide',
    theme: 'neutral',
  },
  {
    id: 'finance',
    title: 'Gestiune financiară',
    subtitle:
      'Totul automatizat. Vezi exact toate cheltuielile si veniturile salonului în timp real. Indici de performanta si analize avansate',
    image: mockupManagerReportsSummary,
    layout: 'compact',
    theme: 'neutral',
  },
  {
    id: 'analytics',
    title: 'Statistici live',
    subtitle:
      'Monitorizează performanța echipei și a serviciilor dintr-o singură privire.',
    image: managerHomeIncome,
    layout: 'compact',
    theme: 'neutral',
  },
];
