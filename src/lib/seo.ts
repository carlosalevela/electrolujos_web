export function categoryTitle(label: string): string {
	return `${label} para Carro en Pasto | Electrolujos`;
}

export function categoryDescription(label: string): string {
	return `${label} para tu vehículo en Pasto, Nariño. Encuéntralos en Electrolujos, La Bodega de los Espejos — repuestos y accesorios para carro con entrega e instalación.`;
}

type CategoryGroup = "repuestos" | "accesorios" | "bombilleria";

export function categoryIntro(label: string, group: CategoryGroup): string {
	const item = label.charAt(0).toLowerCase() + label.slice(1);

	if (group === "repuestos") {
		return `En Electrolujos encuentras ${item} para tu carro en Pasto, Nariño, con distintas marcas y referencias disponibles en tienda. Te asesoramos para elegir la pieza correcta según el modelo de tu vehículo y, si lo necesitas, te ayudamos con la instalación en el local.`;
	}
	if (group === "bombilleria") {
		return `En Electrolujos ofrecemos ${item} para tu carro en Pasto, Nariño, con distintas potencias y conectores según el modelo de tu vehículo. Te ayudamos a elegir la referencia correcta y la instalamos en el local.`;
	}
	return `Encuentra ${item} para tu carro en Electrolujos, en Pasto, Nariño. Tenemos variedad de marcas y precios para darle un mejor acabado y comodidad a tu vehículo.`;
}
