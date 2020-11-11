const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 30

    }
},
{timestamps: true}
);

module.exports = mongoose.model("Publisher",publisherSchema);