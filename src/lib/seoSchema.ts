import { faneHowTo, faneHowToSteps } from '../data/faneAi';
import { faqHomeItems, faqItems, type FaqItem } from '../data/faqItems';
import { plans } from '../data/plans';
import {
  organizationSameAs,
  site,
  normalizeCanonicalPath,
  type FaqSchemaScope,
  type SeoArticle,
  type SeoBreadcrumb,
} from '../data/site';

function absoluteUrl(path: string): string {
  return new URL(normalizeCanonicalPath(path), site.url).href;
}

function buildOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.telephone,
    taxID: site.taxId,
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'CUI',
        value: site.taxId,
      },
      {
        '@type': 'PropertyValue',
        name: 'Nr. Registrul Comertului',
        value: site.tradeRegister,
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      addressCountry: site.address.addressCountry,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Romania',
      alternateName: site.country,
    },
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/android-chrome-512x512.png'),
    },
    sameAs: [...organizationSameAs],
  };
}

function buildWebsiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: site.inLanguage,
    publisher: { '@id': `${site.url}/#organization` },
  };
}

function buildSoftwareApplicationSchema() {
  const prices = plans.map((plan) => plan.price);

  return {
    '@type': 'SoftwareApplication',
    name: site.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: site.url,
    sameAs: [site.apps.web.url, site.apps.ios.url, site.apps.android.url],
    description: site.description,
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: String(Math.min(...prices)),
      highPrice: String(Math.max(...prices)),
      priceCurrency: 'RON',
      offerCount: plans.length,
    },
    publisher: { '@id': `${site.url}/#organization` },
  };
}

function buildMobileApplicationSchemas() {
  return [site.apps.ios, site.apps.android].map((app) => ({
    '@type': 'MobileApplication',
    name: app.name,
    applicationCategory: app.category,
    operatingSystem: app.operatingSystem,
    url: app.url,
    description: site.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'RON',
    },
    publisher: { '@id': `${site.url}/#organization` },
  }));
}

function buildFaqPageSchema(items: FaqItem[], pageUrl: string) {
  return {
    '@type': 'FAQPage',
    '@id': pageUrl,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.trim(),
      },
    })),
  };
}

function buildHowToSchema() {
  return {
    '@type': 'HowTo',
    '@id': `${absoluteUrl('/fane-ai')}#howto`,
    name: faneHowTo.name,
    description: faneHowTo.description,
    inLanguage: site.inLanguage,
    step: faneHowToSteps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.body,
      url: `${absoluteUrl('/fane-ai')}#step-${step.index}`,
    })),
  };
}

function buildPlanOffersItemListSchema() {
  const pageUrl = absoluteUrl('/preturi');

  return {
    '@type': 'ItemList',
    '@id': `${pageUrl}#plans`,
    name: 'Planuri IziBook pentru saloane',
    description:
      'Abonamente lunare IziBook in RON: Single, Medium si Enterprise, dupa numarul de angajati.',
    numberOfItems: plans.length,
    itemListElement: plans.map((plan, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Offer',
        '@id': `${pageUrl}#plan-${plan.id}`,
        name: `IziBook ${plan.name}`,
        description: `${plan.description} ${plan.employees}. Include: ${plan.features.join('; ')}.`,
        price: String(plan.price),
        priceCurrency: 'RON',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: String(plan.price),
          priceCurrency: 'RON',
          billingDuration: 'P1M',
          unitText: 'MONTH',
        },
        availability: 'https://schema.org/InStock',
        url: pageUrl,
        seller: { '@id': `${site.url}/#organization` },
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: `IziBook ${plan.name}`,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
          description: plan.description,
        },
      },
    })),
  };
}

function buildWebPageSchema(options: {
  canonical: string;
  title: string;
  description: string;
  dateModified?: string;
}) {
  return {
    '@type': 'WebPage',
    '@id': options.canonical,
    url: options.canonical,
    name: options.title,
    description: options.description,
    inLanguage: site.inLanguage,
    isPartOf: { '@id': `${site.url}/#website` },
    publisher: { '@id': `${site.url}/#organization` },
    ...(options.dateModified ? { dateModified: options.dateModified } : {}),
  };
}

function buildBreadcrumbSchema(breadcrumbs: SeoBreadcrumb[]) {
  if (breadcrumbs.length === 0) return null;

  return {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

function buildArticleSchema(options: {
  title: string;
  description: string;
  canonical: string;
  image: string;
  article: SeoArticle;
}) {
  const { title, description, canonical, image, article } = options;

  return {
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime ?? article.publishedTime,
    author: {
      '@type': 'Person',
      name: article.authorName,
      ...(article.authorJobTitle
        ? { jobTitle: article.authorJobTitle }
        : {}),
      ...(article.authorImage
        ? {
            image: {
              '@type': 'ImageObject',
              url: article.authorImage,
              caption: article.authorName,
            },
          }
        : {}),
      url: site.url,
      worksFor: { '@id': `${site.url}/#organization` },
    },
    publisher: { '@id': `${site.url}/#organization` },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    ...(article.section ? { articleSection: article.section } : {}),
    inLanguage: site.inLanguage,
  };
}

export function buildJsonLdGraph(options: {
  title: string;
  pageTitle: string;
  description: string;
  canonical: string;
  image: string;
  includeAppSchemas: boolean;
  includeFaq: boolean;
  faqScope: FaqSchemaScope;
  includeHowTo: boolean;
  includePlanOffers: boolean;
  dateModified?: string;
  isHome: boolean;
  article?: SeoArticle;
  breadcrumbs: SeoBreadcrumb[];
}) {
  const graph: Record<string, unknown>[] = [buildOrganizationSchema()];

  if (options.isHome || options.includeAppSchemas) {
    graph.push(buildWebsiteSchema());
  }

  if (options.dateModified) {
    graph.push(
      buildWebPageSchema({
        canonical: options.canonical,
        title: options.title,
        description: options.description,
        dateModified: options.dateModified,
      }),
    );
  }

  if (options.includeAppSchemas) {
    graph.push(buildSoftwareApplicationSchema(), ...buildMobileApplicationSchemas());
  }

  if (options.includeFaq) {
    const items = options.faqScope === 'home' ? faqHomeItems : faqItems;
    graph.push(buildFaqPageSchema(items, options.canonical));
  }

  if (options.includeHowTo) {
    graph.push(buildHowToSchema());
  }

  if (options.includePlanOffers) {
    graph.push(buildPlanOffersItemListSchema());
  }

  if (options.article) {
    graph.push(
      buildArticleSchema({
        title: options.pageTitle,
        description: options.description,
        canonical: options.canonical,
        image: options.image,
        article: options.article,
      }),
    );
  }

  const breadcrumbs = buildBreadcrumbSchema(options.breadcrumbs);
  if (breadcrumbs) {
    graph.push(breadcrumbs);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
