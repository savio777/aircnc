const express = require('express')

const app = express()

const port = 7777

// servidor aceitar requisições json
app.use(express.json())

// LINGUAGEM DA WEB
// GET, POST, PUT, DELETE

// teste query ex: '?name=blabla'
app.get('/test', (req, res) => {
    res.json({ name: req.query.name })
    console.log('oi:)')
})

// teste body e params 
app.put('/test/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: req.body.name
    })
    console.log('oi:)')
})

app.post('/test', (req, res) => {
    res.json({ name: req.body.name })
    console.log('oi:)')
})

app.listen(port, () => {
    console.log(`server is running in localhost:${port}`)
})
