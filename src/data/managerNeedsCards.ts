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
  imageAlt: string;
  imageTitle: string;
  secondaryImage?: ImageMetadata;
  layout: 'tall' | 'wide' | 'compact';
  theme: 'primary' | 'dark' | 'green' | 'neutral' | 'warm' | 'sky';
}

export const managerNeedsCards: ManagerNeedsCard[] = [
  {
    id: 'ai-booking',
    title: 'Programari cu Fane AI',
    subtitle:
      'Clienti mai fericiti, programari mai rapide si mai simple direct in WhatsApp exact cum ar comunica cu un angajat.',
    image: aiWhatsapp,
    imageAlt:
      'Conversatie WhatsApp cu Fane AI pentru programari la salon',
    imageTitle: 'Programari cu Fane AI pe WhatsApp',
    layout: 'tall',
    theme: 'neutral',
  },
  {
    id: 'team',
    title: 'Gestionare echipa',
    subtitle:
      'Monitorizeaza performanta si activitatea echipei in timp real. Programari, venituri, pauze, concedii si multe altele.',
    image: managerMemberSchedule,
    imageAlt:
      'Calendar IziBook cu programul echipei si programarile salonului',
    imageTitle: 'Gestionare echipa in IziBook',
    layout: 'wide',
    theme: 'neutral',
  },
  {
    id: 'finance',
    title: 'Gestiune financiara',
    subtitle:
      'Totul automatizat. Vezi exact toate cheltuielile si veniturile salonului in timp real. Indici de performanta si analize avansate, fara exceluri, fara calcule manuale.',
    image: mockupManagerReportsSummary,
    imageAlt:
      'Raport financiar IziBook cu venituri, cheltuieli si profitul salonului',
    imageTitle: 'Gestiune financiara IziBook',
    layout: 'compact',
    theme: 'neutral',
  },
  {
    id: 'analytics',
    title: 'Statistici live',
    subtitle:
      'Monitorizeaza in orice moment progresul afacerii tale in timp real. Venituri, cheltuieli, profit, clienti, programari, angajati, servicii, produse, si multe altele.',
    image: managerHomeIncome,
    imageAlt:
      'Dashboard IziBook cu statistici live: venituri, clienti si programari',
    imageTitle: 'Statistici live IziBook',
    layout: 'compact',
    theme: 'neutral',
  },
];
