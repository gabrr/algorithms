/*
sample input 
4
1 2 3 4 5

sample output:
5 1 2 3 4

explanantion:
1 2 3 4 5 > 2 3 4 5 1 > 3 4 5 1 2 > 4 5 1 2 3 > 5 1 2 3 4.
*/

/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a, d) {
	// Write your code here
	const newArrayPositions = {}
	
	for (let i = 0; i < a.length; i++) {
			const stepsLeft = (i - d)
			const isOverFlowing = (i - d) < -d
			const newIndex = isOverFlowing ? Math.abs((i - d) + d) : stepsLeft
			newArrayPositions[newIndex] = a[i]
	}
	
	return Object.entries(newArrayPositions)
			.map(([_, number]) => number)
}