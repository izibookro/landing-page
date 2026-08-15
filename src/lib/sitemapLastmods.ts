import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  productPagePaths,
  productPagesUpdatedAt,
} from '../data/productPages';

/**
 * Reads lastmod dates from content markdown frontmatter for sitemap serialize.
 * Keys are pathname forms both with and without a trailing slash.
 */
export function loadContentLastmods(rootDir = process.cwd()): Map<string, Date> {
  const lastmods = new Map<string, Date>();

  const collections: Array<{
    dir: string;
    routePrefix: string;
    dateField: string;
  }> = [
    {
      dir: join(rootDir, 'src/content/blog'),
      routePrefix: '/blog',
      dateField: 'pubDate',
    },
    {
      dir: join(rootDir, 'src/content/legal'),
      routePrefix: '/legal',
      dateField: 'updatedDate',
    },
  ];

  for (const collection of collections) {
    let files: string[];
    try {
      files = readdirSync(collection.dir);
    } catch {
      continue;
    }

    for (const file of files) {
      if (!file.endsWith('.md')) continue;

      const content = readFileSync(join(collection.dir, file), 'utf8');
      if (/^draft:\s*true/m.test(content)) continue;

      const dateMatch = content.match(
        new RegExp(`^${collection.dateField}:\\s*(.+)$`, 'm'),
      );
      if (!dateMatch) continue;

      const date = new Date(dateMatch[1].trim());
      if (Number.isNaN(date.valueOf())) continue;

      const slug = file.replace(/\.md$/, '');
      const path = `${collection.routePrefix}/${slug}`;
      lastmods.set(path, date);
      lastmods.set(`${path}/`, date);
    }
  }

  for (const path of productPagePaths) {
    lastmods.set(path, productPagesUpdatedAt);
  }

  const allDates = [...lastmods.values()];
  const latest = allDates.reduce(
    (max, date) => (date > max ? date : max),
    productPagesUpdatedAt,
  );
  lastmods.set('/', latest);

  const blogDates = [...lastmods.entries()]
    .filter(([path]) => path.startsWith('/blog/') && !path.endsWith('/'))
    .map(([, date]) => date);
  if (blogDates.length > 0) {
    lastmods.set(
      '/blog',
      blogDates.reduce((max, date) => (date > max ? date : max)),
    );
  }

  return lastmods;
}

export function lastmodForSitemapUrl(
  pageUrl: string,
  siteOrigin: string,
  lastmods: Map<string, Date>,
): Date | undefined {
  const pathname = new URL(pageUrl, siteOrigin).pathname;
  return lastmods.get(pathname) ?? lastmods.get(pathname.replace(/\/$/, '') || '/');
}
