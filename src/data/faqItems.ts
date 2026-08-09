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
      'IziBook este sistemul complet de management pentru saloane de infrumusetare. Programari, clienti, echipa, incasari si rapoarte — totul intr-un singur loc. Disponibil pe toate platformele: web, iOS, Android.',
  },
  {
    id: 'platforme',
    question: 'Pe ce platforme este disponibila aplicatia?',
    answer:
      'IziBook este disponibila pe iOS, Android si web. La cerere se poate conecta sistemul direct pe site-ul tau personal.',
  },
  {
    id: 'doar-sistemul',
    question: 'Nu vreau aplicatii, conturi, platforme, doar sistemul',
    answer:
      'Suntem foarte flexibili. Putem conecta sistemul direct pe site-ul tau personal. Clientii nu sunt nevoiti sa vada si alte saloane sau angajati, se pot programa fara cont, direct din site-ul tau. Pentru mai multe informatii contactati-ne.',
  },
  {
    id: 'fane-ai',
    question: 'Cum functioneaza asistentul AI Fane?',
    answer:
      'Fane AI ofera clientilor exact experienta pe care o aveau inainte de tehnologie. Scrii mesaj pe WhatsApp si discuti cu Fane exact ca si cu un angajat. Avantajul este ca Fane este 24/7 online si poate raspunde la orice intrebare. Este conectat la sistem si ofera datele actuale ale salonului in timp real precum: disponibilitate, servicii, angajati, preturi si multe altele.',
  },
  {
    id: 'echipa',
    question: 'Pot gestiona mai multi angajati in acelasi cont?',
    answer:
      'Da. In functie de pachetul ales, gestionezi toata echipa. Verifici in timp real programarile, veniturile, cheltuielile, pauzele chiar si concediile angajatilor. Controlul serviciilor se face din contul tau de manager.',
  },
  {
    id: 'date',
    question: 'Ce inseamna control total asupra datelor mele?',
    answer:
      'Tu esti in controlul datelor tale! Poti sterge oricand datele contului tau, iar ca manager poti sterge chiar si istoricul programarilor, incasarilor, cheltuielilor fara a afecta clientii, serviciile sau angajatii.',
  },
  {
    id: 'abonament',
    question: 'Pot schimba sau anula abonamentul oricand?',
    answer:
      'Da. Poti upgrada, downgrada sau opri abonamentul oricand in functie de nevoile tale.',
  },
  {
    id: 'suport',
    question: 'Oferiti suport pentru configurarea initiala?',
    answer:
      'Da. Echipa noastra se ocupa de tot. Planificam o discutie despre serviciile tale, cheltuieli si nevoile tale, apoi configuram sistemul pentru tine.',
  },
  {
    id: 'demo',
    question: 'Pot testa aplicatia inainte de a ma abona?',
    answer:
      'Da. Poti incepe gratuit timp de 30 de zile, avand acces la tot sistemul, fara a fi nevoie sa platesti nimic.',
  },
  {
    id: 'programari-online',
    question: 'Cum se programeaza clientii?',
    answer:
      'Clientii se pot programa online direct din aplicatia mobila sau web, sau chiar din WhatsApp cu Fane AI — fara a fi nevoie sa sune sau sa trimita mesaje manuale. Daca optezi pentru integrarea sistemului pe site-ul salonului tau, clientii se pot programa direct de pe site, fara a intra in aplicatie sau a trimite mesaje.',
  },
  {
    id: 'notificari',
    question: 'Se trimit notificari automate clientilor?',
    answer:
      'Da. Clientii primesc notificari automate in aplicatie (remindere, anulare, reprogramare). De asemenea, ca angajat sau manager, ai posibilitatea de a trimite notificari personalizate clientilor — pentru a anunta o reducere, un concediu ce urmeaza sau multe altele. Poti alege exact la ce clienti sa trimiti notificarea.',
  },
  {
    id: 'rapoarte',
    question: 'Pot vedea rapoarte financiare in timp real?',
    answer:
      'Da. Ai acces la toata activitatea salonului. Poti verifica rapid situatia zilei curente — programari, clienti, incasari, cheltuieli, profituri, activitate angajat — sau pentru o anumita perioada de timp, pe tot salonul sau pentru un anumit angajat. De asemenea, primesti si indici de performanta comparativ cu perioada precedenta. Exemplu: indici de performanta ai lunii curente comparativ cu luna precedenta.',
  },
  {
    id: 'servicii',
    question: 'Pot configura serviciile si preturile salonului?',
    answer:
      'Da. Totul se poate configura din contul tau de manager: pretul serviciilor, asignarea serviciilor la angajati, setarea cheltuielilor cu serviciile, marja de profit per servicii.',
  },
  {
    id: 'calendar',
    question: 'Exista calendar pentru intreaga echipa?',
    answer:
      'Da. Fiecare angajat are in profilul sau un calendar propriu cu toata activitatea sa: programari, pauze, concedii.',
  },
  {
    id: 'clienti-istoric',
    question: 'Pastrez istoricul clientilor?',
    answer:
      'Da. Fiecare client are profil cu istoric programari, servicii si stilist preferat, cat si suma incasata si numarul de programari efectuate.',
  },
  {
    id: 'migrare',
    question: 'Pot migra datele din alt sistem?',
    answer:
      'Da. Te putem ajuta sa importi clienti, servicii si programari din alte aplicatii sau din registre existente.',
  },
  {
    id: 'multi-salon',
    question: 'Pot gestiona mai multe locatii?',
    answer:
      'Momentan platforma este optimizata pentru un salon per cont, insa extinderile pentru locatii multiple sunt in plan.',
  },
  {
    id: 'fidelizare',
    question: 'Exista functionalitati de fidelizare a clientilor?',
    answer:
      'Da. Primesti predictii despre fiecare client precum: frecventa de vizita, abatere de la frecventa, recomandare contactare client prin notificare personalizata pentru revenire.',
  },
  {
    id: 'cont-angajat',
    question: 'Angajatii au conturi separate?',
    answer:
      'Da. Fiecare angajat are acces doar la propriul calendar, programari si statistici, fara a expune datele sensibile ale salonului. Statisticile sunt calculate in functie de veniturile angajatului, nu de pretul total al serviciilor.',
  },
];
