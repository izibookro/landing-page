import type { APIRoute, GetStaticPaths } from 'astro';
import {
  getOkfDocument,
  okfMarkdownHeaders,
  okfSlugs,
} from '../../lib/okf';

export const getStaticPaths = (() => {
  return okfSlugs
    .filter((slug) => slug !== 'index')
    .map((slug) => ({ params: { slug } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const slug = params.slug;
  if (!slug) {
    return new Response('Not found', { status: 404 });
  }
  const body = getOkfDocument(slug);
  if (!body) {
    return new Response('Not found', { status: 404 });
  }
  return new Response(body, { headers: okfMarkdownHeaders });
};
