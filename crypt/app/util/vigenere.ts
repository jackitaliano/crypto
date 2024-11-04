import { findFactors } from "./math";

function findRepsLen(ciphertext: string, charLen: number): Map<string, number> {
	const charsReps = new Map<string, number>();

	for (let i = 0; i < ciphertext.length; i++) {
		if (i + charLen >= ciphertext.length) {
			break;
		}

		const intervalChars = ciphertext.substring(i, i + charLen);
		let currCount = charsReps.get(intervalChars);

		if (!currCount) {
			currCount = 0;
		}

		const newCount = currCount + 1;
		charsReps.set(intervalChars, newCount);
	}

	return charsReps;
}

function findReps(ciphertext: string, charLens: Array<number>): Array<Map<string, number>> {
	const reps = charLens.map((charLen) => findRepsLen(ciphertext, charLen));

	return reps;
}

function sortAndTakeTopMap(map: Map<string, number>, n: number, sortFunc: Function): Array<[string, number]> {
	const entries = [ ...map.entries() ];
	const sorted = entries.sort(sortFunc);
	const greaterThanOne = sorted.filter((entry) => entry[1] > 2);

	const topN = greaterThanOne.slice(0, n);

	return topN;
}

/*
 * return: [
 * 	[
 * 		["ab", 2],
 * 		["bc", 2],
 * 		["cd", 1],
 * 	],
 * 	[
 * 		["abc", 3],
 * 		["bcd", 2],
 * 		["cde", 2],
 * 	]
 * ]
 */
export function findTopReps(ciphertext: string, charLens: Array<number>): Array<Array<[string,number]>> {

	const repsByCharLen = findReps(ciphertext, charLens);

	const n = 10;
	const topNRepsByCarLen = repsByCharLen.map((repMap) => sortAndTakeTopMap(repMap, n, (a, b) =>  b[1] - a[1]));

	return topNRepsByCarLen;
}

export function findCharsRepDistances(ciphertext: string, chars: string): Array<number> {
	const distances = new Array<number>();

	let currStart = -1;
	const charLen = chars.length;
	for (let i = 0; i < ciphertext.length; i++) {
		if (i + charLen > ciphertext.length) {
			break;
		}

		const currChars = ciphertext.substring(i,i+charLen);
		if (currChars != chars) {
			continue;
		}

		if (currStart < 0) {
			currStart = i;
			continue;
		}

		const distance = i - currStart;
		distances.push(distance);
		currStart = i;
	}

	const sortedDistances = distances.sort();
	return sortedDistances;
}

function findCharsRepsDistances(ciphertext: string, chars: Array<string>): [string,Array<number>] {
	const repsDistances = chars.map((char) => [char, findCharsRepDistances(ciphertext, char)]);

	return repsDistances;
}

export function findCharLenRepsDistances(ciphertext: string, reps: Array<Array<[string,number]>>): Array<[string,Array<number>]>{
	const repsByCharLen = reps.map((charLenReps) => 
		findCharsRepsDistances(ciphertext, charLenReps.map((c) => c[0]))
	);

	return repsByCharLen;
}

function findCharsRepsDistancesFactors(charDistances: Array<[string, Array<number>]>): Array<[string, Array<number>]> {
	const distancesFactors = charDistances.map((pair) => {
		const chars = pair[0];
		const distances = pair[1]
		const charFactors =	distances.map((dist) => findFactors(dist));

		const allFacs = new Map<string,number>();

		charFactors.forEach((facs) => {
			facs.forEach((fac) => {
				const currCount = allFacs.get(fac.toString()) || 0;
				allFacs.set(fac.toString(), currCount + 1);
			})
		})
		const facEntries = [...allFacs.entries()];
		const commonAllFacs = facEntries.filter((pair) => pair[1] === charFactors.length);
		const commonFacs = commonAllFacs.map((pair) => parseInt(pair[0]));

		return [chars, commonFacs];
	})

	return distancesFactors;
}

export function findCharLenRepsDistanceFactors(distances: Array<Array<[string, Array<number>]>>): Array<Array<[string,Array<number>]>>{
	const factorsByCharLen = distances.map((charLenDists) =>
		findCharsRepsDistancesFactors(charLenDists)
	);

	return factorsByCharLen;
}
