const express = require('express')

const app = express()

const port = 7777

app.get('/', (req, res) => {
    res.send('hello world express:)')
    console.log('teste')
})

app.listen(port)
