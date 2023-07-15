const { httpError, ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        throw httpError(401, 'Email or password is wrong');
    };

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw httpError(401, 'Email or password is wrong');
    };

    const payload = {
        id: user._id
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
    await User.findByIdAndUpdate(user._id, { token });

    res.json({
        message: 'User ші logпed in',
        user: {
            name: user.name,
            email: email,
        },
        token,
    })
};

module.exports = {
    login: ctrlWrapper(login)
};