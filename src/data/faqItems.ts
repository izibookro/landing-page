export interface FaqLink {
  href: string;
  label: string;
  title: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  link?: FaqLink;
}

export interface FaqCategory {
  id: string;
  title: string;
  headingFade: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'produs',
    title: 'Despre',
    headingFade: 'IziBook',
    items: [
      {
        id: 'ce-este-izibook',
        question: 'Ce este IziBook?',
        answer:
          'IziBook este software de management pentru saloane de infrumusetare din Romania. Intr-un singur sistem ai programari, clienti, echipa, incasari, rapoarte si Fane AI pe WhatsApp. Ruleaza pe web, iOS si Android. Se adreseaza managerilor si specialistilor; clientii se programeaza din aplicatie, de pe site-ul salonului sau pe WhatsApp.',
        link: {
          href: '/functionalitati',
          label: 'Vezi functionalitatile',
          title: 'Functionalitati IziBook pe trei profile',
        },
      },
      {
        id: 'platforme',
        question: 'Pe ce platforme este disponibila aplicatia?',
        answer:
          'IziBook este pe iOS, Android si web. Managerul lucreaza pe web (dashboard, calendar echipa, servicii, clienti, rapoarte) si in aplicatia mobila. Specialistul si clientul folosesc iOS sau Android. La cerere, rezervarea se pune si pe site-ul salonului, fara ca clientul sa isi faca cont.',
      },
      {
        id: 'doar-sistemul',
        question: 'Pot folosi doar sistemul, fara aplicatie pentru clienti?',
        answer:
          'Da. Putem conecta rezervarea pe site-ul tau. Clientii se programeaza acolo, fara cont IziBook si fara sa vada alte saloane. Calendarul, serviciile si disponibilitatea raman aceleasi ca in aplicatie. Pentru echipa, managerul si specialistii continua sa lucreze din IziBook. Detalii la cerere, din pagina de contact.',
        link: {
          href: '/contact',
          label: 'Contacteaza-ne',
          title: 'Contacteaza echipa IziBook',
        },
      },
      {
        id: 'limba-moneda',
        question: 'In ce limba si moneda functioneaza?',
        answer:
          'Produsul si site-ul sunt in romana. Preturile, rapoartele si serviciile sunt in RON. IziBook este facut pentru saloane din Romania, nu facturam in euro pe pagina de preturi. Contul, notificarile si Fane AI vorbesc cu clientul in romana.',
      },
      {
        id: 'trei-profile',
        question: 'Pot avea profil de manager, specialist si client pe acelasi cont?',
        answer:
          'Da. Un utilizator poate avea profil de client, iar daca lucreaza in salon si profil de specialist sau manager. Schimbi profilul din aplicatie, fara email-uri separate. Datele de login sunt aceleasi pe iOS, Android si, pentru manager, pe web.',
      },
      {
        id: 'login-google-apple',
        question: 'Pot intra cu Google sau Apple?',
        answer:
          'Da. Te poti inregistra si autentifica cu email, cu Google sau cu Apple, pe web si in aplicatia mobila. Dupa login alegi sau creezi profilul: manager, specialist sau client. Resetarea parolei e pe email, daca nu folosesti Google sau Apple.',
      },
      {
        id: 'alte-saloane-in-app',
        question: 'Clientii mei vad si alte saloane in aplicatie?',
        answer:
          'In aplicatia IziBook, da: clientul poate cauta saloane, specialisti si servicii, inclusiv in apropiere. Daca vrei ca ei sa vada doar salonul tau, conectam rezervarea pe site-ul tau: se programeaza acolo, fara cont si fara marketplace. Echipa continua sa lucreze din IziBook.',
        link: {
          href: '/contact',
          label: 'Intreaba de rezervare pe site',
          title: 'Contacteaza echipa IziBook',
        },
      },
    ],
  },
  {
    id: 'programari',
    title: 'Programari',
    headingFade: 'si Fane AI',
    items: [
      {
        id: 'programari-online',
        question: 'Cum se programeaza clientii?',
        answer:
          'Din aplicatia mobila, de pe site-ul salonului sau pe WhatsApp cu Fane AI. Nu e nevoie sa sune. In aplicatie aleg serviciul, specialistul si data, vad intervalele libere si confirma. De pe site se programeaza fara cont. Pe WhatsApp scriu un mesaj, iar Fane raspunde cu locuri si preturi din sistem.',
        link: {
          href: '/fane-ai',
          label: 'Cum functioneaza Fane',
          title: 'Fane AI — programari salon pe WhatsApp',
        },
      },
      {
        id: 'fane-ai',
        question: 'Cum functioneaza asistentul AI Fane?',
        answer:
          'Fane AI este asistentul IziBook pe WhatsApp. Clientul scrie ca la un angajat: vrea o tunsoare, intreaba de pret sau de locuri. Fane este conectat la calendar, servicii, angajati si preturi, 24 de ore din 24. Cand clientul confirma, programarea intra la specialist. Este inclus in toate planurile.',
        link: {
          href: '/fane-ai',
          label: 'Pagina Fane AI',
          title: 'Fane AI — programari salon pe WhatsApp',
        },
      },
      {
        id: 'fane-inclus',
        question: 'Fane AI costa extra?',
        answer:
          'Nu. Fane AI pe WhatsApp este inclus in Single, Medium si Enterprise. Clientul vorbeste pe WhatsApp; salonul gestioneaza rezervarea din IziBook. Nu platesti per conversatie sau per programare facuta de Fane. Proba de 10 zile include si Fane.',
        link: {
          href: '/preturi',
          label: 'Vezi preturile',
          title: 'Preturi IziBook',
        },
      },
      {
        id: 'client-fara-cont',
        question: 'Clientul trebuie sa isi faca cont ca sa se programeze?',
        answer:
          'Nu neaparat. Pe site-ul salonului se poate programa fara cont IziBook. Pe WhatsApp vorbeste cu Fane, tot fara aplicatie. Contul din aplicatie e util pentru istoric, recenzii, reminder-e si reprogramare. Daca salonul nu are rezervare pe site, clientul foloseste app-ul sau WhatsApp.',
      },
      {
        id: 'programari-recurente',
        question: 'Pot face programari recurente?',
        answer:
          'Da. Managerul si specialistul seteaza recurenta cand creeaza o programare: se repeta in calendar dupa regula aleasa. Clientul vede fiecare vizita in istoric. Anularea sau marcarea ca ratata se face pe programarea respectiva, din calendarul specialistului sau de catre manager.',
      },
      {
        id: 'concedii',
        question: 'Cum marchez pauze si concedii?',
        answer:
          'Specialistul adauga pauze in ziua respectiva si concedii punctuale sau recursive, cu verificare de overlap. Managerul le vede in calendarul echipei. Intervalele blocate nu apar ca locuri libere pentru clienti, Fane sau rezervarea de pe site. Programul de lucru il seteaza managerul.',
      },
      {
        id: 'fane-limite',
        question: 'Fane poate inventa locuri sau schimba preturi?',
        answer:
          'Nu. Fane programeaza doar pe datele din IziBook: servicii, preturi, angajati si intervale libere actualizate de tine. Daca un specialist e ocupat, propune alt interval sau alt angajat, dupa regulile tale. Nu da sfaturi medicale si nu negociaza in afara listelor din sistem.',
        link: {
          href: '/fane-ai',
          label: 'Cum functioneaza Fane',
          title: 'Fane AI — programari salon pe WhatsApp',
        },
      },
      {
        id: 'anulare-reprogramare',
        question: 'Pot anula sau reprograma o programare?',
        answer:
          'Da. Clientul anuleaza sau reprogrameaza din aplicatie. Specialistul si managerul anuleaza din calendar; managerul poate anula si in numele salonului. Notificarile de anulare si reprogramare pleaca automat in aplicatie. Poti anula si mai multe programari odata, din partea salonului.',
      },
      {
        id: 'vizita-ratata',
        question: 'Ce se intampla daca clientul nu se prezinta?',
        answer:
          'Specialistul sau managerul marcheaza programarea ca ratata. Ramane in istoric, nu dispare. O poti vedea in rapoarte si in fisa clientului, separat de vizitele incheiate si de anularile anuntate. Nu inlocuieste o anulare: e pentru no-show, ca sa stii cine nu a venit.',
      },
    ],
  },
  {
    id: 'echipa',
    title: 'Echipa',
    headingFade: 'si calendar',
    items: [
      {
        id: 'echipa',
        question: 'Pot gestiona mai multi angajati in acelasi cont?',
        answer:
          'Da, in functie de plan. Medium e pentru 2–5 angajati, Enterprise de la cinci in sus. Managerul vede programarile, veniturile, cheltuielile, pauzele si concediile pe toata echipa. Inviti specialisti pe email. Serviciile se asigneaza din contul de manager. Single e pentru cine lucreaza singur.',
        link: {
          href: '/preturi',
          label: 'Compara planurile',
          title: 'Preturi IziBook — planuri pentru saloane',
        },
      },
      {
        id: 'cont-angajat',
        question: 'Angajatii au conturi separate?',
        answer:
          'Da. Fiecare specialist are acces doar la propriul calendar, clienti si statistici. Nu vede incasarile salonului sau datele colegilor. Statisticile sunt calculate pe venitul angajatului, nu pe pretul de lista al serviciului. Managerul vede performanta pe membru si pe tot salonul.',
      },
      {
        id: 'calendar',
        question: 'Exista calendar pentru intreaga echipa?',
        answer:
          'Da. Pe web, managerul vede programarile tuturor specialistilor, filtreaza dupa angajat si creeaza programari manuale pentru ei. Fiecare specialist are in aplicatie un calendar propriu: programari, pauze, concedii. Recurentele si anularile din partea salonului se vad in acelasi loc.',
      },
      {
        id: 'web-cine',
        question: 'Cine foloseste platforma web?',
        answer:
          'Platforma web este pentru manager: dashboard, calendar de echipa, servicii, clienti, rapoarte si setari salon. Specialistul si clientul lucreaza din aplicatia iOS sau Android. Acelasi cont de manager se foloseste si in aplicatia mobila, daca vrei rapoarte sau echipa de pe telefon.',
      },
      {
        id: 'servicii',
        question: 'Pot configura serviciile si preturile salonului?',
        answer:
          'Da, din contul de manager. Setezi pretul in RON, durata, costul si marja. Creezi servicii si sub-servicii, le asignezi specialistilor care le ofera. Clientii, Fane AI si rezervarea de pe site citesc aceleasi liste. Specialistul vede doar serviciile asignate lui, nu editeaza catalogul.',
      },
      {
        id: 'invitatie-angajat',
        question: 'Cum adaug un specialist in echipa?',
        answer:
          'Din contul de manager trimiti o invitatie pe email. Specialistul isi face cont (sau foloseste unul existent) si primeste profil izolat: calendar, clienti si statistici proprii. Tu asignezi serviciile si programul. Limita de angajati e cea a planului: Single unul, Medium 2–5, Enterprise 5+.',
        link: {
          href: '/preturi',
          label: 'Limite pe planuri',
          title: 'Preturi IziBook — planuri pentru saloane',
        },
      },
    ],
  },
  {
    id: 'clienti',
    title: 'Clienti',
    headingFade: 'si rapoarte',
    items: [
      {
        id: 'clienti-istoric',
        question: 'Pastrez istoricul clientilor?',
        answer:
          'Da. Fiecare client are profil cu istoric de programari, servicii, stilist preferat, suma incasata si numarul de vizite. Managerul vede tot salonul; specialistul vede clientii cu care a lucrat. Din fisa poti suna clientul. Istoricul ramane si daca stergi programarile terminate din rapoarte.',
      },
      {
        id: 'fidelizare',
        question: 'Exista functionalitati de fidelizare a clientilor?',
        answer:
          'Da. Pe baza vizitelor, sistemul estimeaza frecventa de revenire si abaterea de la ea. Iti arata serviciile si specialistii cei mai ceruti de client si iti recomanda sa il contactezi prin notificare personalizata. Nu e un punctaj de loialitate separat; sunt predictii din istoricul real.',
      },
      {
        id: 'notificari',
        question: 'Se trimit notificari automate clientilor?',
        answer:
          'Da. Clientii primesc in aplicatie reminder, anulare si reprogramare. Managerul sau specialistul poate trimite si notificari personalizate — reducere, concediu, reamintire — doar catre clientii selectati. Specialistul trimite doar clientilor lui, nu intregului salon. Lista de notificari are contor pentru cele necitite.',
      },
      {
        id: 'rapoarte',
        question: 'Pot vedea rapoarte financiare in timp real?',
        answer:
          'Da. Dashboard-ul arata ziua curenta: programari, clienti, incasari, cheltuieli, profit si activitatea angajatilor. In rapoarte alegi perioada si compari cu intervalul precedent, pe tot salonul sau pe un specialist. Specialistul vede doar rapoartele calculate pe venitul lui, nu pe pretul de lista.',
      },
      {
        id: 'recenzii',
        question: 'Clientii pot lasa recenzii?',
        answer:
          'Da. Dupa o vizita incheiata, clientul lasa recenzie din aplicatie. Apare pe profilul specialistului si pe pagina salonului. Specialistul si managerul le citesc; nu le editeaza si nu le sterg din contul de angajat. Recenziile raman legate de programarea respectiva.',
      },
      {
        id: 'venituri-cheltuieli',
        question: 'Pot adauga venituri si cheltuieli in afara programarilor?',
        answer:
          'Da. Managerul inregistreaza manual venituri si cheltuieli pe perioada, pe langa ce vine din programari. Le cauti dupa nume, le stergi daca ai gresit si le vezi in rapoarte langa activitatea echipei. Specialistul nu adauga incasari la nivel de salon; vede doar partea lui.',
      },
    ],
  },
  {
    id: 'preturi',
    title: 'Preturi',
    headingFade: 'si abonament',
    items: [
      {
        id: 'cat-costa',
        question: 'Cat costa IziBook?',
        answer:
          'De la 100 RON pe luna. Single costa 100 RON (un angajat), Medium 500 RON (2–5), Enterprise 1000 RON (5+). Functiile de produs sunt aceleasi; alegi planul dupa numarul de angajati. Nu platesti per programare sau per client. Preturile sunt lunare, in RON.',
        link: {
          href: '/preturi',
          label: 'Pagina de preturi',
          title: 'Preturi IziBook pentru saloane',
        },
      },
      {
        id: 'demo',
        question: 'Pot testa aplicatia inainte de a ma abona?',
        answer:
          'Da. Proba dureaza 10 zile si ofera acces la tot sistemul: programari, clienti, echipa, rapoarte si Fane AI. Nu cerem card la inregistrare. Daca nu continui, contul se opreste la finalul perioadei, fara factura. Poti incepe din onboarding-ul web.',
      },
      {
        id: 'card-trial',
        question: 'Trebuie card pentru proba de 10 zile?',
        answer:
          'Nu. Te inregistrezi, folosesti tot sistemul 10 zile si nu introduci card. Daca nu treci pe un plan platit, nu emitem factura. Abonamentul, cand il activezi, e lunar, in RON, din contul de manager. Preturile incep de la 100 RON pe luna.',
        link: {
          href: '/preturi',
          label: 'Vezi preturile',
          title: 'Preturi IziBook',
        },
      },
      {
        id: 'plata-client',
        question: 'IziBook incaseaza plata de la clientii salonului?',
        answer:
          'Nu. Clientul plateste serviciul la salon, ca pana acum. IziBook gestioneaza programari, echipa si rapoarte; nu e casa de marcat si nu proceseaza plata tunsorii sau a manichiurii. Abonamentul IziBook e separat: il platesti tu, lunar, in RON, pentru software.',
      },
      {
        id: 'abonament',
        question: 'Pot schimba sau anula abonamentul oricand?',
        answer:
          'Da. Treci de la Single la Medium sau Enterprise, sau invers, in functie de cati angajati ai. Poti opri abonamentul fara perioada minima. Schimbarea se aplica din ciclul de facturare urmator. Nu exista taxa de reziliere afisata pe langa pretul lunar.',
      },
      {
        id: 'costuri-extra',
        question: 'Exista costuri pe langa abonament?',
        answer:
          'Nu. Pretul lunar acopera programari nelimitate, Fane AI, notificari si rapoarte, in limita de angajati a planului. Configurarea initiala este inclusa. Nu taxam per programare, per client sau per mesaj WhatsApp. Integrarea pe site-ul salonului se discuta la cerere.',
      },
      {
        id: 'suport',
        question: 'Oferiti suport pentru configurarea initiala?',
        answer:
          'Da. Planificam o discutie despre serviciile tale, cheltuieli si nevoile salonului, apoi configuram sistemul. Echipa raspunde in romana, pe email, telefon sau WhatsApp. Dupa onboarding, suportul ramane deschis pentru intrebari de zi cu zi. Nu e un cost separat fata de abonament.',
        link: {
          href: '/contact',
          label: 'Contact',
          title: 'Contacteaza echipa IziBook',
        },
      },
    ],
  },
  {
    id: 'date',
    title: 'Date',
    headingFade: 'si locatii',
    items: [
      {
        id: 'date',
        question: 'Ce inseamna control total asupra datelor mele?',
        answer:
          'Tu controlezi datele salonului. Poti sterge contul oricand. Ca manager poti sterge istoricul programarilor terminate, al incasarilor si al cheltuielilor, fara sa stergi clientii, serviciile sau angajatii. Clientii isi pastreaza profilul; tu curati rapoartele daca vrei un start curat.',
      },
      {
        id: 'migrare',
        question: 'Pot migra datele din alt sistem?',
        answer:
          'Da. Te putem ajuta sa importi clienti, servicii si programari din alte aplicatii sau din registre existente. Nu e un import self-service pe site; se face cu echipa, dupa o discutie despre formatul datelor. Scrie-ne inainte de onboarding daca ai un sistem vechi de mutat.',
        link: {
          href: '/contact',
          label: 'Contacteaza-ne',
          title: 'Contacteaza echipa IziBook',
        },
      },
      {
        id: 'multi-salon',
        question: 'Pot gestiona mai multe locatii?',
        answer:
          'Momentan un salon per cont. Daca ai doua locatii, nu le administrezi din acelasi abonament ca doua filiale. Extinderile pentru locatii multiple sunt in plan. Pana atunci, vorbim de caz in parte — contacteaza-ne daca ai mai multe puncte de lucru.',
      },
      {
        id: 'stergere-cont',
        question: 'Cum sterg contul?',
        answer:
          'Din aplicatie: Profil, apoi Sterge cont. Stergerea e instantanee si ireversibila. Daca esti ultimul manager al salonului, se sterg si datele salonului, echipa si programarile. Programarile viitoare se anuleaza. Pasii completi sunt in pagina de stergere a contului.',
        link: {
          href: '/legal/stergerea-contului',
          label: 'Stergerea contului',
          title: 'Procedura de stergere a contului IziBook',
        },
      },
      {
        id: 'gdpr',
        question: 'Cum sunt protejate datele personale?',
        answer:
          'Operatorul este IZIBOOK SRL. Prelucram datele conform GDPR: cont, programari, contact, in masura in care sunt necesare serviciului. Ai dreptul de acces, rectificare si stergere. Detaliile, temeiurile si contactul sunt in politica de confidentialitate. Cookie-urile de pe site se gestioneaza din banner.',
        link: {
          href: '/legal/politica-de-confidentialitate',
          label: 'Politica de confidentialitate',
          title: 'Politica de confidentialitate IziBook',
        },
      },
    ],
  },
];

export const faqItems: FaqItem[] = faqCategories.flatMap(
  (category) => category.items,
);

/** Homepage teaser — keep short; full list lives on /faq. */
export const faqHomeItemIds = [
  'ce-este-izibook',
  'fane-ai',
  'programari-online',
  'echipa',
  'demo',
  'cat-costa',
] as const;

export const faqHomeItems: FaqItem[] = faqHomeItemIds.map((id) => {
  const item = faqItems.find((entry) => entry.id === id);
  if (!item) {
    throw new Error(`Missing FAQ teaser item: ${id}`);
  }
  return item;
});
