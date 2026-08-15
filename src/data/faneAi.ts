export interface FaneHowToStep {
  index: string;
  title: string;
  body: string;
}

export const faneHowToSteps: FaneHowToStep[] = [
  {
    index: '01',
    title: 'Clientul scrie pe WhatsApp',
    body: 'Trimite un mesaj ca la un angajat: vrea o tunsoare, intreaba de pret sau de locuri libere. Nu descarca o aplicatie si nu isi face cont. Fane raspunde in conversatie, in romana, la orice ora.',
  },
  {
    index: '02',
    title: 'Fane citeste calendarul salonului',
    body: 'Este conectat la IziBook. Vede angajatii, serviciile, preturile si intervalele libere in timp real. Nu inventeaza locuri. Daca Marius e ocupat, propune alt interval sau alt specialist, dupa regulile tale.',
  },
  {
    index: '03',
    title: 'Programarea intra in sistem',
    body: 'Cand clientul confirma, programarea apare in calendarul specialistului. Primeste reminder in aplicatie. Tu vezi aceeasi rezervare ca pe o programare facuta de la receptie sau din app.',
  },
];

export const faneHowTo = {
  name: 'Cum se programeaza la salon cu Fane AI pe WhatsApp',
  description:
    'Clientul scrie pe WhatsApp, Fane citeste calendarul IziBook si confirma programarea in sistem — fara telefon la receptie.',
} as const;
