const { login } = require("./login");
const { logout } = require("./logout");
const { register } = require("./register");
const { getCurrent } = require("./getCurrent");


module.exports = {
    register,
    login,
    logout,
    getCurrent
};