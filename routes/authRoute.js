const express = require('express');
const { createUser, userLogin } = require('../controllers/authController');
const { LoginUser } = require('../validation/form_validations');
const { checkSchema } = require('express-validator');
const router = express.Router();

router.route('/create').post(createUser);
router.route('/login').post(checkSchema(LoginUser),userLogin);


module.exports = router