const { Schema, model } = require("mongoose");

const prioritiesSchema = new Schema({
    value: {
        type: String,
        default: 'low'
    }
});

model.exports = model('priorities', prioritiesSchema)