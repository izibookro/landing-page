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
  },
  {
    id: 'fidelizare',
    label: 'Fidelizare',
    description:
      'Oferind o experienta memorabila clientilor, ne concetram si pe mentinerea lor. Folosim cele mai noi tehnologii si practici pentru a creste veniturile afacerii tale din fidelizare clienti.',
    stat: '30%',
    statLabel: 'Cresterea veniturilor din fidelizarea clientilor',
    image: whyUsFidelity,
  },
  {
    id: 'inovatie',
    label: 'Inovatie',
    description:
      'Investim constant in tehnologii si practici noi. Analizam mereu moduri noi de a fi mai eficienti si mai productivi in afacerea ta.',
    stat: '50%',
    statLabel: 'Investitii constante in practici noi pentru afacerea ta',
    image: whyUsInnovation,
  },
  {
    id: 'protectia-datelor',
    label: 'Protectia datelor',
    description:
      'Tu esti in controlul datelor tale! Poti sterge oricand tot istoricul programarilor, incasarilor, cheltuielilior sau chiar stergerea contului complet.',
    stat: '100%',
    statLabel: 'Control total asupra datelor',
    image: whyUsDataProtection,
  },
];
