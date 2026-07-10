import type { ImageMetadata } from 'astro';
import whyUsInnovation from '../assets/why-us/why-us-innovation.png';
import whyUsControl from '../assets/why-us/why-us-control.png';
import whyUsFidelity from '../assets/why-us/why-us-fidelity.png';
import whyUsDataProtection from '../assets/why-us/why-us-data-protection.png';
import aiWhatsapp from '../assets/mockups/ai-whatsapp.png';
import managerReports from '../assets/mockups/manager-reports-summary.png';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: ImageMetadata;
  href: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'fane-whatsapp',
    title: 'Cum Fane AI iti reduce timpul petrecut la telefon',
    category: 'Inovatie',
    date: '22 Mai 2025',
    readTime: '4 min de citit',
    image: aiWhatsapp,
    href: '#blog',
  },
  {
    id: 'rapoarte-automate',
    title: 'Ghid complet pentru rapoarte automate in salonul tau',
    category: 'Management',
    date: '18 Mai 2025',
    readTime: '6 min de citit',
    image: managerReports,
    href: '#blog',
  },
  {
    id: 'fidelizare-clienti',
    title: '5 strategii simple de fidelizare pentru clientii tai',
    category: 'Fidelizare',
    date: '12 Mai 2025',
    readTime: '5 min de citit',
    image: whyUsFidelity,
    href: '#blog',
  },
  {
    id: 'control-afacere',
    title: 'De ce managerii de top isi centralizeaza datele intr-o singura aplicatie',
    category: 'Control',
    date: '5 Mai 2025',
    readTime: '3 min de citit',
    image: whyUsControl,
    href: '#blog',
  },
  {
    id: 'protectia-datelor',
    title: 'Protectia datelor in salon: ce trebuie sa stii ca manager',
    category: 'Securitate',
    date: '28 Apr 2025',
    readTime: '4 min de citit',
    image: whyUsDataProtection,
    href: '#blog',
  },
  {
    id: 'tehnologie-salon',
    title: 'Cum tehnologia redefineste experienta clientilor in saloane',
    category: 'Inovatie',
    date: '20 Apr 2025',
    readTime: '5 min de citit',
    image: whyUsInnovation,
    href: '#blog',
  },
];
