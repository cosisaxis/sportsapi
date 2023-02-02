const mongoose = require('mongoose');

const yearSchema = new mongoose.Schema({
    year:{
        type: Date,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: Array,
        required: true
    },
})



module.exports = mongoose.model('Year', yearSchema)