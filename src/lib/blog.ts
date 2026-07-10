import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

const dateFormatter = new Intl.DateTimeFormat('ro-RO', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function formatBlogDate(date: Date): string {
  return dateFormatter.format(date);
}

export function getBlogPostHref(post: BlogEntry): string {
  return `/blog/${post.id}`;
}

export async function getPublishedBlogPosts(): Promise<BlogEntry[]> {
  return (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}
