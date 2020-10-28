const User = require("../models/User");
const jwt = require("jsonwebtoken");

require("dotenv").config();


module.exports = class Auth {

  static async verifyToken (req, res, next) {
    try{
      const { authorization } = req.headers;
      let decoded;
      if (authorization) {
      const token = authorization.split(" ")[1];
      decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      req.decoded = decoded;
      return next();
    }
    return res.status(401).json({ status: 401, error: "Please login." });
  } catch (error) {
    return res.status(500).json({ status: 500, error: "Server Error." });
  }}
}
