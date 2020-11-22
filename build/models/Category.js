"use strict";

var mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 1026,
    min: 5
  }
});
module.exports = mongoose.model("Category", CategorySchema);
//# sourceMappingURL=Category.js.map