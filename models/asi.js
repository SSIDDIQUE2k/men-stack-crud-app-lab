const { name } = require('ejs');
const  mongoose = require('mongoose');

const asichema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
});

const ASI = mongoose.model('ASI', asichema);

module.exports = ASI;