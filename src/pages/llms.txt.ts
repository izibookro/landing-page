import type { APIRoute } from 'astro';
import { site } from '../data/site';

/**
 * llmstxt.org overview for AI agents / answer engines.
 * Keep concise: product, audience, key URLs (pricing file comes separately).
 */
const getLlmsTxt = () => `# IziBook

> IziBook este software de management pentru saloane de infrumusetare din Romania: programari, clienti, echipa, incasari, rapoarte si asistent AI pe WhatsApp (Fane AI). Disponibil pe web, iOS si Android. Preturi de la 100 RON/luna. Proba gratuita 30 de zile.

IziBook se adreseaza managerilor si angajatilor de saloane (coafor, unghii, beauty). Clientii se programeaza din aplicatie, de pe web sau pe WhatsApp cu Fane AI. Moneda: RON. Limba site: romana. Contact: ${site.email}.

## Pagini principale

- [Acasa](${site.url}): Prezentare produs, functionalitati, Fane AI
- [Preturi](${site.url}/#preturi): Planuri Single / Small / Medium / Enterprise (100–1500 RON/luna)
- [FAQ](${site.url}/#faq): Intrebari frecvente (si FAQPage schema)
- [Descarca aplicatia](${site.url}/#descarca): Linkuri iOS si Android
- [Contact](${site.url}/#contact): Email si canale de suport
- [Blog](${site.url}/blog): Ghiduri pentru saloane (programari, fidelizare, management)
- [Fidelizarea clientilor](${site.url}/blog/fidelizare-clienti): Ghid despre retentie in saloane de beauty

## Aplicatii

- [Aplicatie web](${site.apps.web.url}): Cont manager / angajat / client
- [Inregistrare / onboarding](${site.apps.web.onboarding}): Incepe proba gratuita
- [App Store (iOS)](${site.apps.ios.url}): Aplicatia mobila IziBook
- [Google Play (Android)](${site.apps.android.url}): Aplicatia mobila IziBook

## Optional

- [Politica de confidentialitate](${site.url}/legal/politica-de-confidentialitate)
- [Termeni si conditii](${site.url}/legal/termeni-si-conditii)
- [Politica cookie-uri](${site.url}/legal/politica-cookie-uri)
- [Instagram](${site.social.instagram})
- [Facebook](${site.social.facebook})
- [LinkedIn](${site.social.linkedin})
`;

export const GET: APIRoute = () => {
  return new Response(getLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
