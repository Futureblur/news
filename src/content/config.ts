import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		draft: z.boolean().optional(),
		type: z.string(),
		cover: image().refine((img) => img.width >= 1080, {
			message: "Cover image must be at least 1080px wide",
		}),
		coverDescription: z.string(),
		url: z.string(),
	}),
});

export const collections = {blog};
