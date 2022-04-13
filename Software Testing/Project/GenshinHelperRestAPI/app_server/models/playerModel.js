const mongoose = require('mongoose')
const playerSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    teams: [
        {
            character1: {
                type : String,
                ref : 'Character'
            },
            character2: {
                type : String,
                ref : 'Character'
            },
            character3: {
                type : String,
                ref : 'Character'
            },
            character4: {
                type : String,
                ref : 'Character'
            }
        }
    ],
    //Owned
    characters: [
        {
            id: {
                type : String,
                ref : 'Character'
            }
        }
    ],
    artifacts: [
        {
            id: {
                type : String,
                ref : 'Artifact'
            }
        }
    ],
    weapons: [
        {
            id: {
                type : String,
                ref : 'Weapon'
            }
        }
    ],
})

const Player = mongoose.model('Player', playerSchema)
mongoose.connect('mongodb://localhost:27017/GenshinHelper', (error => {if (error) throw error}))

module.exports = Player