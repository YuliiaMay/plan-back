const Joi = require('joi');
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require('../helpers');

const taskSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: [true, 'Set title for task']
    },
    category: {
        type: String,
        ref: 'categories'
    },
    createdData: {
        type: Date,
        default: Date.now
    },
    deadline: {
        type: Date,
        default: ''
    },
    priority: {
        type: String,
        ref: 'priorities'
    },
    status: {
        type: String,
        ref: 'statuses'
    },
    comment: {
        type: String,
    },
    token: {
        type: String,
        default: "",
    }
});

taskSchema.post('save', handleMongooseError);
const Task = model('task', taskSchema);


const addTaskSchema = Joi.object({
    title: Joi.string().required,
    category: Joi.string().required,
    deadline: Joi.string(),
    priority: Joi.string(),
    status: Joi.string(),
    comment: Joi.string(),
});

const taskSchemas = {
    addTaskSchema
};

module.exports = {
    Task,
    taskSchemas
}