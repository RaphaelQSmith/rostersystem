const mongoose = require('../db');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    position:{type: String},
    mon:{type: String},
    tue:{type: String},
    wed:{type: String},
    thu:{type: String},
    fri:{type: String},
    sat:{type: String},
    sun:{type: String},
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);

