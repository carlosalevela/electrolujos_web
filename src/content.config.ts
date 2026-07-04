import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const products = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./src/content/products" }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			brand: z.string(),
			vehicleBrand: z.string().optional(),
			category: z.enum(["bombilleria-led", "bombilleria-halogena", "repuestos", "accesorios"]),
			productType: z
				.enum([
					"espejos",
					"plumillas",
					"farolas",
					"stops",
					"tapetes",
					"silicona",
					"cera",
					"aromatizantes",
					"llaveros",
					"kit-carretera",
					"soporte-celular",
					"queso-taxi",
					"cargador-celular",
					"tejas",
					"cornetas",
					"exploradoras",
					"radios",
					"alarmas",
					"seguros-espejo",
				])
				.optional(),
			description: z.string(),
			image: image(),
		}),
});

export const collections = { products };
