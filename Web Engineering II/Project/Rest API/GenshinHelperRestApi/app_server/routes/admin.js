const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

//Characters
router.get('/characters', adminController.GetAllCharacters)
router.post('/characters', adminController.PostMultipleCharacters)

router.post('/character', adminController.PostCharacter)
router.get('/character/:id', adminController.GetCharacter)
router.put('/character/:id', adminController.UpdateCharacter)
router.delete('/character/:id', adminController.DeleteCharacter)

//Weapon
router.get('/weapons', adminController.GetAllWeapons)
router.post('/weapons', adminController.PostMultipleWeapons)

router.post('/weapon', adminController.PostWeapon)
router.get('/weapon/:id', adminController.GetWeapon)
router.put('/weapon/:id', adminController.UpdateWeapon)
router.delete('/weapon/:id', adminController.DeleteWeapon)

//Artifact
router.get('/artifacts', adminController.GetAllArtifacts)
router.post('/artifacts', adminController.PostMultipleArtifacts)

router.post('/artifact', adminController.PostArtifact)
router.get('/artifact/:id', adminController.GetArtifact)
router.put('/artifact/:id', adminController.UpdateArtifact)
router.delete('/artifact/:id', adminController.DeleteArtifact)

//Artifact Set
router.get('/artifactSet', adminController.GetArtifactSet)

module.exports = router
