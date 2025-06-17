import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            author: z.string(),
            title: z.string(),
            cover: image(),
            summary: z.string(),
        }),
});

export const collections = {
    projects: projectCollection,
}; 1``