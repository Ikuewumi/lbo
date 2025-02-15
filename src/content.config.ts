import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const app = defineCollection({
  loader: glob({
	pattern: "**/*.json",
	base: "./src/data/app"
  }),
  schema: z.object({
	name: z.string(),
	message: z.string(),
	home_images: z.array(z.string()),
	links: z.object({
	  email: z.string().url(),
	  whatsapp: z.string().url(),
	  x: z.string().url(), 
	})	
  })
})

const work = defineCollection({
   loader: glob({
	pattern: "**/*.json",
	base: "./src/data/work"
  }),
  schema: z.object({ 
	name: z.string(),
	description: z.string(),
	createdAt: z.string(),
	url: z.string()	
  })
})


export const collections = { app, work }
