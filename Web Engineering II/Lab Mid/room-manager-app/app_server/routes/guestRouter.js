const express = require("express");
const r = new express.Router()
const guestController = require("../controllers/guestController")

r.post("/register", guestController.registerGuest)
r.post("/reservation", guestController.createReservation)
r.get("/reservation/:reservationId", guestController.getReservation)
r.delete("/reservation/:reservationId", guestController.deleteReservation)

module.exports = r;
