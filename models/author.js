const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 30

    }
},
{timestamps: true}
);

module.exports = mongoose.model("Author",authorSchema);