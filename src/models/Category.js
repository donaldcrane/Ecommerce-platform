const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 1026,
        min: 5
    } 
})

module.exports = mongoose.model("Category", CategorySchema);