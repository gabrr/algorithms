const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('public'))


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

console.log(sockMerchant(2, [2, 4]))


app.get('/', (req, res) => res.sendFile(path.join(__dirname, "public/index.html")))
app.listen(3000, () => console.log(`App is running on port: 3000`))