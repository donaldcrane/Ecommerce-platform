"use strict";

var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    max: 255,
    min: 5
  },
  password: {
    type: String,
    required: true,
    max: 255,
    min: 5
  },
  username: {
    type: String,
    required: true,
    max: 255,
    min: 5
  },
  role: {
    type: String,
    "default": "User"
  },
  date: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model("User", UserSchema);
//# sourceMappingURL=User.js.map