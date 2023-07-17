const { Schema, model } = require("mongoose");

const categoriesSchema = new Schema({
    value: {
        type: String,
        default: 'work'
    }
});

model.exports = model('categories', categoriesSchema)