const { login } = require("./login");
const { logout } = require("./logout");
const { register } = require("./register");
const { getCurrent } = require("./getCurrent");
const { updateAvatar } = require("./updateAvatar");


module.exports = {
    register,
    login,
    logout,
    getCurrent,
    updateAvatar
};