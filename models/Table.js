const mongoose = require('../db');

const TableSchema = new mongoose.Schema({
    week:{
        type:String,
        required: true,
    },
    ranFM:{
        type: String,
        required: true
    },
    ranFE: {
        type: String,
        required: true
    },
    ranSM: {
        type: String,
        required: true
    },
    ranSE: {
        type: String,
        required: true
    },
    ranSuM: {
        type: String,
        required: true
    },
    ranSuE: {
        type: String,
        required: true
    },
    ranMM: {
        type: String,
        required: true
    },
    ranME: {
        type: String,
        required: true
    },
    ranTM: {
        type: String,
        required: true
    },
    ranTE: {
        type: String,
        required: true
    },
    ranWM: {
        type: String,
        required: true
    },
    ranWE: {
        type: String,
        required: true
    },
    ranThM:{
        type: String,
        required: true
    },
    ranThE: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

 const Table = mongoose.model('Table', TableSchema);

 module.exports = Table;