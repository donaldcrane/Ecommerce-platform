const { Router } = require("express");
const categoryController = require ("../controllers/Categories");
const userController = require ("../controllers/User");
const productController = require ("../controllers/Product");
const Auth = require("../utilities/jwt")
const { deleteCategory, addCategory, updateCategory } = categoryController;
const { updateUser, deleteUser } = userController;
const { addProduct, deleteProduct, updateProduct } = productController;
const { verifyToken  } = Auth;

const router = Router();


router.post("/admin/category", verifyToken, addCategory);
router.delete("/delete-category", verifyToken,  deleteCategory);
router.put("/update-category", verifyToken,  updateCategory);


router.delete("/delete-user", verifyToken, deleteUser);
router.put("/update-user", verifyToken, updateUser);


router.post("/admin/product", verifyToken, addProduct);
router.delete("/delete-product", verifyToken, deleteProduct);
router.put("/update-product", verifyToken, updateProduct);

module.exports = router;
