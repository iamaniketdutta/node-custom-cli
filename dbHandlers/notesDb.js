const mongoose = require('mongoose');
const codes = require('../conf/codes.json');

const notesSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, index: true},
        notes: {type: String, required: true, minlength: codes.MIN_LENGTH},
        status: {type: Number, index: true, default: codes.ENABLED},
        createdAt: {type: Number, default: Date.now()},
        updatedAt: {type: Number, default: Date.now()}
    }
);

exports.Notes = new mongoose.model('notes', notesSchema);