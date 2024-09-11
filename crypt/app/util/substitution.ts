export function getSubstitution(text: string, subMap: Map<string, string>): string {
	let substituted = "";

	for (let i = 0; i < text.length; i++) {
		let substitution: string | undefined = subMap.get(text[i]);

		if (!substitution) {
			substitution = "<INV_CHAR>";
		}

		substituted += substitution;
	}

	return substituted;
}

export function getSubstitutionOver(text: string, subMaps: Array<Map<string, string>>): Array<string> {
	const subs: Array<string> = [];

	subMaps.forEach((subMap) => {
		const sub = getSubstitution(text, subMap);
		subs.push(sub);
	})

	return subs;
}
