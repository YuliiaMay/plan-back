const express = require('express');
// const { validateBody } = require('../../middlewares');
const { userSchemas } = require('../../models');
const { register } = require('../../controllers/auth');

console.log(userSchemas);

const router = express.Router();

router.post('/register', validateBody(userSchemas.registerSchema), register);

module.exports = router;