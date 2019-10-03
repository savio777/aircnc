const mongoose = require('mongoose')

const SpotSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
})

module.exports = mongoose.model('Spots', SpotSchema)
