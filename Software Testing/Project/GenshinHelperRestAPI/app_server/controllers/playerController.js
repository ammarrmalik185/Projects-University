const Player = require('../models/playerModel')
const Character = require('../models/characterModel')
const Artifact = require('../models/artifactModel')
const Weapon = require('../models/weaponModel')
const mongoose = require("mongoose");

//Player
module.exports.RegisterPlayer = function (req, res) {
    new Player(req.body).save().catch(e=>{})
    res.json("Resgistered!")
}

module.exports.GetPlayer = function (req, res) {
    Player.findOne({username: req.params.username}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.UpdatePlayer = function (req, res) {
    Player.findOne({username: req.params.username}, req.body).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}


//Characters
module.exports.GetAllCharacters = function (req, res) {
    Character.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.GetCharacter = function (req, res) {
    Character.findOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

//Weapons
module.exports.GetAllWeapons = function (req, res) {
    Weapon.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.GetWeapon = function (req, res) {
    Weapon.findOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.DeleteWeapon = function (req, res) {
    Weapon.deleteOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

//Artifacts
module.exports.GetAllArtifacts = function (req, res) {
    Artifact.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.GetArtifact = function (req, res) {
    Artifact.findOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}
