const mongoose = require('mongoose')
const weaponSchema = mongoose.Schema({
    id: String,
    name: String,
    type: String,
    rarity: Number,
    baseAtk: Number,
    subStatType: String,
    subStat: Number,
    abilityName: String,
    abilityDescription: String,
    description: String,
    lore: String,
    image: String,
    location: String
})

const Weapon = mongoose.model('Weapon', weaponSchema)
mongoose.connect('mongodb://localhost:27017/GenshinHelper', (error => {if (error) throw error}))

module.exports = Weapon