const jwt = require("jsonwebtoken");
const User = require("../models/User");
const jwt_decode = require("jwt-decode");

require("dotenv").config();

module.exports = class Authentication {
  static async verifyAdmin(req, res, next) {
    try {
      
      const { authorization } = req.headers;
      if (authorization) {
      const token = authorization.split(" ")[1];
      const adminUser = jwt_decode(token);
      const { _id } = adminUser;
      const user = await Authentication.findAdminById({_id});
      next();
      }
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error." });
    }}
  static async findAdminById(id) {
    try {
      return await User.findOne({_id: id}
      );
    } catch (error) {
      throw error;
    }
  }
}
  


