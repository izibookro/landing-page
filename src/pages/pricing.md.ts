import type { APIRoute } from 'astro';
import { plans } from '../data/plans';
import { site } from '../data/site';

/**
 * Machine-readable pricing for AI agents (see AI SEO /pricing.md guidance).
 * Keep in sync with src/data/plans.ts and /preturi.
 */
const getPricingMd = () => {
  const planBlocks = plans
    .map((plan) => {
      const features = plan.features.map((f) => `  - ${f}`).join('\n');
      const popular = plan.popular ? '\n- Badge: Popular' : '';
      return `## ${plan.name}

- Price: ${plan.price} RON/month
- Billing period: monthly
- Currency: RON
- Audience: ${plan.description}${popular}
- Employees: ${plan.employees}
- Limits / included:
${features}`;
    })
    .join('\n\n');

  return `# Pricing — ${site.name}

> Software de management pentru saloane de infrumusetare. Preturi in RON, facturate lunar. Fara costuri ascunse.

## Trial

- Duration: 10 days
- Cost: free
- Access: full system during trial
- Start: ${site.apps.web.onboarding}

## Plans

${planBlocks}

## Notes

- Prices shown are monthly (RON / pe luna), matching ${site.url}/preturi
- All listed plans include unlimited online bookings, WhatsApp bookings with Fane AI, in-app notifications, client/employee management, unlimited services, and financial reporting (within the employee limit of the plan)
- Contact: ${site.email}
- Human-readable pricing page: ${site.url}/preturi
- Product overview for AI agents: ${site.url}/llms.txt
`;
};

export const GET: APIRoute = () => {
  return new Response(getPricingMd(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
