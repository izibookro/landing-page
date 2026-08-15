import type { APIRoute } from 'astro';

/**
 * AI visibility policy:
 * - Allow search/citation bots (ChatGPT, Gemini/AI Overviews, Claude, Perplexity, Bing/Copilot, Apple).
 * - Refuse model training via Content-Signal ai-train=no.
 * - Block training-only scrapers (CCBot, Bytespider).
 *
 * Cloudflare "Managed robots" may still Disallow GPTBot / Google-Extended / etc.
 * Align AI Crawl Control in the Cloudflare dashboard with this file, or those
 * Disallows override citation eligibility on the live edge.
 */
const getRobotsTxt = (sitemapURL: URL) => `# IziBook robots — AI citation allowed, training refused
User-agent: *
Content-Signal: search=yes,ai-train=no,ai-input=yes
Allow: /

# AI search / citation bots
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot-Extended
Allow: /

# Training-only crawlers (no citation benefit)
User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
