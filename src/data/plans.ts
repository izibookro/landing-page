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
      '1 angajat (tu)',
      '3 profile incluse: Manager, Angajat, Client',
      'Programari nelimitate online direct din aplicatie mobile sau web',
      'Programari nelimitate pe Whatsapp cu Fane AI',
      'Notificari automate in aplicatie (remindere, anulare, reprogramare)',
      'Gestionare clientilor - istoric complet, preferinte, vechime',
      'Gestionare angajatilor - programari, venituri, cheltuieli, pauze, concedii',
      'Servicii nelimitate - adaugare servicii, adaugare cheltuieli cu serviciile',
      'Gestionarea financiara - incasari, venituri, profituri per salon, angajat, perioada',
    ],
  },
  {
    id: 'medium',
    name: 'Medium',
    description: '2-5 angajati.',
    price: 500,
    icon: 'solar:users-group-two-rounded-linear',
    popular: true,
    features: [
      '2-5 angajati',
      '3 profile incluse: Manager, Angajat, Client',
      'Programari nelimitate online direct din aplicatie mobile sau web',
      'Programari nelimitate pe Whatsapp cu Fane AI',
      'Notificari automate in aplicatie (remindere, anulare, reprogramare)',
      'Gestionare clientilor - istoric complet, preferinte, vechime',
      'Gestionare angajatilor - programari, venituri, cheltuieli, pauze, concedii',
      'Servicii nelimitate - adaugare servicii, adaugare cheltuieli cu serviciile',
      'Gestionarea financiara - incasari, venituri, profituri per salon, angajat, perioada',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'De la 5 angajati.',
    price: 1000,
    icon: 'solar:city-linear',
    features: [
      '5+ angajati',
      '3 profile incluse: Manager, Angajat, Client',
      'Programari nelimitate online direct din aplicatie mobile sau web',
      'Programari nelimitate pe Whatsapp cu Fane AI',
      'Notificari automate in aplicatie (remindere, anulare, reprogramare)',
      'Gestionare clientilor - istoric complet, preferinte, vechime',
      'Gestionare angajatilor - programari, venituri, cheltuieli, pauze, concedii',
      'Servicii nelimitate - adaugare servicii, adaugare cheltuieli cu serviciile',
      'Gestionarea financiara - incasari, venituri, profituri per salon, angajat, perioada',
    ],
  },
];
