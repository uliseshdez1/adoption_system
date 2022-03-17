const express = require("express");
const router = express.Router();
const petsController = require('../controllers/petsController');
const petValidator = require("../validations/petValidator");
const jtwToken = require('../validations/jwtValidation');

router.get('/pet', jtwToken.validateToken ,petValidator.id, petsController.getPet);
router.get('/pets', jtwToken.validateToken ,petsController.getPets);
router.post('/pet', jtwToken.validateToken ,petValidator.add, petsController.postPet);
router.put('/pet', jtwToken.validateToken ,petValidator.update, petsController.putPet);
router.delete('/pet', jtwToken.validateToken ,petValidator.id, petsController.deletePet);

module.exports = router;