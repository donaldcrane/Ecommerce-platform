"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Product = require("../models/Product");

var _require = require("../validation/productValidation"),
    productValidation = _require.productValidation;

var productController = /*#__PURE__*/function () {
  function productController() {
    (0, _classCallCheck2["default"])(this, productController);
  }

  (0, _createClass2["default"])(productController, null, [{
    key: "addProduct",
    //ADDS A PRODUCT TO THE DATABASE
    value: function () {
      var _addProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _productValidation, error, product, savedProduct;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _productValidation = productValidation(req.body), error = _productValidation.error;

                if (!error) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", res.status(400).send(error.details[0].message));

              case 3:
                product = new Product({
                  name: req.body.name,
                  categoryName: req.body.categoryName,
                  price: req.body.price
                });
                _context.prev = 4;
                _context.next = 7;
                return product.save();

              case 7:
                savedProduct = _context.sent;
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  message: "A product has been added.",
                  savedProduct: savedProduct
                }));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](4);
                res.status(500).json({
                  status: 500,
                  error: "Server Error"
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 11]]);
      }));

      function addProduct(_x, _x2) {
        return _addProduct.apply(this, arguments);
      }

      return addProduct;
    }() // GET BACK ALL THE PRODUCTS ON THE DATABASE

  }, {
    key: "getProducts",
    value: function () {
      var _getProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var product;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Product.find();

              case 3:
                product = _context2.sent;
                return _context2.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "successfully retrieved products}",
                  product: product
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

      function getProducts(_x3, _x4) {
        return _getProducts.apply(this, arguments);
      }

      return getProducts;
    }() //get a specific product

  }, {
    key: "getProduct",
    value: function () {
      var _getProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var name, product;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                name = req.query.name;
                _context3.prev = 1;
                _context3.next = 4;
                return Product.findOne({
                  name: name
                });

              case 4:
                product = _context3.sent;
                return _context3.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "successfully retrieved ".concat(product.name),
                  product: product
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

      function getProduct(_x5, _x6) {
        return _getProduct.apply(this, arguments);
      }

      return getProduct;
    }() //DELETE A SPECIFIC PRODUCT FROM THE DATABASE

  }, {
    key: "deleteProduct",
    value: function () {
      var _deleteProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var name, product;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                name = req.query.name;
                _context4.prev = 1;
                _context4.next = 4;
                return Product.deleteOne({
                  name: name
                });

              case 4:
                product = _context4.sent;
                return _context4.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "successfully Deleted ".concat(name, " from database")
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

      function deleteProduct(_x7, _x8) {
        return _deleteProduct.apply(this, arguments);
      }

      return deleteProduct;
    }() //UPDATE A SPECIFIC PRODUCT ON THE DATABASE

  }, {
    key: "updateProduct",
    value: function () {
      var _updateProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var name, product;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                name = req.query.name;
                _context5.prev = 1;
                _context5.next = 4;
                return Product.updateOne({
                  name: name
                }, {
                  $set: {
                    name: req.body.name,
                    categoryName: req.body.categoryName,
                    price: req.body.price
                  }
                });

              case 4:
                product = _context5.sent;
                return _context5.abrupt("return", res.status(200).json({
                  status: 200,
                  message: "successfully Updated product"
                }));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                return _context5.abrupt("return", res.status(404).send({
                  status: 404,
                  error: "sorry Product does not exist in the database"
                }));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 8]]);
      }));

      function updateProduct(_x9, _x10) {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }()
  }]);
  return productController;
}();

module.exports = productController;
//# sourceMappingURL=Product.js.map