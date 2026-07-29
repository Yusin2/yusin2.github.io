import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const archive = defineCollection({
  loader: glob({ base: "./src/content/archive", pattern: "*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date()
  })
});

export const collections = { archive };
