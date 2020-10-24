const mongoose = require('mongoose');

var studentsModel = mongoose.model('stds', {
    name: {type: String},
    dept: {type: String},
    sec: { type: String },
    regno: { type: Number }
});

module.exports = {studentsModel};