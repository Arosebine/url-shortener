const mongoose = require('mongoose');



const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
    },
    urlCode: {
        type: String,
        unique: true,
    },
    shortUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('url', urlSchema);

