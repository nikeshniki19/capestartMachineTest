const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 30

    },
    author: {
        type: String,
        required: true

    },
    publisher: {
        type: String,
        required: true

    },
    category: {
        type: String,
        trim: true,
        required: true,
        maxlength: 30

    },
    lendedUser: {
        type: String
    },
    photo: {
        data: Buffer,
        contentType: String
    }
},
{timestamps: true}
);

module.exports = mongoose.model("Book",bookSchema);