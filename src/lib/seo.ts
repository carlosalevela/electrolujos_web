export function categoryTitle(label: string): string {
	return `${label} para Carro en Pasto | Electrolujos`;
}

export function categoryDescription(label: string): string {
	return `${label} para tu vehículo en Pasto, Nariño. Encuéntralos en Electrolujos, La Bodega de los Espejos — repuestos y accesorios para carro con entrega e instalación.`;
}

export function productTitle(name: string): string {
	return `${name} en Pasto, Nariño | Electrolujos`;
}

export function productDescription(
	description: string,
	brand: string,
	vehicleBrand?: string
): string {
	const compat = vehicleBrand ? ` Compatible con vehículos ${vehicleBrand}.` : "";
	return `${description} Marca ${brand}.${compat} Disponible en Electrolujos, Pasto, Nariño — consulta precio y disponibilidad por WhatsApp.`;
}

const productTypeInfo: Record<string, string> = {
	tejas:
		"Las tejas o deflectores de viento se instalan en la parte superior de las ventanas y permiten mantenerlas parcialmente abiertas incluso con lluvia, mejorando la ventilación del habitáculo sin que entre agua. Se sujetan con cinta adhesiva de alta resistencia, sin necesidad de taladrar la carrocería, y ayudan a reducir el ruido del viento en carretera.",
	"seguros-espejo":
		"Los seguros de espejo son una pieza plástica que se instala en el espejo retrovisor exterior para evitar el robo de la luna (el cristal) del espejo, sujetándola firmemente a la carcasa. Se ajustan a la carcasa original del vehículo, sin modificaciones.",
	tapetes:
		"Los tapetes protegen el piso original del vehículo del desgaste, la humedad y la suciedad diaria. Vienen en juego de varias piezas, cortados a la medida del modelo del vehículo, en un material resistente y fácil de limpiar.",
	espejos:
		"Espejo retrovisor de repuesto para reemplazar la unidad original dañada, rota o robada. Se instala en el punto de anclaje original del vehículo, sin modificaciones, y está disponible para lado izquierdo o derecho según referencia.",
	"bombilleria-halogena":
		"Bombillo halógeno de repuesto para el sistema de iluminación del vehículo (parqueo, freno, direccionales o luces altas/bajas). Se instala directamente en el portabombillo original, sin adaptadores adicionales.",
	"bombilleria-led":
		"La conversión a LED ofrece mayor luminosidad y menor consumo eléctrico frente a la bombillería halógena tradicional, además de una vida útil más larga. Recomendamos hacer la instalación en tienda para verificar la polaridad y evitar fallos en el sistema eléctrico del vehículo.",
	plumillas:
		"Las plumillas limpian el parabrisas de agua, polvo y suciedad para mantener buena visibilidad al conducir. Se recomienda cambiarlas cada 6 a 12 meses, o antes si empiezan a dejar rayas o a vibrar sobre el vidrio.",
	exploradoras:
		"Las exploradoras o luces auxiliares se instalan en el paragolpes delantero para mejorar la visibilidad en condiciones de niebla, lluvia o carretera oscura, y se conectan al sistema eléctrico del vehículo.",
	farolas:
		"Farola o proyector de repuesto para el sistema de iluminación delantera del vehículo. Se instala en el lugar de la unidad original y es compatible con distintos tipos de bombillo.",
	cornetas:
		"Las cornetas hacen parte del sistema de aviso sonoro del vehículo y se conectan directamente al sistema eléctrico original. Algunas referencias ofrecen doble tono para mayor alcance del sonido.",
	alarmas:
		"Sistema de alarma o aviso sonoro de fácil instalación en el sistema eléctrico del vehículo, útil para prevenir golpes al reversar o para reforzar la seguridad, según el tipo de referencia.",
	radios: "Radio o reproductor de audio para el tablero del vehículo. Se instala en el hueco estándar del tablero (1 DIN o 2 DIN) y admite distintas fuentes de audio según la referencia.",
	silicona:
		"Ideal para el mantenimiento periódico del interior y exterior del vehículo, protegiendo las superficies plásticas y de caucho de la resequedad y los rayos UV.",
};

export function productTypeIntro(productType?: string): string | undefined {
	return productType ? productTypeInfo[productType] : undefined;
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
