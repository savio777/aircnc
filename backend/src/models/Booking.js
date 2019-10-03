const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spots',
        required: true
    }

})

module.exports = mongoose.model('Bookings', BookingSchema)
