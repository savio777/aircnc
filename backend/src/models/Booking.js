const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    spots: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spots'
    }

})

module.exports = mongoose.model('Bookings', BookingSchema)
