const Player = require('../app_server/models/playerModel')
const Character = require('../app_server/models/characterModel')
const Artifact = require('../app_server/models/artifactModel')
const Weapon = require('../app_server/models/weaponModel')
const Admin = require('../app_server/models/adminModel')
const mongoose = require("mongoose");

//Admin
const GetAdmin = function (req, res) {
    Admin.findOne({username: req.params.username}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}
const PostAdmin = function (req, res) {
    new Admin(req.body).save()
    res.json("Added!")
}


//Characters
const PostMultipleCharacters = function (req, res) {
    Character.insertMany(req.body)
        .exec((err, data) => {
            if (err) throw err
            res.json(data)
    })
}

const PostCharacter = function (req, res) {
    new Character(req.body).save()
    res.json("Added!")
}

const GetAllCharacters = function (req, res) {
    Character.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const GetCharacter = function (req, res) {
    Character.findOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const UpdateCharacter = function (req, res) {
    Character.findOneAndUpdate({id: req.params.id}, {$set: req.body}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const DeleteCharacter = function (req, res) {
    Character.deleteOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

//Weapons
const PostMultipleWeapons = function (req, res) {
    Weapon.insertMany(req.body)
        .exec((err, data) => {
            if (err) throw err
            res.json(data)
    })
}

const PostWeapon = function (req, res) {
    new Weapon(req.body).save()
    res.json("Added!")
}

const GetAllWeapons = function (req, res) {
    Weapon.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const GetWeapon = function (req, res) {
    Weapon.findOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const UpdateWeapon = function (req, res) {
    Weapon.findOneAndUpdate({id: req.params.id}, {$set: req.body}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const DeleteWeapon = function (req, res) {
    Weapon.deleteOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

//Artifacts
const PostMultipleArtifacts = function (req, res) {
    Artifact.insertMany(req.body)
        .exec((err, data) => {
            if (err) throw err
            res.json(data)
    })
}

const PostArtifact = function (req, res) {
    new Artifact(req.body).save()
    res.json("Added!")
}

const GetAllArtifacts = function (req, res) {
    Artifact.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const GetArtifact = function (req, res) {
    Artifact.findOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const UpdateArtifact = function (req, res) {
    Artifact.findOneAndUpdate({id: req.params.id}, {$set: req.body}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const DeleteArtifact = function (req, res) {
    Artifact.deleteOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const GetAllArtifactSets = function (req, res) {
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

const GetArtifactSet = function (req, res) {
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

//Admin
test('Adding new Admin1', done=>{
    var newAdmin = {
        username: 'newAdmin',
        name: 'newadmin123',
        email: 'newadmin@gmail.com',
        password: 'newadmin123'
    }
    PostAdmin({body: newAdmin}, {
        json: data => {
            console.log(data)
            expect(data).toBe('Added!');
            done();
        }
    })
})

test('Adding new Admin2', done=>{
    var newAdmin = {
        username: 'newAdmin2',
        name: 'newadmin1232',
        email: 'newadmin2@gmail.com',
        password: 'newadmin1232'
    }
    PostAdmin({body: newAdmin}, {
        json: data => {
            expect(data).toBe('Added!');
            done();
        }
    })
})

test('Getting Admin1', done=>{
    GetAdmin({params: {username: 'newAdmin'}}, {
        json: data => {
            expect(data.username).toBe('newAdmin');
            done();
        }
    })
})

test('Getting Admin2', done=>{
    GetAdmin({params: {username: 'newAdmin2'}}, {
        json: data => {
            expect(data.username).toBe('newAdmin2');
            done();
        }
    })
})

//Characters
test('Getting All Charaters', done=>{
    GetAllCharacters({}, {
        json: data => {
            expect(data).not.toBeNull();
            done();
        }
    })
})

test('Adding new Character1', done=>{
    var newCharacter = {
        id: 'yato',
        name: 'Yato',
        rarity: 5
    }
    PostCharacter({body: newCharacter}, {
        json: data => {
            expect(data).toBe('Added!');
            done();
        }
    })
})

test('Adding new Character2', done=>{
    var newCharacter = {
        id: 'yato2',
        name: 'Yato2',
        rarity: 5
    }
    PostCharacter({body: newCharacter}, {
        json: data => {
            expect(data).toBe('Added!');
            done();
        }
    })
})

test('Getting Charater1', done=>{
    GetCharacter({params: {id: 'albedo'}}, {
        json: data => {
            expect(data.id).toBe('albedo');
            done();
        }
    })
})

test('Getting Charater2', done=>{
    GetCharacter({params: {id: 'klee'}}, {
        json: data => {
            expect(data.id).toBe('klee');
            done();
        }
    })
})

test('Updating Character', done=>{
    UpdateCharacter({params: {id: 'albedo'}, body: {rarity: 4}}, {
        json: data => {
            expect(data.id).toBe('albedo');
            done();
        }
    })
})

test('Updating Character Back', done=>{
    UpdateCharacter({params: {id: 'albedo'}, body: {rarity: 5}}, {
        json: data => {
            expect(data.id).toBe('albedo');
            done();
        }
    })
})

test('Deleting Charater1', done=>{
    DeleteCharacter({params: {id: 'yato'}}, {
        json: data => {
            expect(data.deletedCount).toBe(1);
            done();
        }
    })
})

test('Deleting Charater2', done=>{
    DeleteCharacter({params: {id: 'yato2'}}, {
        json: data => {
            expect(data.deletedCount).toBe(1);
            done();
        }
    })
})

//Weapons
test('Getting All Weapons', done=>{
    GetAllWeapons({}, {
        json: data => {
            expect(data).not.toBeNull();
            done();
        }
    })
})

test('Adding new Weapon1', done=>{
    var newWeapon = {
        id: 'warbow',
        name: 'War Bow',
        rarity: 4
    }
    PostWeapon({body: newWeapon}, {
        json: data => {
            expect(data).toBe('Added!');
            done();
        }
    })
})

test('Adding new Weapon2', done=>{
    var newWeapon = {
        id: 'warbow2',
        name: 'War Bow 2',
        rarity: 4
    }
    PostWeapon({body: newWeapon}, {
        json: data => {
            expect(data).toBe('Added!');
            done();
        }
    })
})

test('Getting Weapon1', done=>{
    GetWeapon({params: {id: 'akuoumaru'}}, {
        json: data => {
            expect(data.id).toBe('akuoumaru');
            done();
        }
    })
})

test('Getting Weapon2', done=>{
    GetWeapon({params: {id: 'alley-hunter'}}, {
        json: data => {
            expect(data.id).toBe('alley-hunter');
            done();
        }
    })
})

test('Updating Weapon', done=>{
    UpdateWeapon({params: {id: 'warbow'}, body: {rarity: 4}}, {
        json: data => {
            expect(data.id).toBe('warbow');
            done();
        }
    })
})

test('Updating Weapon Back', done=>{
    UpdateWeapon({params: {id: 'warbow'}, body: {rarity: 5}}, {
        json: data => {
            expect(data.id).toBe('warbow');
            done();
        }
    })
})

test('Deleting Weapon1', done=>{
    DeleteWeapon({params: {id: 'warbow'}}, {
        json: data => {
            expect(data.deletedCount).toBe(1);
            done();
        }
    })
})

test('Deleting Weapon2', done=>{
    DeleteWeapon({params: {id: 'warbow2'}}, {
        json: data => {
            expect(data.deletedCount).toBe(1);
            done();
        }
    })
})

//Artifacts
test('Getting All Artifacts', done=>{
    GetAllArtifacts({}, {
        json: data => {
            expect(data).not.toBeNull();
            done();
        }
    })
})

test('Getting All Artifact sets', done=>{
    GetAllArtifactSets({}, {
        json: data => {
            expect(data).not.toBeNull();
            done();
        }
    })
})

test('Adding new Artifact1', done=>{
    var newArtifact = {
        id: 5000,
        name: 'Fire Power',
        rarity: 5
    }
    PostArtifact({body: newArtifact}, {
        json: data => {
            expect(data).toBe('Added!');
            done();
        }
    })
})

test('Adding new Artifact1', done=>{
    var newArtifact = {
        id: 5001,
        name: 'Ice Power',
        rarity: 5
    }
    PostArtifact({body: newArtifact}, {
        json: data => {
            expect(data).toBe('Added!');
            done();
        }
    })
})

test('Getting Artifact1', done=>{
    GetArtifact({params: {id: 2}}, {
        json: data => {
            expect(data.id).toBe(2);
            done();
        }
    })
})

test('Getting Artifact2', done=>{
    GetArtifact({params: {id: 22}}, {
        json: data => {
            expect(data.id).toBe(22);
            done();
        }
    })
})

test('Getting Artifact Set1', done=>{
    GetArtifactSet({params: {id: 2}}, {
        json: data => {
            expect(data).not.toBeNull();
            done();
        }
    })
})

test('Getting Artifact Set2', done=>{
    GetArtifactSet({params: {id: 22}}, {
        json: data => {
            expect(data).not.toBeNull();
            done();
        }
    })
})

test('Updating Artifact', done=>{
    UpdateArtifact({params: {id: 5000}, body: {rarity: 4}}, {
        json: data => {
            expect(data.id).toBe(5000);
            done();
        }
    })
})

test('Updating Artifact Back', done=>{
    UpdateArtifact({params: {id: 5000}, body: {rarity: 5}}, {
        json: data => {
            expect(data.id).toBe(5000);
            done();
        }
    })
})

test('Deleting Artifact1', done=>{
    DeleteArtifact({params: {id: 5000}}, {
        json: data => {
            expect(data.deletedCount).toBe(1);
            done();
        }
    })
})

test('Deleting Artifact2', done=>{
    DeleteArtifact({params: {id: 5001}}, {
        json: data => {
            expect(data.deletedCount).toBe(1);
            done();
        }
    })
})