export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  popular?: boolean;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: 'single',
    name: 'Single',
    description: 'Sunt doar eu.',
    price: 100,
    icon: 'solar:user-circle-linear',
    features: [
      'Programari online',
      'Calendar personal',
      'Notificari automate',
      'Gestionare clienti',
    ],
  },
  {
    id: 'small',
    name: 'Small',
    description: 'Intre 2-5 angajati.',
    price: 300,
    icon: 'solar:users-group-two-rounded-linear',
    features: [
      'Tot din Single',
      'Gestionare echipa mica',
      'Rapoarte lunare',
      'Statistici de baza',
      'Suport email',
    ],
  },
  {
    id: 'medium',
    name: 'Medium',
    description: 'Intre 6-10 angajati.',
    price: 800,
    icon: 'solar:shop-linear',
    popular: true,
    features: [
      'Tot din Small',
      'Statistici avansate',
      'Asistent AI inclus',
      'Rapoarte automate',
      'Suport prioritar',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Peste 10 angajati.',
    price: 1500,
    icon: 'solar:city-linear',
    features: [
      'Tot din Medium',
      'Conturi nelimitate',
      'Integrari personalizate',
      'Manager de cont dedicat',
      'Training pentru echipa',
    ],
  },
];
