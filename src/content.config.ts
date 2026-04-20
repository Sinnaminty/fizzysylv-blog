import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    subtitle: z.string().optional(),
  }),
});

export const collections = { blog };
