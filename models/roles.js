const { Schema, model } = require("mongoose");

const rolesSchema = new Schema({
    value: {
        type: String,
        default: 'USER'
    }
});

model.exports = model('roles', rolesSchema)
