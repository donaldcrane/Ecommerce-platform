"use strict";

var bcrypt = require("bcrypt");

var password = "12345";
var hash = bcrypt.hashSync(password, 10);
module.exports = [{
  _id: "5f98ce0ac19a19396029222d",
  username: "pablo",
  email: "pablobi@yahoo.com",
  password: hash,
  date: "2020-10-28T01:48:58.104Z",
  role: "Admin",
  __v: 0
}, {
  _id: "5f98ce715f9ca62b20e756cb",
  username: "jacob",
  email: "ojacob@yahoo.com",
  password: hash,
  date: "2020-10-28T01:50:41.965Z",
  role: "Admin",
  __v: 0
}, {
  _id: "5f98cea7600dd71a00765f68",
  username: "larry",
  email: "larry@yahoo.com",
  password: hash,
  date: "2020-10-28T01:51:35.340Z",
  role: "Admin",
  __v: 0
}];
//# sourceMappingURL=User.js.map