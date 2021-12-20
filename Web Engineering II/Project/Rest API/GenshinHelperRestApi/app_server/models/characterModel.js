const mongoose = require('mongoose')
const characterSchema = mongoose.Schema({
    id: String,
    name: String,
    icon: String,
    imagine: String,
    squareCard: String,
    tier: String,
    rarity: {
        min: 3,
        max: 5,
        type: Number
    },
    weapon: String,
    element: String,
    description: String,
    region: String,
    title: String,
    constellation: String,
    faction: String,
    talents: [
        {
            id: String,
            name: String,
            description: String,
            image: String,

        }
    ],
    constellations: [
        {
            id: String,
            name: String,
            order: Number,
            description: String,
            image: String,
        }
    ]
})

const Character = mongoose.model('Character', characterSchema)
mongoose.connect('mongodb://localhost:27017/GenshinHelper', (error => {if (error) throw error}))

module.exports = Character