import { defineCollection, z } from 'astro:content';

const cursos = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    slug: z.string().optional(), // Si no se incluye, podemos generar uno dinámicamente.
  }),
});

export const collections = {
  cursos,
};