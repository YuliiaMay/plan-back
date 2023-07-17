const { ctrlWrapper, httpError } = require("../../helpers");

const getCurrent = async (req, res) => {
    const { name, email } = req.user;

    if (!email) throw httpError(401, "Not authorized");

    res.status(200).json({
        user: {
            name: name,
            email: email,         
        }
    })
};

module.exports = {
    getCurrent: ctrlWrapper(getCurrent)
}