const jwt = require("jsonwebtoken");
const User = require("../models/User");

require("dotenv").config();

module.exports = class Authentication {
  static async verifyAdmin(req, res, next) {
    try {
      
      const { _id } = req.decoded.user;
      const user = await User.findOne({where: {_id, role:true} });
      
      if (user) {
        return next();
      }
      return res.status(403).json({ status: 403, error: "Access denied." });
    
    
    
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error." });
    }
  }
  
}
