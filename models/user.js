const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Create user name']
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        requited: [true, 'Set password for user']
    },
    subscription: {
        type: String,
        enum: ['free', 'basic', 'pro'],
        default: 'free'
    },
    role: {
        type: String,
        ref: 'roles'
    },
    avatarURL: {
        type: String,
        default: ''
    },
    token: {
        type: String,
        default: '',
    },
    verify: {
        type: Boolean,
        default: false
    },
    // verificationToken: {
    //     type: String,
    //     required: [true, 'Verification token is required']
    // },
});


userSchema.post('save', handleMongooseError);
const User = model('user', userSchema);



const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const emailSchema = Joi.object({
    email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});


const userSchemas = {
    registerSchema,
    emailSchema,
    loginSchema,
};


module.exports = {
    User,
    userSchemas
};



