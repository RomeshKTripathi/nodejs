
const express = require('express')
const path = require('path')

const app = express();
const PORT = 4500

const dirPath = path.join(__dirname, "html")
// console.log(dirPath)


app.use(express.static(dirPath))
app.listen(PORT)
