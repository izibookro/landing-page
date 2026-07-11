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
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
