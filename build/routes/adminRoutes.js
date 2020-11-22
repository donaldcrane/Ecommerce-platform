"use strict";

var _require = require("express"),
    Router = _require.Router;

var categoryController = require("../controllers/Categories");

var userController = require("../controllers/User");

var productController = require("../controllers/Product");

var Auth = require("../utilities/jwt");

var Authentication = require("../middlewares/authenticate");

var deleteCategory = categoryController.deleteCategory,
    addCategory = categoryController.addCategory,
    updateCategory = categoryController.updateCategory;
var updateUser = userController.updateUser,
    deleteUser = userController.deleteUser;
var addProduct = productController.addProduct,
    deleteProduct = productController.deleteProduct,
    updateProduct = productController.updateProduct;
var verifyToken = Auth.verifyToken;
var verifyAdmin = Authentication.verifyAdmin;
var router = Router();
router.post("/admin/category", verifyToken, verifyAdmin, addCategory);
router["delete"]("/delete-category", verifyToken, verifyAdmin, deleteCategory);
router.put("/update-category", verifyToken, verifyAdmin, updateCategory);
router["delete"]("/delete-user", verifyToken, verifyAdmin, deleteUser);
router.put("/update-user", verifyToken, verifyAdmin, updateUser);
router.post("/admin/product", verifyToken, verifyAdmin, addProduct);
router["delete"]("/delete-product", verifyToken, verifyAdmin, deleteProduct);
router.put("/update-product", verifyToken, verifyAdmin, updateProduct);
module.exports = router;
//# sourceMappingURL=adminRoutes.js.map