const roomModel = require("../models/Room")

function createRoom(req, res) {
    roomModel.create(req.body)
    res.json("created")
}

function getAllRooms(req, res) {
    roomModel.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

function getSingleRoom(req, res) {
    roomModel.findById(req.params.roomId).exec((err, data) => {
        if (err) throw err
        res.json(data)
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
