const { User } = require("../../models");
const bcrypt = require('bcrypt');
const { ctrlWrapper, httpError } = require("../../helpers");
const gravatar = require('gravatar');


const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw httpError(409, `Email "${email}" in use`)
    };

    const hashedPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);


    const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
        avatarURL,
        // verificationToken
    });

    res.status(201).json({
        code: 201,
        message: "Create new user",
        user: {
            name: newUser.name,
            email: newUser.email,
            subscription: newUser.subscription
        }
    })
};

module.exports = {
    register: ctrlWrapper(register)
};