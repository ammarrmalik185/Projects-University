const express = require("express");
const r = new express.Router()
const adminController = require("../controllers/adminController")

r.post("/room", adminController.createRoom)
r.get("/room", adminController.getAllRooms)
r.get("/room/:roomId", adminController.getSingleRoom)
r.put("/room/:roomId", adminController.updateRoom)


module.exports = r;
