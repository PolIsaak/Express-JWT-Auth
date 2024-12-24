const express = require('express');
const { login, signup } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.get('/login', login);

module.exports = router;