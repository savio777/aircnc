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
    //return `http://localhost:5555/files/${this.thumbnail}`
    return `http://192.168.0.107:5555/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spots', SpotSchema)
