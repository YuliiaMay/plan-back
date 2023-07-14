const { User } = require("../../models");
const bcrypt = require('bcrypt');
// const nanoid = require('nanoid');
// const gravatar = require('gravatar');
const { ctrlWrapper, httpError } = require("../../helpers");


const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw httpError(409, `Email "${email}" in use`)
    };

    const hashedPassword = await bcrypt.hash(password, 10);
    // const defaultAvatarURL = gravatar.url(email);
    // const verificationToken = nanoid();

    const result = await User.create({
        ...req.body,
        password: hashedPassword,
        // defaultAvatarURL,
        // verificationToken
    });

    res.status(201).json({
        code: 201,
        message: "Create new user",
        user: {
            name: result.name,
            email: result.email,
            subscription: result.subscription
        }
    })
};

module.exports = {
    register: ctrlWrapper(register)
};