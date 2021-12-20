const Player = require('../models/playerModel')
const Character = require('../models/characterModel')
const Artifact = require('../models/artifactModel')
const Weapon = require('../models/weaponModel')
const mongoose = require("mongoose");

//Characters
module.exports.PostMultipleCharacters = function (req, res) {
    Character.insertMany(req.body)
        .exec((err, data) => {
            if (err) throw err
            res.json(data)
    })
}

module.exports.PostCharacter = function (req, res) {
    new Character(req.body).save()
    res.json("Added!")
}

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

module.exports.UpdateCharacter = function (req, res) {
    Character.findOne({id: req.params.id}, req.body).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.DeleteCharacter = function (req, res) {
    Character.deleteOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

//Weapons
module.exports.PostMultipleWeapons = function (req, res) {
    Weapon.insertMany(req.body)
        .exec((err, data) => {
            if (err) throw err
            res.json(data)
    })
}

module.exports.PostWeapon = function (req, res) {
    new Weapon(req.body).save()
    res.json("Added!")
}

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

module.exports.UpdateWeapon = function (req, res) {
    Weapon.findOne({id: req.params.id}, req.body).exec((err, data) => {
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
module.exports.PostMultipleArtifacts = function (req, res) {
    Artifact.insertMany(req.body)
        .exec((err, data) => {
            if (err) throw err
            res.json(data)
    })
}

module.exports.PostArtifact = function (req, res) {
    new Artifact(req.body).save()
    res.json("Added!")
}

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

module.exports.UpdateArtifact = function (req, res) {
    Artifact.findOne({id: req.params.id}, req.body).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.DeleteArtifact = function (req, res) {
    Artifact.deleteOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.GetAllArtifactSets = function (req, res) {
    Artifact.aggregate().group({
        _id: "$artifactSet.id",
        name: {$first: "$artifactSet.name"},
        maxRarity: {$first: "$artifactSet.maxRarity"},
        twoPieceBonus: {$first: "$artifactSet.twoPieceBonus"},
        fourPieceBonus: {$first: "$artifactSet.fourPieceBonus"},
        artifacts: { $push:  {
                id: "$id",
                name: "$name",
                type: "$type",
                rarity: "$rarity",
                description: "$description",
                lore: "$lore",
                location: "$location",
                image: "$image"
            }
        }
    }).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

module.exports.GetArtifactSet = function (req, res) {
    Artifact.aggregate().group({
        _id: "$artifactSet.id",
        name: {$first: "$artifactSet.name"},
        maxRarity: {$first: "$artifactSet.maxRarity"},
        twoPieceBonus: {$first: "$artifactSet.twoPieceBonus"},
        fourPieceBonus: {$first: "$artifactSet.fourPieceBonus"},
        artifacts: { $push:  {
                id: "$id",
                name: "$name",
                type: "$type",
                rarity: "$rarity",
                description: "$description",
                lore: "$lore",
                location: "$location",
                image: "$image"
            }
        }
    }).match({_id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}
