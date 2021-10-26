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

mongoose.connect('mongodb://localhost:27017/lab6and7db', function (err, db) {
    if (err) throw err;
    console.log('Successfully connected');

    playerModel
        .find()
        .sort({name: 1})
        .select({_id:0, __v:0})
        .populate({
            path:'playingHero',
            select: '-_id name Abilities BaseStats'
        })
        .exec((err, heroData) => {
                if (err) throw err;
                console.log(heroData);
            }
        )

    // playerModel.insertMany([{
    //     name:"Ammar",
    //     playingHero: "dragon_knight",
    //     currentLevel: 4
    // }], err => {
    //     if (err) throw err;
    //     mongoose.connection.close();
    // })

    // let dragon_knight = new heroModel({
    //     _id : "dragon_knight",
    //     name: "Dragon Knight",
    //     Abilities: [
    //         {name: "Dragon Breath", maxLevel: 4},
    //     ],
    //     BaseStats:{
    //         Strength: 4,
    //         Agility: 5,
    //         Intelligence: 3,
    //         Health: 2,
    //         Mana: 1,
    //         Armor: 2,
    //         Damage: 3,
    //     }
    // })
    // dragon_knight.save(err=>{
    //     if (err) throw err;
    //     console.log("Record Saved")
    //     mongoose.connection.close();
    // })

    // heroModel.insertMany([
    //     {
    //         _id:"zuus",
    //         name: "Zues",
    //         Abilities: [
    //             {name: "Lightning Strike", maxLevel: 4}
    //         ],
    //         BaseStats: {
    //             Strength: 2,
    //             Agility: 3,
    //             Intelligence: 4,
    //             Health: 5,
    //             Mana: 6,
    //             Armor: 1,
    //             Damage: 2,
    //         }
    //     }
    // ], err=>{
    //     if (err) throw err
    //     console.log("Documents Inserted")
    // })




})
