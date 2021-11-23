const roomModel = require("../models/Room")
const reservationModel = require("../models/Reservation")

function createRoom(req, res) {
    roomModel.create(req.body)
    res.json("created")
}

function getAllRooms(req, res) {
    roomModel.find({}).populate("reservations").exec((err, data) => {
        if (err) throw err
        let newData = JSON.parse(JSON.stringify(data));
        reservationModel
            .find({room: {$in: newData.map(singleElement => singleElement._id)}})
            .exec((err2, data2) => {
                if (err2) throw err2
                for (let singleReservation in data2){
                    newData.find(findElement => {})
                }
            })
    })
}

function getSingleRoom(req, res) {
    roomModel.findById(req.params.roomId).populate("reservations").exec((err, data) => {
        if (err) throw err
        reservationModel.find({room:req.params.roomId}).exec((err2, data2) => {
            if (err2) throw err2
            let newData = JSON.parse(JSON.stringify(data));
            newData.reservations = data2
            res.json(newData)
        })

    })
}

function updateRoom(req, res) {
    roomModel.findByIdAndUpdate(req.params.roomId, {"$set": req.body}).exec((err) => {
        if (err) throw err
        res.json("updated")
    })
}

module.exports.createRoom = createRoom;
module.exports.getAllRooms = getAllRooms;
module.exports.getSingleRoom = getSingleRoom;
module.exports.updateRoom = updateRoom;
