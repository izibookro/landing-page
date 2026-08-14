import type { ImageMetadata } from 'astro';
import whyUsControl from '../assets/why-us/why-us-control.png';
import whyUsDataProtection from '../assets/why-us/why-us-data-protection.png';
import whyUsFidelity from '../assets/why-us/why-us-fidelity.png';
import whyUsInnovation from '../assets/why-us/why-us-innovation.png';

export interface WhyUsTab {
  id: string;
  label: string;
  description: string;
  stat: string;
  statLabel: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const whyUsTabs: WhyUsTab[] = [
  {
    id: 'control',
    label: 'Control',
    description:
      'Tu detii Controlul total asupra afacerii tale. Gestioneaza programarile, echipa, incasarile, cheltuielile, si multe altele direct din buzunarul tau.',
    stat: '100%',
    statLabel: 'Control asupra afacerii tale',
    image: whyUsControl,
    imageAlt:
      'Manager de salon care urmareste programari, echipa si incasari din aplicatia IziBook',
  },
  {
    id: 'fidelizare',
    label: 'Fidelizare',
    description:
      'Oferind o experienta memorabila clientilor, ne concentram si pe mentinerea lor. Folosim cele mai noi tehnologii si practici pentru a creste veniturile afacerii tale din fidelizare clienti.',
    stat: '100%',
    statLabel: 'Focus pe fidelizare si retentie',
    image: whyUsFidelity,
    imageAlt:
      'Client loial al unui salon de infrumusetare, ilustrand fidelizarea cu IziBook',
  },
  {
    id: 'inovatie',
    label: 'Inovatie',
    description:
      'Adaugam constant instrumente noi pentru salonul tau — de la programari pe WhatsApp cu Fane AI, la functionalitati care iti simplifica munca de zi cu zi.',
    stat: 'AI',
    statLabel: 'Fane AI pe WhatsApp si actualizari continue ale platformei',
    image: whyUsInnovation,
    imageAlt:
      'Tehnologie si inovatie pentru saloane — instrumente moderne in IziBook',
  },
  {
    id: 'protectia-datelor',
    label: 'Siguranta',
    description:
      'Tu esti in controlul datelor tale! Poti sterge oricand tot istoricul programarilor, incasarilor, cheltuielilor sau chiar stergerea contului complet.',
    stat: '100%',
    statLabel: 'Control total asupra datelor',
    image: whyUsDataProtection,
    imageAlt:
      'Protectia datelor salonului — control asupra istoricului si stergerii din IziBook',
  },
];
