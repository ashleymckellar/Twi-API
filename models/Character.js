const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true,
    },
    allegiance: {
        type: String,
    },
});

module.exports = mongoose.model("Character", characterSchema)
