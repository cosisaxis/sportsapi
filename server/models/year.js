const mongoose = require('mongoose');

const yearSchema = new mongoose.Schema({
    day:{
        type: Date,
        required: true
    },
    event:{
        type: String,
        required: true
    },
    category:{
        type: Array,
        required: true
    },
})



module.exports = mongoose.model('Year', yearSchema)