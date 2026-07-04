import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getImage } from "astro:assets";

const topCategoryHrefs: Record<string, string> = {
	"bombilleria-led": "/productos/bombilleria-led",
	"bombilleria-halogena": "/productos/bombilleria-halogena",
};

export const GET: APIRoute = async () => {
	const products = await getCollection("products");

	const data = await Promise.all(
		products.map(async (product) => {
			const { name, brand, vehicleBrand, category, productType, image } = product.data;
			const href =
				category === "repuestos" || category === "accesorios"
					? `/productos/${category}/${productType}`
					: (topCategoryHrefs[category] ?? "/productos");

			const thumb = await getImage({ src: image, width: 64, height: 64 });

			return { name, brand: vehicleBrand ?? brand, href, thumb: thumb.src };
		})
	);

	return new Response(JSON.stringify(data), {
		headers: { "Content-Type": "application/json" },
	});
};
