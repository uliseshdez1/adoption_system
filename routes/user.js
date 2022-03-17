const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');
const userValidator = require('../validations/userValidator');
const jtwToken = require('../validations/jwtValidation');

router.get('/user', jtwToken.validateToken, userValidator.id, usersController.getUser);
router.get('/users', jtwToken.validateToken, usersController.getUsers);
router.post('/user', jtwToken.validateToken ,userValidator.add, usersController.postUser);
router.post('/login', userValidator.id, usersController.getLogin);
router.put('/user', jtwToken.validateToken ,userValidator.update, usersController.putUser);
router.delete('/user', jtwToken.validateToken ,userValidator.id, usersController.deleteUser);

module.exports = router;