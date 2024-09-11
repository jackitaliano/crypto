import { Alphabet, DiFreq, TriFreq, UniFreq } from "./alphabets";

export function getCipherAlphabet(ciphertext: string): Alphabet {
	const chars = getChars(ciphertext);
	const uniFreq = getUniFrequencies(ciphertext);
	const diFreq = getDiFrequencies(ciphertext);
	const triFreq = getTriFrequencies(ciphertext);

	return {
		chars,
		uniFreq,
		diFreq,
		triFreq
	}
}

function getChars(ciphertext: string): Array<string> {
	const split = ciphertext.split("");
	const charSet = new Set(split);
	const chars = Array.from(charSet);

	const charsSorted = chars.sort();

	return charsSorted;
}

function getUniFrequencies(ciphertext: string): Array<UniFreq> {
	const uniMap = new Map<string, number>();
	for (let i = 0; i < ciphertext.length; i++) {
		const char: string = ciphertext[i];
		const currCount: number | undefined = uniMap.get(char);
		if (!currCount) {
			uniMap.set(char, 1);
			continue;
		}
		
		uniMap.set(char, currCount + 1);
	}

	const uniList = new Array<UniFreq>();
	let freqMax = 0;
	uniMap.forEach((freq, char) => {
		if (freq > freqMax) {
			freqMax = freq;
		}
		uniList.push({
			char,
			freq
		})
	})

	uniList.forEach((val, i) => {
		uniList[i] = {
			char: val.char,
			freq: val.freq / freqMax
		}
	})

	const uniListSorted = uniList.sort((a, b) => b.freq - a.freq);

	return uniListSorted;
}

function getDiFrequencies(ciphertext: string): Array<DiFreq> {
	const diMap = new Map<string, number>();
	for (let i = 0; i < ciphertext.length - 1; i++) {
		const char: string = ciphertext[i] + ciphertext[i + 1];
		const currCount: number | undefined = diMap.get(char);
		if (!currCount) {
			diMap.set(char, 1);
			continue;
		}
		
		diMap.set(char, currCount + 1);
	}

	const diMapSorted = new Map<string, number>([...diMap.entries()].sort((a, b) => b.freq - a.freq))

	const diList = new Array<DiFreq>();
	const diUsedSet = new Set<string>();
	let freqMax = 0;
	diMapSorted.forEach((freq: number, chars: string) => {
		const reversedChars = chars[1] + chars[0];
		const reversedFreq = diMap.get(reversedChars);

		if (diUsedSet.has(chars) || diUsedSet.has(reversedChars)) {
			return;
		}

		diUsedSet.add(chars);
		diUsedSet.add(reversedChars);

		if (freq > freqMax) {
			freqMax = freq;
		}

		diList.push({
			diF: {
				chars,
				freq
			},
			diR: {
				chars: reversedChars,
				freq: reversedFreq ? reversedFreq : 0
			}
		})
	})

	diList.forEach((val, i) => {
		diList[i] = {
			diF: {
				chars: val.diF.chars,
				freq: val.diF.freq / freqMax
			},
			diR: {
				chars: val.diR.chars,
				freq: val.diR.freq / freqMax
			}
		}
	})

	const diListSorted = diList.sort((a, b) => b.diF.freq - a.diF.freq);
	return diListSorted;
}

function getTriFrequencies(ciphertext: string): Array<TriFreq> {
	const triMap = new Map<string, number>();
	for (let i = 0; i < ciphertext.length - 2; i++) {
		const chars: string = ciphertext[i] + ciphertext[i + 1] + ciphertext[i + 2];
		const currCount: number | undefined = triMap.get(chars);
		if (!currCount) {
			triMap.set(chars, 1);
			continue;
		}
		
		triMap.set(chars, currCount + 1);
	}

	const triList = new Array<TriFreq>();
	let freqMax = 0;
	triMap.forEach((freq, chars) => {
		if (freq > freqMax) {
			freqMax = freq;
		}
		triList.push({
			chars,
			freq
		})
	})

	triList.forEach((val, i) => {
		triList[i] = {
			chars: val.chars,
			freq: val.freq / freqMax
		}
	})

	const triListSorted = triList.sort((a, b) => b.freq - a.freq);

	return triListSorted;
}
