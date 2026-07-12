import { getCollection, type CollectionEntry } from 'astro:content';

export type LegalEntry = CollectionEntry<'legal'>;

const dateFormatter = new Intl.DateTimeFormat('ro-RO', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export function formatLegalUpdatedDate(date: Date): string {
  const parts = dateFormatter.formatToParts(date);
  const month = parts.find((part) => part.type === 'month')?.value ?? '';
  const day = parts.find((part) => part.type === 'day')?.value ?? '';
  const year = parts.find((part) => part.type === 'year')?.value ?? '';
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${capitalizedMonth} ${day}, ${year}`;
}

export function getLegalPageHref(page: LegalEntry): string {
  return `/legal/${page.id}`;
}

export async function getPublishedLegalPages(): Promise<LegalEntry[]> {
  return (await getCollection('legal', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title, 'ro'),
  );
}

export async function getRelatedLegalPages(
  page: LegalEntry,
): Promise<LegalEntry[]> {
  const pages = await getPublishedLegalPages();
  return pages.filter((entry) => entry.id !== page.id);
}
