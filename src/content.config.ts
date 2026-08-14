import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      pubDate: z.coerce.date(),
      image: image(),
      imageAlt: z.string().optional(),
      imageTitle: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const legal = defineCollection({
  loader: glob({ base: './src/content/legal', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subtitle: z.string().optional(),
    updatedDate: z.coerce.date(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, legal };
