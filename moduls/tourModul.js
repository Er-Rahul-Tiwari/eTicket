const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        unique : true,
        required: [true,'Tour name must have required']
    },
    price:{
        type: Number,
        required: [true,'Tour must have price']
    },
    ratings:{
        type: Number,
        default: 3.5
    }
});

const Tour = mongoose.model('Tour',tourSchema);

module.exports = Tour;