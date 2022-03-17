const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const adoptionsController = require('../controllers/adoptionsController');
const adoptionValidator = require("../validations/adoptionValidator");
const jtwToken = require('../validations/jwtValidation');

router.get('/adoption', jtwToken.validateToken ,adoptionValidator.id, adoptionsController.getAdoption);
router.get('/adoptions', jtwToken.validateToken ,adoptionsController.getAdoptions);
router.post('/adoption', jtwToken.validateToken ,adoptionValidator.add, adoptionsController.postAdoption);
router.put('/adoption', jtwToken.validateToken ,adoptionValidator.update, adoptionsController.putAdoption);
router.delete('/adoption', jtwToken.validateToken ,adoptionValidator.id, adoptionsController.deleteAdoption);
router.get('/adoptionUser', jtwToken.validateToken ,adoptionsController.getAdoptionByUser);

module.exports = router;