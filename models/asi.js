const mongoose = require('mongoose');
const asiSchema = mongoose.Schema({
        name: String,
        isCompleteted: Boolean,
    }); 
const Asi= mongoose.model('Asi', asiSchema);

module.exports = Asi;