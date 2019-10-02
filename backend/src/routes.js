const express = require('express')

const router = express.Router()

// LINGUAGEM DA WEB
// GET, POST, PUT, DELETE

// teste query ex: '?name=blabla'
router.get('/test', (req, res) => {
    res.json({ name: req.query.name })
    console.log('oi:)')
})

// teste body e params 
router.put('/test/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: req.body.name
    })
    console.log('oi:)')
})

router.post('/test', (req, res) => {
    res.json({ name: req.body.name })
    console.log('oi:)')
})


module.exports = router
