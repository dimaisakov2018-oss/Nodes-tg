import { defineCollection, z } from 'astro:content';

const base = {
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    draft: z.boolean().optional(),
  }),
};

export const collections = {
  ru: defineCollection({ type: 'content', ...base }),
  en: defineCollection({ type: 'content', ...base }),
};
