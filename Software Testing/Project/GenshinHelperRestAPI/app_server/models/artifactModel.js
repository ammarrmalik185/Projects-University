const mongoose = require('mongoose')
const artifactSchema = mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    rarity: {
        min: 1,
        max: 5,
        type: Number
    },
    description: String,
    lore: String,
    location: String,
    image: String,
    artifactSet:{
       id: String,
       name: String,
       maxRarity: {
        min: 1,
        max: 5,
        type: Number
        },
       twoPieceBonus: String,
       fourPieceBonus: String
    }
})

const Artifact = mongoose.model('Artifact', artifactSchema)
mongoose.connect('mongodb://localhost:27017/GenshinHelper', (error => {if (error) throw error}))

module.exports = Artifact