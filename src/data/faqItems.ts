export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 'ce-este-izibook',
    question: 'Ce este IziBook?',
    answer:
      'IziBook este sistemul complet de management pentru saloane de înfrumusețare. Programări, clienți, echipă, încasări și rapoarte — totul într-un singur loc. Disponibil pe toate platformele: web, iOS, Android.',
  },
  {
    id: 'platforme',
    question: 'Pe ce platforme este disponibilă aplicația?',
    answer:
      'IziBook este disponibilă pe iOS, Android și web. La cerere se poate conecta sistemul direct pe site-ul tău personal.',
  },
  {
    id: 'doar-sistemul',
    question: 'Nu vreau aplicații, conturi, platforme, doar sistemul',
    answer:
      'Suntem foarte flexibili. Putem conecta sistemul direct pe site-ul tău personal. Clienții nu sunt nevoiți să vadă și alte saloane sau angajați, se pot programa fără cont, direct din site-ul tău. Pentru mai multe informații contactați-ne.',
  },
  {
    id: 'fane-ai',
    question: 'Cum funcționează asistentul AI Fane?',
    answer:
      'Fane AI oferă clienților exact experiența pe care o aveau înainte de tehnologie. Scrii mesaj pe WhatsApp și discuți cu Fane exact ca și cu un angajat. Avantajul este că Fane este 24/7 online și poate răspunde la orice întrebare. Este conectat la sistem și oferă datele actuale ale salonului în timp real precum: disponibilitate, servicii, angajați, prețuri și multe altele.',
  },
  {
    id: 'echipa',
    question: 'Pot gestiona mai mulți angajați în același cont?',
    answer:
      'Da. În funcție de pachetul ales, gestionezi toată echipa. Verifici în timp real programările, veniturile, cheltuielile, pauzele chiar și concediile angajaților. Controlul serviciilor se face din contul tău de manager.',
  },
  {
    id: 'date',
    question: 'Ce înseamnă control total asupra datelor mele?',
    answer:
      'Tu ești în controlul datelor tale! Poți șterge oricând datele contului tău, iar ca manager poți șterge chiar și istoricul programărilor, încasărilor, cheltuielilor fără a afecta clienții, serviciile sau angajații.',
  },
  {
    id: 'abonament',
    question: 'Pot schimba sau anula abonamentul oricând?',
    answer:
      'Da. Poți upgrada, downgrada sau opri abonamentul oricând în funcție de nevoile tale.',
  },
  {
    id: 'suport',
    question: 'Oferiți suport pentru configurarea inițială?',
    answer:
      'Da. Echipa noastră se ocupă de tot. Planificăm o discuție despre serviciile tale, cheltuieli și nevoile tale, apoi configurăm sistemul pentru tine.',
  },
  {
    id: 'demo',
    question: 'Pot testa aplicația înainte de a mă abona?',
    answer:
      'Da. Poți începe gratuit timp de 30 de zile, având acces la tot sistemul, fără a fi nevoie să plătești nimic.',
  },
  {
    id: 'programari-online',
    question: 'Cum se programează clienții?',
    answer:
      'Clienții se pot programa online direct din aplicația mobilă sau web, sau chiar din WhatsApp cu Fane AI — fără a fi nevoie să sune sau să trimită mesaje manuale. Dacă optezi pentru integrarea sistemului pe site-ul salonului tău, clienții se pot programa direct de pe site, fără a intra în aplicație sau a trimite mesaje.',
  },
  {
    id: 'notificari',
    question: 'Se trimit notificări automate clienților?',
    answer:
      'Da. Clienții primesc notificări automate în aplicație (remindere, anulare, reprogramare). De asemenea, ca angajat sau manager, ai posibilitatea de a trimite notificări personalizate clienților — pentru a anunța o reducere, un concediu ce urmează sau multe altele. Poți alege exact la ce clienți să trimiți notificarea.',
  },
  {
    id: 'rapoarte',
    question: 'Pot vedea rapoarte financiare în timp real?',
    answer:
      'Da. Ai acces la toată activitatea salonului. Poți verifica rapid situația zilei curente — programări, clienți, încasări, cheltuieli, profituri, activitate angajat — sau pentru o anumită perioadă de timp, pe tot salonul sau pentru un anumit angajat. De asemenea, primești și indici de performanță comparativ cu perioada precedentă. Exemplu: indici de performanță ai lunii curente comparativ cu luna precedentă.',
  },
  {
    id: 'servicii',
    question: 'Pot configura serviciile și prețurile salonului?',
    answer:
      'Da. Totul se poate configura din contul tău de manager: prețul serviciilor, asignarea serviciilor la angajați, setarea cheltuielilor cu serviciile, marja de profit per servicii.',
  },
  {
    id: 'calendar',
    question: 'Există calendar pentru întreaga echipă?',
    answer:
      'Da. Fiecare angajat are în profilul său un calendar propriu cu toată activitatea sa: programări, pauze, concedii.',
  },
  {
    id: 'clienti-istoric',
    question: 'Păstrez istoricul clienților?',
    answer:
      'Da. Fiecare client are profil cu istoric programări, servicii și stilist preferat, cât și suma încasată și numărul de programări efectuate.',
  },
  {
    id: 'migrare',
    question: 'Pot migra datele din alt sistem?',
    answer:
      'Da. Te putem ajuta să imporți clienți, servicii și programări din alte aplicații sau din registre existente.',
  },
  {
    id: 'multi-salon',
    question: 'Pot gestiona mai multe locații?',
    answer:
      'Momentan platforma este optimizată pentru un salon per cont, însă extinderile pentru locații multiple sunt în plan.',
  },
  {
    id: 'fidelizare',
    question: 'Există funcționalități de fidelizare a clienților?',
    answer:
      'Da. Primești predicții despre fiecare client precum: frecvența de vizită, abatere de la frecvență, recomandare contactare client prin notificare personalizată pentru revenire.',
  },
  {
    id: 'cont-angajat',
    question: 'Angajații au conturi separate?',
    answer:
      'Da. Fiecare angajat are acces doar la propriul calendar, programări și statistici, fără a expune datele sensibile ale salonului. Statisticile sunt calculate în funcție de veniturile angajatului, nu de prețul total al serviciilor.',
  },
];
