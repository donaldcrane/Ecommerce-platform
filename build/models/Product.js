"use strict";

var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
    min: 5
  },
  categoryName: {
    type: String,
    required: true,
    max: 255,
    min: 5
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model("Product", ProductSchema);
//# sourceMappingURL=Product.js.map