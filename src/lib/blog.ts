import { getCollection, type CollectionEntry } from 'astro:content';
import GithubSlugger from 'github-slugger';

export type BlogEntry = CollectionEntry<'blog'>;

const dateFormatter = new Intl.DateTimeFormat('ro-RO', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const WORDS_PER_MINUTE = 200;

export function formatBlogDate(date: Date): string {
  return dateFormatter.format(date);
}

const longDateFormatter = new Intl.DateTimeFormat('ro-RO', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export function formatBlogPostDate(date: Date): string {
  const parts = longDateFormatter.formatToParts(date);
  const month = parts.find((part) => part.type === 'month')?.value ?? '';
  const day = parts.find((part) => part.type === 'day')?.value ?? '';
  const year = parts.find((part) => part.type === 'year')?.value ?? '';
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${capitalizedMonth}, ${day}, ${year}`;
}

export function getBlogPostHref(post: BlogEntry): string {
  return `/blog/${post.id}`;
}

export function extractHeadings(
  markdown: string,
): Array<{ depth: number; text: string; id: string }> {
  const headings: Array<{ depth: number; text: string; id: string }> = [];
  const slugger = new GithubSlugger();

  for (const line of markdown.split('\n')) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) continue;

    const depth = match[1].length;
    const text = match[2].trim();

    headings.push({ depth, text, id: slugger.slug(text) });
  }

  return headings;
}

export function calculateReadTime(markdown: string): string {
  const body = markdown.replace(/^---[\s\S]*?---/, '').trim();
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));

  return `${minutes} min de citit`;
}

export function getBlogReadTime(post: BlogEntry): string {
  return calculateReadTime(post.body ?? '');
}

export async function getPublishedBlogPosts(): Promise<BlogEntry[]> {
  return (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export async function getRelatedPostsByCategory(
  post: BlogEntry,
  limit = 3,
): Promise<BlogEntry[]> {
  const posts = await getPublishedBlogPosts();
  const others = posts.filter((entry) => entry.id !== post.id);

  const sameCategory = others.filter(
    (entry) => entry.data.category === post.data.category,
  );
  const differentCategory = others.filter(
    (entry) => entry.data.category !== post.data.category,
  );

  return [...sameCategory, ...differentCategory].slice(0, limit);
}
