import { faqItems } from '../data/faqItems';
import { plans } from '../data/plans';
import {
  organizationSameAs,
  site,
  normalizeCanonicalPath,
  type SeoArticle,
  type SeoBreadcrumb,
} from '../data/site';

function absoluteUrl(path: string): string {
  return new URL(normalizeCanonicalPath(path), site.url).href;
}

export function buildOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/android-chrome-512x512.png'),
    },
    sameAs: [...organizationSameAs],
  };
}

export function buildWebsiteSchema() {
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

export function buildSoftwareApplicationSchema() {
  const prices = plans.map((plan) => plan.price);

  return {
    '@type': 'SoftwareApplication',
    name: site.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: site.apps.web.url,
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

export function buildMobileApplicationSchemas() {
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

export function buildFaqPageSchema() {
  return {
    '@type': 'FAQPage',
    '@id': `${site.url}/#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.trim(),
      },
    })),
  };
}

export function buildBreadcrumbSchema(breadcrumbs: SeoBreadcrumb[]) {
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

export function buildArticleSchema(options: {
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
  isHome: boolean;
  article?: SeoArticle;
  breadcrumbs: SeoBreadcrumb[];
}) {
  const graph: Record<string, unknown>[] = [buildOrganizationSchema()];

  if (options.isHome || options.includeAppSchemas) {
    graph.push(buildWebsiteSchema());
  }

  if (options.includeAppSchemas) {
    graph.push(buildSoftwareApplicationSchema(), ...buildMobileApplicationSchemas());
  }

  if (options.includeFaq) {
    graph.push(buildFaqPageSchema());
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
