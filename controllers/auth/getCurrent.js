const { ctrlWrapper, httpError } = require("../../helpers");

const getCurrent = async (req, res) => {
    const { email, subscription } = req.user;
    if (!email) throw httpError(401, "Not authorized");

    res.status(200).json({
        user: {
            email: email,
            subscription: subscription            
        }
    })
};

module.exports = {
    getCurrent: ctrlWrapper(getCurrent)
}