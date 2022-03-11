//There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

//Example
//input (9, [10 20 20 10 10 30 50 10 20])
//output expected 3

//There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
	// Write your code here
	const group = {}
	
	ar.forEach(value => {
		(group[value] instanceof Array) ? group[value].push(value) : group[value] = [value]
	})
	
	const pairsCount = Object.entries(group).reduce((prev, [_, currentValue]) => {
		return prev + Math.floor(currentValue.length / 2)
	}, 0)
	
	return pairsCount
}


// some dude code
function sockMerchant2(n, ar) {
	const n = 9
	const c = [10, 20, 20, 10, 10, 30, 50, 10, 20]

	const color = new Set() 

	let pairs = 0;

	for (let i = 0; i < n; i++) {
			if (!color.has(c[i])) {
					color.add(c[i]);
			} else {
					pairs++;
					color.delete(c[i]);
			}
	}
}

//Time Complexity: O(n)
//Space Complexity: O(n)
