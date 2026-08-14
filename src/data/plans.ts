export interface Plan {
  id: string;
  name: string;
  description: string;
  employees: string;
  price: number;
  icon: string;
  popular?: boolean;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: 'single',
    name: 'Single',
    description: 'Pentru specialisti care lucreaza singuri.',
    employees: '1 angajat (tu)',
    price: 100,
    icon: 'solar:user-circle-linear',
    features: [
      '1 angajat — tu esti managerul si specialistul',
      'Fara calendar de echipa de coordonat',
      'Programari nelimitate in aplicatie si pe web',
      'Fane AI pe WhatsApp, inclus',
      'Notificari automate (remindere, anulare, reprogramare)',
      'Istoric clienti, servicii nelimitate si rapoarte financiare',
    ],
  },
  {
    id: 'medium',
    name: 'Medium',
    description: 'Pentru saloane cu o echipa mica.',
    employees: '2-5 angajati',
    price: 500,
    icon: 'solar:users-group-two-rounded-linear',
    popular: true,
    features: [
      '2-5 angajati, calendar comun',
      'Managerul vede programari, venituri si pauze pe toata echipa',
      'Programari nelimitate in aplicatie si pe web',
      'Fane AI pe WhatsApp, inclus',
      'Notificari automate (remindere, anulare, reprogramare)',
      'Istoric clienti, servicii nelimitate si rapoarte financiare',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Pentru saloane cu volum mare.',
    employees: '5+ angajati',
    price: 1000,
    icon: 'solar:city-linear',
    features: [
      '5+ angajati, potrivit echipelor extinse',
      'Rapoarte pe salon, angajat si perioada, la volum mare',
      'Programari nelimitate in aplicatie si pe web',
      'Fane AI pe WhatsApp, inclus',
      'Notificari automate (remindere, anulare, reprogramare)',
      'Istoric clienti, servicii nelimitate si rapoarte financiare',
    ],
  },
];

export type PlanComparisonValue = string | boolean;

export interface PlanComparisonRow {
  label: string;
  single: PlanComparisonValue;
  medium: PlanComparisonValue;
  enterprise: PlanComparisonValue;
}

export const planComparisonRows: PlanComparisonRow[] = [
  {
    label: 'Pret lunar',
    single: '100 RON',
    medium: '500 RON',
    enterprise: '1000 RON',
  },
  {
    label: 'Angajati',
    single: '1 (tu)',
    medium: '2–5',
    enterprise: '5+',
  },
  {
    label: 'Programari nelimitate',
    single: true,
    medium: true,
    enterprise: true,
  },
  {
    label: 'Fane AI pe WhatsApp',
    single: true,
    medium: true,
    enterprise: true,
  },
  {
    label: 'Notificari in aplicatie',
    single: true,
    medium: true,
    enterprise: true,
  },
  {
    label: 'Calendar comun de echipa',
    single: false,
    medium: true,
    enterprise: true,
  },
  {
    label: 'Rapoarte pe echipa extinsa',
    single: false,
    medium: false,
    enterprise: true,
  },
];

export const billingQuestions = [
  {
    id: 'trial',
    question: 'Pot testa IziBook inainte sa platesc?',
    answer:
      'Da. Proba gratuita dureaza 10 zile si ofera acces la tot sistemul: programari, clienti, echipa, rapoarte si Fane AI. Nu cerem card la inregistrare. Daca nu continua, contul se opreste la finalul perioadei, fara factura.',
  },
  {
    id: 'change',
    question: 'Pot schimba sau opri abonamentul?',
    answer:
      'Da. Poti trece de la Single la Medium sau Enterprise, sau invers, oricand, in functie de numarul de angajati. Poti opri abonamentul fara perioada minima. Schimbarea se aplica din ciclul de facturare urmator, in RON, lunar.',
  },
  {
    id: 'hidden',
    question: 'Exista costuri pe langa abonament?',
    answer:
      'Nu. Pretul afisat este lunar, in RON, si acopera programari nelimitate, Fane AI, notificari si rapoarte, in limita de angajati a planului. Nu taxam per programare sau per client. Configurarea initiala este inclusa, cu o discutie de onboarding daca ai nevoie.',
  },
] as const;
