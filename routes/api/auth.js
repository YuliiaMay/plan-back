const express = require('express');
const { validateBody } = require('../../middlewares');
const { userSchemas } = require('../../models');
const { register, login } = require('../../controllers/auth');


const router = express.Router();

router.post('/register', validateBody(userSchemas.registerSchema), register);
router.post('/login', validateBody(userSchemas.loginSchema), login)


module.exports = router;