const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

// Définir les routes liées aux utilisateurs
router.get('/getusers', userController.getUsers);
router.post('/createuser', userController.createUser);

module.exports = router;
