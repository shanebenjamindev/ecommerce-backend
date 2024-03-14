const mongoose = require('mongoose')

const typeScheme = new mongoose.Schema(
    {
        name: { type: String, unique: true },
    },
    {
        timestamps: true,
    }
);
const Type = mongoose.model('Type', typeScheme);

module.exports = Type;
