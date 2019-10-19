const express = require('express')

const router = express.Router()

const SessionControlller = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DasboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const multer = require('multer')
const uploadConfig = require('./config/upload')

const upload = multer(uploadConfig)

//test
router.get('/', (req, res) => {
    res.send(':)')
})

// sessions
router.post('/sessions', SessionControlller.store)

// spots
router.post('/spots', upload.single('thumbnail'), SpotController.store)
router.get('/spots', SpotController.index)

// dashboard
router.get('/dashboard', DasboardController.show)

// bookings
router.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = router
