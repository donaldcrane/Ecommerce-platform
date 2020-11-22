"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Category = require("../models/Category");

var _require = require("../validation/CategoryValidation"),
    categoryValidation = _require.categoryValidation;

var categoryController = /*#__PURE__*/function () {
  function categoryController() {
    (0, _classCallCheck2["default"])(this, categoryController);
  }

  (0, _createClass2["default"])(categoryController, null, [{
    key: "addCategory",
    //ADDS A CATEGORY TO THE DATABASE
    value: function () {
      var _addCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _categoryValidation, error, category, savedCategory;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _categoryValidation = categoryValidation(req.body), error = _categoryValidation.error;

                if (!error) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", res.status(400).send(error.details[0].message));

              case 4:
                category = new Category({
                  name: req.body.name
                });
                _context.next = 7;
                return category.save();

              case 7:
                savedCategory = _context.sent;
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  message: "A product has been added.",
                  savedCategory: savedCategory
                }));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                res.status(500).json({
                  status: 500,
                  error: "Server Error"
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      function addCategory(_x, _x2) {
        return _addCategory.apply(this, arguments);
      }

      return addCategory;
    }() // GET BACK ALL THE CATEGORY

  }, {
    key: "getCategories",
    value: function () {
      var _getCategories = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var categories;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Category.find();

              case 3:
                categories = _context2.sent;
                return _context2.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "successfully retrieved all categories}",
                  categories: categories
                }));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                res.status(500).json({
                  status: 500,
                  error: "Server Error"
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function getCategories(_x3, _x4) {
        return _getCategories.apply(this, arguments);
      }

      return getCategories;
    }() //get a specific category

  }, {
    key: "getCategory",
    value: function () {
      var _getCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var name, category;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                name = req.query.name;
                _context3.prev = 1;
                _context3.next = 4;
                return Category.findOne({
                  name: name
                });

              case 4:
                category = _context3.sent;
                return _context3.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "successfully retrieved ".concat(name),
                  category: category
                }));

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);
                return _context3.abrupt("return", res.status(404).send({
                  status: 404,
                  error: "'".concat(name, "' does not exists in the database")
                }));

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 8]]);
      }));

      function getCategory(_x5, _x6) {
        return _getCategory.apply(this, arguments);
      }

      return getCategory;
    }() // DELETE A SPECIFIC CATEGORY ON THE DATABASE

  }, {
    key: "deleteCategory",
    value: function () {
      var _deleteCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var name, category;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                name = req.query.name;
                _context4.prev = 1;
                _context4.next = 4;
                return Category.deleteOne({
                  name: name
                });

              case 4:
                category = _context4.sent;
                return _context4.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "successfully Deleted category"
                }));

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);
                return _context4.abrupt("return", res.status(404).send({
                  status: 404,
                  error: "'".concat(name, "' does not exists in the database")
                }));

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 8]]);
      }));

      function deleteCategory(_x7, _x8) {
        return _deleteCategory.apply(this, arguments);
      }

      return deleteCategory;
    }() //UPDATE A SPECIFIC CATEGORY ON THE DATABASE

  }, {
    key: "updateCategory",
    value: function () {
      var _updateCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var name, category;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                name = req.query.name;
                _context5.prev = 1;
                _context5.next = 4;
                return Category.updateOne({
                  name: name
                }, {
                  $set: {
                    name: req.body.name
                  }
                });

              case 4:
                category = _context5.sent;
                return _context5.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "successfully Updated category"
                }));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                return _context5.abrupt("return", res.status(404).send({
                  status: 404,
                  error: "Category does not exists in the database"
                }));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 8]]);
      }));

      function updateCategory(_x9, _x10) {
        return _updateCategory.apply(this, arguments);
      }

      return updateCategory;
    }()
  }]);
  return categoryController;
}();

module.exports = categoryController;
//# sourceMappingURL=Categories.js.map