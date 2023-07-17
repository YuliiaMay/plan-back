const { Schema, model } = require("mongoose");

const statusesSchema = new Schema({
    value: {
        type: String,
        default: 'to do'
    }
});

model.exports = model('statuses', statusesSchema)