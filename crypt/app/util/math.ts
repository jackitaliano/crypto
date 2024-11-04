
// credit: geeksforgeekso
// figured a factors function would be okay
// to take from elsewhere
export function findFactors(num: number) { 
	let factors = []; 
	for (let i = 1; i <= Math.sqrt(num); i++) { 
		if (num % i === 0) { 
			factors.push(i); 
			if (i !== num / i) { 
				factors.push(num / i); 
			} 
		} 
	} 
	return factors.sort((a, b) => a - b); 
} 

