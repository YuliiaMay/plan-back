const express = require('express');
const { validateBody, authenticate, upload } = require('../../middlewares');
const { userSchemas } = require('../../models');
const { register, login, logout, getCurrent, updateAvatar } = require('../../controllers/auth');

const router = express.Router();


router.post('/register', validateBody(userSchemas.registerSchema), register);
router.post('/login', validateBody(userSchemas.loginSchema), login);
router.get('/current', authenticate, getCurrent);
router.post('/logout', authenticate, logout);
router.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar);

module.exports = router;