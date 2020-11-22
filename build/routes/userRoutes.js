"use strict";

var _require = require("express"),
    Router = _require.Router;

var categoryController = require("../controllers/Categories");

var userController = require("../controllers/User");

var productController = require("../controllers/Product");

var getCategories = categoryController.getCategories,
    getCategory = categoryController.getCategory;
var createUser = userController.createUser,
    loginUser = userController.loginUser,
    getUser = userController.getUser,
    getUsers = userController.getUsers;
var getProduct = productController.getProduct,
    getProducts = productController.getProducts;
var router = Router();
router.get("/get-categories", getCategories);
router.get("/get-category", getCategory);
router.get("/get-users", getUsers);
router.get("/get-user", getUser);
router.post("/signup", createUser);
router.post("/signin", loginUser);
router.get("/get-products", getProducts);
router.get("/get-product", getProduct);
module.exports = router;
//# sourceMappingURL=userRoutes.js.map