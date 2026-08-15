import type { APIRoute } from 'astro';
import { getOkfDocument, okfMarkdownHeaders } from '../../lib/okf';

/** Bundle root index — progressive disclosure for OKF consumers. */
export const GET: APIRoute = () => {
  const body = getOkfDocument('index');
  if (!body) {
    return new Response('Not found', { status: 404 });
  }
  return new Response(body, { headers: okfMarkdownHeaders });
};
