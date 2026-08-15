/**
 * Shared last-updated date for product marketing pages.
 * Keep in sync with visible "Ultima actualizare" and sitemap lastmod.
 */
export const productPagesUpdatedAt = new Date('2026-08-15T00:00:00.000Z');

export const productPagePaths = [
  '/preturi',
  '/fane-ai',
  '/functionalitati',
  '/faq',
  '/contact',
] as const;

const dateFormatter = new Intl.DateTimeFormat('ro-RO', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

/** Human-readable date for Romanian UI (e.g. "August 15, 2026"). */
export function formatProductUpdatedDate(date: Date = productPagesUpdatedAt): string {
  const parts = dateFormatter.formatToParts(date);
  const month = parts.find((part) => part.type === 'month')?.value ?? '';
  const day = parts.find((part) => part.type === 'day')?.value ?? '';
  const year = parts.find((part) => part.type === 'year')?.value ?? '';
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${capitalizedMonth} ${day}, ${year}`;
}

export function productPagesUpdatedAtIso(): string {
  return productPagesUpdatedAt.toISOString();
}
