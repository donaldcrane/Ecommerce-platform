const { Router } = require("express");
const categoryController = require ("../controllers/Categories");
const userController = require ("../controllers/User");
const productController = require ("../controllers/Product");
const Auth = require("../utilities/jwt");
const Authentication = require("../middlewares/authenticate");
const { deleteCategory, addCategory, updateCategory } = categoryController;
const { updateUser, deleteUser } = userController;
const { addProduct, deleteProduct, updateProduct } = productController;
const { verifyToken  } = Auth;
const { verifyAdmin  } = Authentication;

const router = Router();


router.post("/admin/category", verifyToken, verifyAdmin, addCategory);
router.delete("/delete-category", verifyToken, verifyAdmin,  deleteCategory);
router.put("/update-category", verifyToken, verifyAdmin,  updateCategory);


router.delete("/delete-user", verifyToken, verifyAdmin, deleteUser);
router.put("/update-user", verifyToken,verifyAdmin, updateUser);


router.post("/admin/product", verifyToken, verifyAdmin, addProduct);
router.delete("/delete-product", verifyToken, verifyAdmin, deleteProduct);
router.put("/update-product", verifyToken, verifyAdmin, updateProduct);

module.exports = router;
