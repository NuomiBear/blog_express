var http = require('http')

var app = http.createServer((req, res) => {
    res.writeHead(200, { "ContentType": "text/plain" })
    res.end("hello")
})

app.listen(3000, "localhost")

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("express")
})

app.listen(3000, () => {
    console.log("express")
})