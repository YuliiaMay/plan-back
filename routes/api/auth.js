const express = require('express');
const { validateBody, authenticate } = require('../../middlewares');
const { userSchemas } = require('../../models');
const { register, login, logout, getCurrent } = require('../../controllers/auth');


const router = express.Router();


router.post('/register', validateBody(userSchemas.registerSchema), register);
router.post('/login', validateBody(userSchemas.loginSchema), login);
router.get('/current', authenticate, getCurrent);
router.post('/logout', authenticate, logout);


module.exports = router;