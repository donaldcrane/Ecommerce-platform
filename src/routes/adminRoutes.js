import { Router } from "express";
import categoryController from "../controllers/Categories";
import userController from "../controllers/User";
import productController from "../controllers/Product";
import Auth from "../utilities/jwt";
import Authentication from "../middlewares/authenticate";

const { deleteCategory, addCategory, updateCategory } = categoryController;
const { updateUser, deleteUser } = userController;
const { addProduct, deleteProduct, updateProduct } = productController;
const { verifyToken } = Auth;
const { verifyAdmin } = Authentication;

const router = Router();

router.post("/admin/category", verifyToken, verifyAdmin, addCategory);
router.delete("/delete-category", verifyToken, verifyAdmin, deleteCategory);
router.put("/update-category", verifyToken, verifyAdmin, updateCategory);

router.delete("/delete-user", verifyToken, verifyAdmin, deleteUser);
router.put("/update-user", verifyToken, verifyAdmin, updateUser);

router.post("/admin/product", verifyToken, verifyAdmin, addProduct);
router.delete("/delete-product", verifyToken, verifyAdmin, deleteProduct);
router.put("/update-product", verifyToken, verifyAdmin, updateProduct);

export default router;
