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
      'Control total asupra afacerii tale. Gestioneaza programarile, echipa, incasarile, cheltuielile si multe altele, direct din buzunarul tau.',
    stat: '100%',
    statLabel: 'Control asupra afacerii',
    image: whyUsControl,
  },
  {
    id: 'fidelizare',
    label: 'Fidelizare',
    description:
      'Daca clientii sunt fericitii si afacerea ta prospera. Cu Izibook, totul este rapid, simplu si eficient si pentru clienti. Statistici de fidelizare, notificari si sisteme de retentie pentru cresterea si mentinerea fidelizarii clientilor.',
    stat: '30%',
    statLabel: 'Cresterea veniturilor din retentie clienti',
    image: whyUsFidelity,
  },
  {
    id: 'inovatie',
    label: 'Inovatie',
    description:
      'Investim constant in tehnologii si practici noi. Analizam mereu moduri noi de a fi mai eficienti si mai productive.',
    stat: '50%',
    statLabel: 'Investitii constante in tehnologii noi',
    image: whyUsInnovation,
  },
  {
    id: 'protectia-datelor',
    label: 'Protectia datelor',
    description:
      'Tu esti in controlul datelor tale! Cu Izibook, ai posibilitatea de ati sterge oricand tot istoricul programarilor, incasarilor, cheltuielilior sau chiar stergerea contului complet.',
    stat: '100%',
    statLabel: 'Control total asupra datelor',
    image: whyUsDataProtection,
  },
];
