"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var jwt = require("jsonwebtoken");

var User = require("../models/User");

var jwt_decode = require("jwt-decode");

require("dotenv").config();

module.exports = /*#__PURE__*/function () {
  function Authentication() {
    (0, _classCallCheck2["default"])(this, Authentication);
  }

  (0, _createClass2["default"])(Authentication, null, [{
    key: "verifyAdmin",
    value: function () {
      var _verifyAdmin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var authorization, token, adminUser, _id, user;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                authorization = req.headers.authorization;

                if (!authorization) {
                  _context.next = 10;
                  break;
                }

                token = authorization.split(" ")[1];
                adminUser = jwt_decode(token);
                _id = adminUser._id;
                _context.next = 8;
                return Authentication.findAdminById({
                  _id: _id
                });

              case 8:
                user = _context.sent;
                next();

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  status: 500,
                  error: "Server Error."
                }));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));

      function verifyAdmin(_x, _x2, _x3) {
        return _verifyAdmin.apply(this, arguments);
      }

      return verifyAdmin;
    }()
  }, {
    key: "findAdminById",
    value: function () {
      var _findAdminById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return User.findOne({
                  _id: id
                });

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function findAdminById(_x4) {
        return _findAdminById.apply(this, arguments);
      }

      return findAdminById;
    }()
  }]);
  return Authentication;
}();
//# sourceMappingURL=authenticate.js.map