import { Router } from "express";
import categoryController from "../controllers/Categories";
import userController from "../controllers/User";
import productController from "../controllers/Product";

const { getCategories, getCategory } = categoryController;
const {
  createUser, loginUser, getUser, getUsers
} = userController;
const { getProduct, getProducts } = productController;

const router = Router();
router.get("/get-categories", getCategories);
router.get("/get-category", getCategory);
router.get("/get-users", getUsers);
router.get("/get-user", getUser);
router.post("/signup", createUser);
router.post("/signin", loginUser);
router.get("/get-products", getProducts);
router.get("/get-product", getProduct);

export default router;
