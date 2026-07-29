import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sourceSchema = z.object({
  label: z.string().trim().min(1),
  url: z.url().optional(),
  note: z.string().trim().optional(),
});

const writing = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/writing',
  }),
  schema: z
    .object({
      title: z.string().trim().min(1).max(180),
      description: z.string().trim().min(1).max(360),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      author: z.literal('RIMO').default('RIMO'),
      language: z.string().trim().min(2).max(12).default('en'),
      kind: z
        .enum(['essay', 'note', 'review', 'fragment', 'link'])
        .default('essay'),
      topics: z.array(z.string().trim().min(1)).default([]),
      tags: z.array(z.string().trim().min(1)).default([]),
      period: z.string().trim().optional(),
      places: z.array(z.string().trim().min(1)).default([]),
      terms: z.array(z.string().trim().min(1)).default([]),
      sources: z.array(sourceSchema).default([]),
      discussion: z.url().optional(),
      featured: z.boolean().default(false),
      start_here: z.boolean().default(false),
      draft: z.boolean().default(false),
    })
    .superRefine((entry, context) => {
      if (entry.updated && entry.updated.getTime() < entry.date.getTime()) {
        context.addIssue({
          code: 'custom',
          message: 'updated cannot be earlier than date',
          path: ['updated'],
        });
      }
    }),
});

export const collections = { writing };
