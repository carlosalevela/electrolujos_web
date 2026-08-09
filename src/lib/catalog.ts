import type { CollectionEntry } from "astro:content";

const repuestosSubcategories = [
	{ id: "espejos", label: "Espejos" },
	{ id: "plumillas", label: "Plumillas" },
	{ id: "exploradoras", label: "Exploradoras" },
	{ id: "farolas", label: "Farolas" },
	{ id: "stops", label: "Stops" },
] as const;

const accesoriosSubcategories = [
	{ id: "tapetes", label: "Tapetes" },
	{ id: "tejas", label: "Tejas" },
	{ id: "seguros-espejo", label: "Seguros de Espejo" },
	{ id: "cornetas", label: "Cornetas" },
	{ id: "radios", label: "Radios" },
	{ id: "alarmas", label: "Alarmas" },
	{ id: "silicona", label: "Silicona" },
	{ id: "cera", label: "Cera" },
	{ id: "aromatizantes", label: "Aromatizantes" },
	{ id: "llaveros", label: "Llaveros" },
	{ id: "kit-carretera", label: "Kit de carretera" },
	{ id: "soporte-celular", label: "Soporte celular" },
	{ id: "queso-taxi", label: "Queso taxi" },
	{ id: "cargador-celular", label: "Cargador celular" },
] as const;

export function productUrl(product: CollectionEntry<"products">): string {
	const { category, productType } = product.data;
	if (category === "bombilleria-led" || category === "bombilleria-halogena") {
		return `/productos/${category}/${product.id}`;
	}
	return `/productos/${category}/${productType}/${product.id}`;
}

export type SidebarItem = {
	id: string;
	label: string;
	href: string;
	count: number;
	active: boolean;
};

export type SidebarSection = SidebarItem & {
	subitems?: SidebarItem[];
};

function buildSubcategory(
	allProducts: CollectionEntry<"products">[],
	category: string,
	subcategories: readonly { id: string; label: string }[],
	activeCategory: string,
	activeSubcategory?: string
) {
	const countSub = (id: string) =>
		allProducts.filter((p) => p.data.category === category && p.data.productType === id).length;

	const firstAvailable = subcategories.find((s) => countSub(s.id) > 0)?.id ?? subcategories[0].id;

	return {
		href: `/productos/${category}/${firstAvailable}`,
		subitems: subcategories.map((s) => ({
			id: s.id,
			label: s.label,
			href: `/productos/${category}/${s.id}`,
			count: countSub(s.id),
			active: activeCategory === category && activeSubcategory === s.id,
		})),
	};
}

export function buildSidebar(
	allProducts: CollectionEntry<"products">[],
	activeCategory: string,
	activeSubcategory?: string
): SidebarSection[] {
	const countCategory = (id: string) => allProducts.filter((p) => p.data.category === id).length;

	const repuestos = buildSubcategory(allProducts, "repuestos", repuestosSubcategories, activeCategory, activeSubcategory);
	const accesorios = buildSubcategory(
		allProducts,
		"accesorios",
		accesoriosSubcategories,
		activeCategory,
		activeSubcategory
	);

	return [
		{
			id: "bombilleria-led",
			label: "Bombillería LED",
			href: "/productos/bombilleria-led",
			count: countCategory("bombilleria-led"),
			active: activeCategory === "bombilleria-led",
		},
		{
			id: "bombilleria-halogena",
			label: "Bombillería Halógena",
			href: "/productos/bombilleria-halogena",
			count: countCategory("bombilleria-halogena"),
			active: activeCategory === "bombilleria-halogena",
		},
		{
			id: "repuestos",
			label: "Repuestos",
			href: repuestos.href,
			count: countCategory("repuestos"),
			active: activeCategory === "repuestos",
			subitems: repuestos.subitems,
		},
		{
			id: "accesorios",
			label: "Accesorios",
			href: accesorios.href,
			count: countCategory("accesorios"),
			active: activeCategory === "accesorios",
			subitems: accesorios.subitems,
		},
	];
}
