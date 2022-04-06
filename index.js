const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('public'))
const { removing } = require('./tests/removeEmptyValues')

console.log("result: ", removing.result)


app.get('/', (req, res) => res.sendFile(path.join(__dirname, "public/index.html")))
app.listen(3000, () => console.log(`App is running on port: 3000`))