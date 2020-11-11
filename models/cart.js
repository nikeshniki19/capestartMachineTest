const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema


const bookCartSchema = new mongoose.Schema({
    book:{
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number


});


const BookCart = mongoose.model("BookCart",bookCartSchema);

const cartSchema = new mongoose.Schema({
    books: [bookCartSchema],
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
},
{timestamps: true}
);


const Cart = mongoose.model("Cart",cartSchema);

module.exports = {Cart, BookCart}