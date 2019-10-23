const mongoose = require('./db');

const TableSchema = new mongoose.Schema({
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
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const table = mongoose.model('table', TableSchema);

module.exports = table;
