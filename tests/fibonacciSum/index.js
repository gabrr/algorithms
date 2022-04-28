function sumFibs(num) {
  return [...Array(num)].reduce((acc, _, i) => {
		if (i === 0 || i === 1) return [...acc, 1]
		const fib = acc[i - 1] + acc[i - 2]
		if (i > 1 && fib <= num) return [...acc, fib]
		return acc
	}, []).reduce((prev, value) => prev + value, 0)
}

module.exports = sumFibs(10);