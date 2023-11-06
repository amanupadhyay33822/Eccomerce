const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category:{
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: [true, "Please enter product price"]
        },
        cuttedPrice: {
            type: Number,
            required: [true, "Please enter cutted price"]
        },
        stock: {
            type: Number,
            required: [true, "Please enter product stock"],
            max: [4, "Stock cannot exceed limit"],
            default: 1
        },
        date_added: {
            type: Date,
            default: Date.now
        },
    }
);

module.exports = mongoose.model('Product', productSchema);