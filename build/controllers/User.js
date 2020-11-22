"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var User = require("../models/User");

var bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken"); // const jwtHelper = ("../utilities/jwt");


var _require = require("../validation/userValidation"),
    loginValidation = _require.loginValidation,
    registerValidation = _require.registerValidation;

var userController = /*#__PURE__*/function () {
  function userController() {
    (0, _classCallCheck2["default"])(this, userController);
  }

  (0, _createClass2["default"])(userController, null, [{
    key: "createUser",
    //REGISTER A USER TO THE DATABASE
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _registerValidation, error, Email, Username, emailExist, hashedPassword, user, savedUser;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _registerValidation = registerValidation(req.body), error = _registerValidation.error;

                if (!error) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", res.status(400).send(error.details[0].message));

              case 3:
                Email = req.body.email.toLowerCase();
                Username = req.body.username.toLowerCase();
                _context.next = 7;
                return User.findOne({
                  email: Email
                });

              case 7:
                emailExist = _context.sent;

                if (!emailExist) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", res.status(409).send("Email already exist on the database"));

              case 10:
                _context.next = 12;
                return bcrypt.hash(req.body.password, 10);

              case 12:
                hashedPassword = _context.sent;
                user = new User({
                  username: Username,
                  email: Email,
                  password: hashedPassword
                });
                _context.prev = 14;
                _context.next = 17;
                return user.save();

              case 17:
                savedUser = _context.sent;
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  message: "A user has been successfully registered you can Log in."
                }));

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](14);
                res.status(500).json({
                  status: 500,
                  error: "Server Error"
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[14, 21]]);
      }));

      function createUser(_x, _x2) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }() //SIGN IN A USER TO THE DATABASE

  }, {
    key: "loginUser",
    value: function () {
      var _loginUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _loginValidation, error, _req$body, email, password, user, validpass, token;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _loginValidation = loginValidation(req.body), error = _loginValidation.error;

                if (!error) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", res.status(400).send(error.details[0].message));

              case 4:
                _req$body = req.body, email = _req$body.email, password = _req$body.password;
                _context2.next = 7;
                return User.findOne({
                  email: email
                });

              case 7:
                user = _context2.sent;

                if (user) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", res.status(409).send("Email does not exist on the database"));

              case 10:
                _context2.next = 12;
                return bcrypt.compare(password, user.password);

              case 12:
                validpass = _context2.sent;

                if (validpass) {
                  _context2.next = 15;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  status: 400,
                  error: "Password is not correct!."
                }));

              case 15:
                token = jwt.sign({
                  _id: user._id
                }, process.env.TOKEN_SECRET);
                res.header("auth-token", token);
                return _context2.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "User Logged in!",
                  token: token
                }));

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](0);
                res.status(500).json({
                  status: 500,
                  error: "Server Error"
                });

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 20]]);
      }));

      function loginUser(_x3, _x4) {
        return _loginUser.apply(this, arguments);
      }

      return loginUser;
    }() // GET BACK ALL THE users

  }, {
    key: "getUsers",
    value: function () {
      var _getUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var users;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return User.find();

              case 3:
                users = _context3.sent;
                return _context3.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "successfully retrieved all users",
                  users: users
                }));

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                res.status(500).json({
                  status: 500,
                  error: "Server Error"
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function getUsers(_x5, _x6) {
        return _getUsers.apply(this, arguments);
      }

      return getUsers;
    }() //get a specific user

  }, {
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var name, user;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                name = req.query.name;
                _context4.prev = 1;
                _context4.next = 4;
                return User.findOne({
                  username: name
                });

              case 4:
                user = _context4.sent;
                return _context4.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "successfully retrieved ".concat(user.name, " details"),
                  user: user
                }));

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);
                return _context4.abrupt("return", res.status(404).send({
                  status: 404,
                  error: "".concat(name, " does not exists in the database")
                }));

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 8]]);
      }));

      function getUser(_x7, _x8) {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    }() // DELETE A SPECIFIC USER FROM THE DATABASE

  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var name, deleteduser;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                name = req.query.name;
                _context5.prev = 1;
                _context5.next = 4;
                return User.deleteOne({
                  username: name
                });

              case 4:
                deleteduser = _context5.sent;
                return _context5.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "successfully Deleted ".concat(deleteduser.name)
                }));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                return _context5.abrupt("return", res.status(404).send({
                  status: 404,
                  error: "'".concat(name, "' does not exists in the database")
                }));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 8]]);
      }));

      function deleteUser(_x9, _x10) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }()
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var name, updateduser;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                name = req.query.name;
                _context6.prev = 1;
                _context6.next = 4;
                return User.updateOne({
                  name: name
                }, {
                  $set: {
                    username: req.body.username
                  }
                });

              case 4:
                updateduser = _context6.sent;
                return _context6.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "successfully Updated user details"
                }));

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](1);
                return _context6.abrupt("return", res.status(404).send({
                  status: 404,
                  error: "User does not exists in the database"
                }));

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 8]]);
      }));

      function updateUser(_x11, _x12) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }()
  }]);
  return userController;
}();

module.exports = userController;
//# sourceMappingURL=User.js.map