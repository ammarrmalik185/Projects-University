const guestModel = require("../models/Guest");
const reservationModel = require("../models/Reservation");
const roomModel = require("../models/Room")

function registerGuest(req, res) {
    guestModel.create(req.body)
    res.json("created")
}

function createReservation(req, res) {
    const reservation = new reservationModel(req.body)
    reservation.save();
    roomModel.findByIdAndUpdate(req.body.room, {"$push": {reservations: reservation._id}})
    res.json({created:true, _id: reservation._id})
}

function getReservation(req, res) {
    console.log(req.params.reservationId)
    reservationModel.findById(req.params.reservationId)
        .populate("room")
        .populate("customer")
        .exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

function deleteReservation(req, res) {
    reservationModel.findByIdAndDelete(req.params.reservationId).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.registerGuest = registerGuest;
module.exports.createReservation = createReservation;
module.exports.getReservation = getReservation;
module.exports.deleteReservation = deleteReservation;
