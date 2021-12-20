const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController')

//Player
router.post('/register', playerController.RegisterPlayer)
router.get('/player/:username', playerController.GetPlayer)
router.put('/update/:username',playerController.UpdatePlayer)

//Characters
router.get('/characters', playerController.GetAllCharacters)
router.get('/character/:id', playerController.GetCharacter)

//Weapon
router.get('/weapons', playerController.GetAllWeapons)
router.get('/weapon/:id', playerController.GetWeapon)

//Artifact
router.get('/artifacts', playerController.GetAllArtifacts)
router.get('/artifact/:id', playerController.GetArtifact)

/*
router.post('/register', publisherController.register)
router.get('/blogs/:publisherID', publisherController.blogsGet)
router.get('/blog/:blogID', publisherController.blogGet)
router.put('/blog/:publisherID/:blogID', publisherController.blogUpdate)
router.delete('/blog/:publisherID/:blogID', publisherController.blogDelete)
*/

module.exports = router