import { getSubstitutionOver } from "./substitution";

function getShiftMap(alphabet: string, shift: number): Map<string, string> {
	const map = new Map;

	for (let i = 0; i < alphabet.length; i++) {

		const char = alphabet[i];
		const val = alphabet[(i + shift) % alphabet.length]

		map.set(char, val);
	}

	return map;
}

function getKeyedMap(alphabet: string, key: string): Map<string, string> {
	const map = new Map;

	let j = 0;
	for (let i = 0; i < key.length; i++) { 
		map.set(alphabet[j], key[i])
		j++;
	}

	for (let i = 0; i < alphabet.length; i++) {
		if (i >= alphabet.length) {
			break;
		}

		const char = alphabet[i];
		if (!key.includes(char)) {
			map.set(char, alphabet[j])
		}
	}

	return map;
}

export function shiftMsgRange(text: string, shiftRange: [number, number], alphabet: string): Array<string> {
	const shiftMaps: Array<Map<string,string>> = [];
	for (let i = shiftRange[0]; i < shiftRange[1]; i++) {
		shiftMaps.push(getShiftMap(alphabet, i));
	}

	const shiftedTexts = getSubstitutionOver(text, shiftMaps);

	return shiftedTexts;
}

export function enumerateShift(text: string, alphabet: string): Array<string> {
	const shiftRange: [number, number] = [0, alphabet.length];

	const texts = shiftMsgRange(text, shiftRange, alphabet);

	return texts;
}
