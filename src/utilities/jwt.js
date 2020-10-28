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
      const { _id } = req.decoded.user;
      const user = await User.findOne({where: {_id, role:true} });
      if (user) {
        return next();
      } return res.status(400).send("SORRY USER IS NOT AN ADMIN");
        }
    }catch{
      res.status(400).send("INVALID TOKEN");
    }
  }
}
