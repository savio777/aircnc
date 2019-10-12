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
}, {
    toJSON: {
        virtuals: true
    }
})

SpotSchema.virtual('thumbnail_url').get(function () {
    return `http://localhost:7777/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spots', SpotSchema)
