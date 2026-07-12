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
    id: 'small',
    name: 'Small',
    description: 'Pana la 5 angajati.',
    price: 300,
    icon: 'solar:users-group-two-rounded-linear',
    features: [
      'Pana la 5 angajati',
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
    description: 'Pana la 10 angajati.',
    price: 800,
    icon: 'solar:shop-linear',
    popular: true,
    features: [
      'Pana la 10 angajati',
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
    description: 'Angajati nelimitati.',
    price: 1500,
    icon: 'solar:city-linear',
    features: [
      'Angajati nelimitati',
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
