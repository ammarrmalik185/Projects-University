var express = require('express');
var mongoose = require('mongoose')
var router = express.Router();

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

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.connect('mongodb://localhost:27017/lab6and7db', function (err, db) {
    if (err) throw err;
    console.log('Successfully connected');

    playerModel
        .find()
        .sort({name: 1})
        .select({_id: 0, __v: 0})
        .populate({
          path: 'playingHero',
          select: '-_id name Abilities BaseStats'
        })
        .exec((err, heroData) => {
              if (err) throw err;
              res.render('index', {title: 'Ammar is Noob', data: JSON.stringify(heroData)});
              console.log(heroData);
              mongoose.connection.close();
            }
        )
  });
});

module.exports = router;
