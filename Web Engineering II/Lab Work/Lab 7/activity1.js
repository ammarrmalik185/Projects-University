const express = require("express")
const mongoose = require("mongoose")

let heroDatabaseSchema = new mongoose.Schema({
    _id: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    Abilities: [
        {
            name:{
                type:String,
                required:true
            },
            maxLevel:{
                type:Number,
                min: 1
            },


        }
    ],
    BaseStats: {
        Strength: Number,
        Agility: Number,
        Intelligence: Number,
        Health: Number,
        Mana: Number,
        Armor: Number,
        Damage: Number,
    }
});
let itemDatabaseSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    cost:Number,
})
let playerDatabaseSchema = new mongoose.Schema({
    name:String,
    playingHero:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'heroData'
    },
    currentLevel:{
        type:Number,
        min: 1,
        max: 30
    }
})

let playerModel = mongoose.model('playerData', playerDatabaseSchema)
let heroModel = mongoose.model('heroData', heroDatabaseSchema)
let itemModel = mongoose.model('itemData', itemDatabaseSchema)
