export interface FeatureLink {
  href: string;
  label: string;
  title: string;
}

export interface RoleFeature {
  title: string;
  body: string;
  icon: string;
  link?: FeatureLink;
}

export interface ProductRole {
  id: 'manager' | 'specialist' | 'client';
  index: string;
  navLabel: string;
  title: string;
  headingFade: string;
  intro: string;
  features: RoleFeature[];
}

export const functionalitatiLead =
  'IziBook are trei profile: manager, specialist si client. Managerul conduce salonul pe web si in aplicatie. Specialistul isi vede calendarul, clientii si rapoartele calculate pe venitul lui. Clientul se programeaza din aplicatie, de pe site-ul salonului sau pe WhatsApp cu Fane AI. Functiile de mai jos sunt cele din produs, nu o lista de marketing.';

export const productRoles: ProductRole[] = [
  {
    id: 'manager',
    index: '01',
    navLabel: 'Manager',
    title: 'Pentru',
    headingFade: 'manager',
    intro:
      'Contul de manager este centrul salonului. De pe web sau din aplicatie vezi calendarul echipei, clientii, serviciile, incasarile si rapoartele. Inviti angajati, le asignezi servicii si configurezi programul. Statisticile se pot vedea pe tot salonul sau pe un specialist, pentru ziua curenta sau pentru o perioada aleasa.',
    features: [
      {
        title: 'Calendarul echipei',
        icon: 'solar:calendar-mark-bold',
        body: 'Pe web, calendarul arata programarile tuturor specialistilor in acelasi loc. Filtrezi dupa angajat, creezi programari manuale pentru ei si vezi pauzele sau concediile. Poti anula in numele salonului sau marca o vizita ca ratata. Recurentele se seteaza o data si se repeta in calendar.',
      },
      {
        title: 'Dashboard si rapoarte',
        icon: 'solar:chart-2-bold',
        body: 'Dashboard-ul arata ziua curenta: programari, clienti, incasari, cheltuieli si activitatea angajatilor. In rapoarte alegi perioada si compari cu intervalul precedent. Poti vedea tot salonul sau un specialist: venituri, cheltuieli, numar de clienti, servicii vandute si indici de performanta. Pe web rapoartele acopera salonul; in aplicatie urmaresti si performanta pe membru.',
      },
      {
        title: 'Echipa si invitatii',
        icon: 'solar:user-id-bold',
        body: 'Inviti specialisti pe email. Fiecare primeste cont propriu, izolat: vede doar calendarul, clientii si statisticile lui. Tu vezi performanta pe perioada: venituri, cheltuieli, programari si clienti. Asignezi servicii, setezi programul de lucru si urmaresti activitatea zilnica. Din fisa angajatului deschizi serviciile asignate si statisticile.',
      },
      {
        title: 'Servicii, preturi si marja',
        icon: 'solar:scissors-bold',
        body: 'Creezi servicii si sub-servicii, setezi pretul in RON, durata, costul si marja. Asignezi fiecare serviciu la specialistii care il ofera. Clientii, Fane AI si rezervarea de pe site citesc aceleasi liste. Cauti in catalog, editezi un serviciu existent sau il scoti daca nu se mai ofera. Categoriile ajuta la cautare in aplicatie.',
      },
      {
        title: 'Clienti si fidelizare',
        icon: 'solar:medal-ribbons-star-bold',
        body: 'Fiecare client are profil cu istoric, stilist preferat, servicii frecvente, suma incasata si numarul de vizite. Sistemul estimeaza frecventa de revenire si abaterea de la ea, apoi iti recomanda sa il contactezi. Trimiti notificari personalizate doar la clientii selectati. Din fisa poti suna clientul si deschizi istoricul vizitelor.',
      },
      {
        title: 'Salon, date si abonament',
        icon: 'solar:shop-2-bold',
        body: 'Editezi nume, descriere, adresa, program, logo si imagini. Recenziile apar pe pagina salonului. Abonamentul se gestioneaza din cont. Poti sterge istoricul programarilor terminate fara sa stergi clientii sau echipa. Un salon per cont, in acest moment. Adresa include harta in aplicatie.',
      },
    ],
  },
  {
    id: 'specialist',
    index: '02',
    navLabel: 'Specialist',
    title: 'Pentru',
    headingFade: 'specialist',
    intro:
      'Profilul de specialist este pentru munca de zi cu zi, nu pentru administrarea salonului. Ai calendar propriu, clientii tai si rapoarte calculate pe venitul tau, nu pe pretul de lista al serviciului. Poti trimite notificari doar clientilor cu care lucrezi. Nu vezi datele financiare ale colegilor.',
    features: [
      {
        title: 'Calendar propriu',
        icon: 'solar:calendar-minimalistic-bold',
        body: 'Vezi programarile, pauzele si concediile tale. Creezi concedii punctuale sau recursive, cu verificare de overlap. Adaugi pauze in ziua respectiva. Recurentele de programari se configureaza din aceeasi fereastra. Managerul vede acelasi calendar; tu nu vezi restul echipei. Acasa vezi activitatea zilei: ce urmeaza si ce s-a inchis.',
      },
      {
        title: 'Programari manuale',
        icon: 'solar:calendar-add-bold',
        body: 'Creezi o programare pentru un client existent sau nou: alegi un serviciu asignat tie, data si ora. Poti seta recurenta. Detaliile arata clientul, serviciul si pretul. Anulezi sau marchezi ca ratata. Programarile din app, de pe site sau de la Fane intra in acelasi calendar.',
      },
      {
        title: 'Clientii mei',
        icon: 'solar:users-group-rounded-bold',
        body: 'Lista ta de clienti, cu istoric si date de contact. Poti suna din aplicatie. Trimiti notificari personalizate doar celor selectati, nu intregului salon. Daca exista destule vizite, profilul include predictii de revenire, servicii preferate si stilistul cel mai cerut. Nu vezi clientii colegilor, doar pe cei cu care ai lucrat.',
      },
      {
        title: 'Rapoarte personale',
        icon: 'solar:wallet-money-bold',
        body: 'Rapoartele tale arata veniturile calculate pe cota angajatului, nu pe pretul total al serviciului. Compari perioada curenta cu cea precedenta: programari, clienti, incasari. Nu vezi incasarile intregului salon si nu ai acces la datele financiare ale colegilor. Alegi intervalul: zi, saptamana, luna sau o perioada anume.',
      },
      {
        title: 'Program si servicii asignate',
        icon: 'solar:clock-circle-bold',
        body: 'Iti vezi programul de lucru setat de manager. Serviciile din profil sunt cele asignate tie: pret, durata, ce oferi. Nu creezi catalogul salonului si nu schimbi preturile pentru toata echipa. Asta ramane la manager. Daca el schimba programul sau serviciile asignate, le vezi actualizate in profil.',
      },
      {
        title: 'Recenzii',
        icon: 'solar:star-bold',
        body: 'Recenziile lasate dupa programari incheiate apar in profilul tau. Managerul le vede si pe pagina salonului. Nu le editezi si nu le stergi; sunt feedback-ul clientilor pentru munca ta. Le consulti cand vrei sa vezi cum te evalueaza clientii in timp.',
      },
    ],
  },
  {
    id: 'client',
    index: '03',
    navLabel: 'Client',
    title: 'Pentru',
    headingFade: 'client',
    intro:
      'Clientul nu gestioneaza salonul. Cauta salon, specialist sau serviciu si se programeaza din aplicatie, de pe site-ul salonului sau pe WhatsApp cu Fane. Are istoric, recenzii si notificari. Contul IziBook este optional daca salonul ofera rezervare pe site-ul propriu. Rezervarea intra in acelasi calendar, oricare ar fi canalul.',
    features: [
      {
        title: 'Cautare salon, specialist, serviciu',
        icon: 'solar:magnifer-bold',
        body: 'Pe ecranul principal vezi saloane in trending, in apropiere si pe categorii. Cauti dupa salon, specialist sau serviciu. Deschizi pagina salonului: descriere, echipa, servicii, recenzii. Pe pagina specialistului vezi serviciile lui si poti incepe o programare. Exista si saloane din afara retelei IziBook, listate separat.',
      },
      {
        title: 'Programare din aplicatie',
        icon: 'solar:smartphone-bold',
        body: 'Alegi serviciul, specialistul si data. Vezi intervalele libere si confirmi. Programarea apare la specialist. Acasa vezi urmatoarea vizita si poti reprograma. Istoricul este impartit in viitoare, trecute si anulate. Dupa o vizita poti lasa recenzie. Confirmarea poate cere numarul de telefon, ca salonul sa te contacteze.',
      },
      {
        title: 'Fane AI pe WhatsApp',
        icon: 'solar:chat-round-dots-bold',
        body: 'Daca nu vrei aplicatie, scrii pe WhatsApp. Fane raspunde cu locuri libere, preturi si servicii din IziBook, 24 de ore din 24. Cand confirmi, rezervarea intra in calendarul specialistului. Nu descarci o aplicatie si nu iti faci cont ca sa vorbesti cu el. Este inclus in toate planurile salonului.',
        link: {
          href: '/fane-ai',
          label: 'Cum functioneaza Fane',
          title: 'Fane AI — programari salon pe WhatsApp',
        },
      },
      {
        title: 'Rezervare de pe site-ul salonului',
        icon: 'solar:globus-bold',
        body: 'La cerere, rezervarea se pune pe site-ul salonului. Clientul se programeaza acolo, fara cont IziBook si fara sa vada alte saloane. Foloseste acelasi calendar, aceleasi servicii si aceeasi disponibilitate ca in aplicatie. Nu trece prin marketplace-ul IziBook; vede doar salonul tau.',
      },
      {
        title: 'Notificari si recenzii',
        icon: 'solar:bell-bing-bold',
        body: 'Primesti in aplicatie reminder, anulare sau reprogramare. Managerul sau specialistul iti poate trimite si mesaje personalizate: oferta, concediu, reamintire. Dupa vizita lasi recenzie pe profilul specialistului si al salonului, din istoricul programarilor. Lista de notificari e in aplicatie; cele necitite au contor.',
      },
      {
        title: 'Un cont, trei profile',
        icon: 'solar:user-circle-bold',
        body: 'Iti editezi datele, avatarul si vezi programarile. Acelasi utilizator poate avea profil de client, iar daca lucreaza in salon si profil de specialist sau manager. Schimbi profilul din aplicatie, fara conturi separate pe email. Login-ul e acelasi pe iOS, Android si, pentru manager, pe web.',
      },
    ],
  },
];
