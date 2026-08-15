import { faneHowTo, faneHowToSteps } from '../data/faneAi';
import { faqHomeItems } from '../data/faqItems';
import { functionalitatiLead, productRoles } from '../data/functionalitati';
import { plans } from '../data/plans';
import { productPagesUpdatedAtIso } from '../data/productPages';
import { site } from '../data/site';

/**
 * Open Knowledge Format (OKF) v0.2 bundle for AI agents.
 * Spec: https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/HEAD/okf/SPEC.md
 * Served at /okf/*.md — discoverable via llms.txt.
 */

const generatedAt = productPagesUpdatedAtIso().replace(/\.\d{3}Z$/, 'Z');

function frontmatter(
  fields: Record<string, string | string[] | undefined>,
): string {
  const lines = Object.entries(fields).flatMap(([key, value]) => {
    if (value === undefined) return [];
    if (Array.isArray(value)) {
      return [
        `${key}: [${value.map((tag) => JSON.stringify(tag)).join(', ')}]`,
      ];
    }
    if (key === 'generated') {
      return [`generated: ${value}`];
    }
    // Quote strings that need it (colons, etc.)
    const needsQuotes = /[:#[\]{}|>*&!%@`]/.test(value) || value.includes('\n');
    return [`${key}: ${needsQuotes ? JSON.stringify(value) : value}`];
  });
  return `---\n${lines.join('\n')}\n---\n`;
}

const generatedLine = `{ by: human:izibook, at: ${generatedAt} }`;

export const okfDocuments: Record<string, string> = {
  'index.md': `---
okf_version: "0.2"
---

# IziBook — Open Knowledge Format

Bundle agent-readable pentru produsul IziBook (software salon, Romania). Continutul oglindeste paginile publice; preturi in RON.

# Produs

* [IziBook](izibook.md) - Ce este IziBook, pentru cine e si pe ce platforme ruleaza
* [Preturi](pricing.md) - Planuri Single, Medium, Enterprise (RON/luna) si proba 10 zile
* [Fane AI](fane-ai.md) - Asistent WhatsApp pentru programari 24/7
* [Functionalitati](features.md) - Functii pe profile: manager, specialist, client
* [FAQ](faq.md) - Intrebari frecvente (teaser din homepage)

# Surse umane

* [Site](${site.url}) - Pagina principala
* [llms.txt](${site.url}/llms.txt) - Overview scurt pentru agenti
* [pricing.md](${site.url}/pricing.md) - Preturi structurate (fisier separat)
`,

  'izibook.md': `${frontmatter({
    type: 'Product',
    title: 'IziBook',
    description:
      'Software de management pentru saloane de infrumusetare din Romania: programari, clienti, echipa, incasari, rapoarte si Fane AI pe WhatsApp.',
    resource: site.url,
    tags: ['software-salon', 'programari', 'romania', 'RON'],
    generated: generatedLine,
  })}
# Rezumat

${site.description}

IziBook se adreseaza managerilor si specialistilor din saloane (coafor, unghii, beauty). Clientii se programeaza din aplicatie, de pe site-ul salonului sau pe WhatsApp cu [Fane AI](fane-ai.md). Limba: romana. Moneda: RON.

# Platforme

- Web (manager): ${site.apps.web.url}
- iOS: ${site.apps.ios.url}
- Android: ${site.apps.android.url}
- Onboarding / proba: ${site.apps.web.onboarding}

# Legaturi in bundle

- [Preturi](pricing.md)
- [Functionalitati](features.md)
- [Fane AI](fane-ai.md)
- [FAQ](faq.md)

# Contact

- Email: ${site.email}
- Telefon: ${site.telephoneDisplay}
- Pagina: ${site.url}/contact
`,

  'pricing.md': (() => {
    const planBlocks = plans
      .map((plan) => {
        const features = plan.features.map((f) => `- ${f}`).join('\n');
        return `## ${plan.name}

- Pret: ${plan.price} RON/luna
- Public: ${plan.description}
- Angajati: ${plan.employees}${plan.popular ? '\n- Badge: Popular' : ''}

${features}`;
      })
      .join('\n\n');

    return `${frontmatter({
      type: 'Pricing',
      title: 'Preturi IziBook',
      description:
        'Abonamente lunare in RON: Single 100, Medium 500, Enterprise 1000. Proba 10 zile, fara card.',
      resource: `${site.url}/preturi`,
      tags: ['preturi', 'abonament', 'RON', 'trial'],
      generated: generatedLine,
    })}
# Trial

- Durata: 10 zile
- Cost: gratuit
- Card la inregistrare: nu
- Start: ${site.apps.web.onboarding}

# Planuri

${planBlocks}

# Note

- Functiile de produs sunt aceleasi pe toate planurile; alegi dupa numarul de angajati.
- Nu exista cost per programare sau per client.
- Fisier markdown dedicat agentilor: ${site.url}/pricing.md
- Pagina umana: ${site.url}/preturi
- Vezi si [IziBook](izibook.md), [Fane AI](fane-ai.md)
`;
  })(),

  'fane-ai.md': (() => {
    const steps = faneHowToSteps
      .map((step, i) => `## Pasul ${i + 1}: ${step.title}\n\n${step.body}`)
      .join('\n\n');

    return `${frontmatter({
      type: 'Playbook',
      title: 'Fane AI',
      description: faneHowTo.description,
      resource: `${site.url}/fane-ai`,
      tags: ['fane-ai', 'whatsapp', 'programari', 'how-to'],
      generated: generatedLine,
    })}
# Ce este

Fane AI este asistentul IziBook pe WhatsApp. Clientul scrie un mesaj; Fane raspunde cu locuri libere, servicii si preturi din IziBook, 24/7. Este inclus in [toate planurile](pricing.md).

# ${faneHowTo.name}

${steps}

# Limitari

- Programeaza doar pe datele din IziBook (servicii, preturi, angajati, disponibilitate).
- Nu inlocuieste un stilist; nu da sfaturi medicale; nu negociaza preturi in afara listelor din sistem.
- Clientul vorbeste pe WhatsApp; salonul gestioneaza rezervarea din IziBook.

# Legaturi

- [IziBook](izibook.md)
- [Preturi](pricing.md)
- Pagina umana: ${site.url}/fane-ai
`;
  })(),

  'features.md': (() => {
    const roles = productRoles
      .map((role) => {
        const features = role.features
          .map((f) => `### ${f.title}\n\n${f.body}`)
          .join('\n\n');
        return `## ${role.navLabel}\n\n${role.intro}\n\n${features}`;
      })
      .join('\n\n');

    return `${frontmatter({
      type: 'Reference',
      title: 'Functionalitati IziBook',
      description:
        'Functii pe trei profile: manager, specialist si client — calendar, programari, rapoarte, Fane AI.',
      resource: `${site.url}/functionalitati`,
      tags: ['functionalitati', 'manager', 'specialist', 'client'],
      generated: generatedLine,
    })}
# Rezumat

${functionalitatiLead}

${roles}

# Legaturi

- [IziBook](izibook.md)
- [Fane AI](fane-ai.md)
- [Preturi](pricing.md)
- Pagina umana: ${site.url}/functionalitati
`;
  })(),

  'faq.md': (() => {
    const qa = faqHomeItems
      .map((item) => `## ${item.question}\n\n${item.answer.trim()}`)
      .join('\n\n');

    return `${frontmatter({
      type: 'FAQ',
      title: 'Intrebari frecvente IziBook',
      description:
        'Teaser FAQ din homepage: produs, Fane AI, programari, echipa, demo si preturi.',
      resource: `${site.url}/faq`,
      tags: ['faq', 'intrebari'],
      generated: generatedLine,
    })}
${qa}

# Mai multe

Lista completa: ${site.url}/faq

Vezi si [IziBook](izibook.md), [Preturi](pricing.md), [Fane AI](fane-ai.md).
`;
  })(),
};

export const okfSlugs = Object.keys(okfDocuments).map((name) =>
  name.replace(/\.md$/, ''),
);

export function getOkfDocument(slug: string): string | undefined {
  const key = slug.endsWith('.md') ? slug : `${slug}.md`;
  return okfDocuments[key];
}

export const okfMarkdownHeaders = {
  'Content-Type': 'text/markdown; charset=utf-8',
  'Cache-Control': 'public, max-age=3600',
} as const;
