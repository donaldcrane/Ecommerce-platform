"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var User = require("../models/User");

var jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = /*#__PURE__*/function () {
  function Auth() {
    (0, _classCallCheck2["default"])(this, Auth);
  }

  (0, _createClass2["default"])(Auth, null, [{
    key: "verifyToken",
    value: function () {
      var _verifyToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var authorization, decoded, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                authorization = req.headers.authorization;

                if (!authorization) {
                  _context.next = 7;
                  break;
                }

                token = authorization.split(" ")[1];
                decoded = jwt.verify(token, process.env.TOKEN_SECRET);
                req.decoded = decoded;
                return _context.abrupt("return", next());

              case 7:
                return _context.abrupt("return", res.status(401).json({
                  status: 401,
                  error: "Please login."
                }));

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  status: 500,
                  error: "Server Error."
                }));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      function verifyToken(_x, _x2, _x3) {
        return _verifyToken.apply(this, arguments);
      }

      return verifyToken;
    }()
  }]);
  return Auth;
}();
//# sourceMappingURL=jwt.js.map