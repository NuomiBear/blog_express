const express = require('express')
const app = express()
const port = 3000

app.get('/get', (req, res) => {
    console.log('Received request from:', req.headers.origin);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.send('get')
})

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
