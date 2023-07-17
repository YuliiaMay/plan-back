const { ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");


const logout = async (req, res) => {
    const { _id } = req.body;
    console.log(_id);

    await User.findByIdAndUpdate(_id, { token: '' });

    res.status(200).json({
        code: 200,
        message: "User is logged out"
    })
};

module.exports = {
    logout: ctrlWrapper(logout)
}