const express = require('express')

const router = express.Router()

const SessionControlller = require('./controllers/SessionController')

router.post('/sessions', SessionControlller.store)

module.exports = router
