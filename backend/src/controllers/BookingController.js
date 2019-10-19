const Booking = require('../models/Booking')

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers
        const { spot_id } = req.params
        const { date } = req.body

        const booking = await Booking.create({
            users: user_id,
            spots: spot_id,
            date
        })

        await booking.populate('spots').populate('users').execPopulate()

        return res.json(booking)
    }
}
