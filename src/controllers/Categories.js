import Category from "../models/Category";
import { categoryValidation } from "../validation/CategoryValidation";

export default class categoryController {
  // ADDS A CATEGORY TO THE DATABASE
  static async addCategory(req, res) {
    try {
      const { error } = categoryValidation(req.body);
      if (error) return res.status(400).send(error.details[0].message);
      const category = new Category({ name: req.body.name, });
      const savedCategory = await category.save();
      return res.status(201).json({ status: 201, message: "A product has been added.", savedCategory, });
    } catch (err) {
      res.status(500).json({ status: 500, error: "Server Error" });
    }
  }

  // GET BACK ALL THE CATEGORY
  static async getCategories(req, res) {
    try {
      const categories = await Category.find();
      return res.status(200).json({ status: 200, message: "successfully retrieved all categories}", categories, });
    } catch (err) {
      res.status(500).json({ status: 500, error: "Server Error" });
    }
  }

  // get a specific category
  static async getCategory(req, res) {
    const { name } = req.query;
    try {
      const category = await Category.findOne({ name });
      return res.status(200).json({ status: 200, message: `successfully retrieved ${name}`, category, });
    } catch (err) {
      return res.status(404).send({ status: 404, error: `'${name}' does not exists in the database`, });
    }
  }

  // DELETE A SPECIFIC CATEGORY ON THE DATABASE
  static async deleteCategory(req, res) {
    const { name } = req.query;
    try {
      const category = await Category.deleteOne({ name });
      return res.status(200).json({ status: 200, message: "successfully Deleted category" });
    } catch (err) {
      return res.status(404).send({ status: 404, error: `'${name}' does not exists in the database`, });
    }
  }

  // UPDATE A SPECIFIC CATEGORY ON THE DATABASE
  static async updateCategory(req, res) {
    const { name } = req.query;
    try {
      const category = await Category.updateOne({ name },
        { $set: { name: req.body.name } });
      return res.status(200).json({ status: 200, message: "successfully Updated category" });
    } catch (err) {
      return res.status(404).send({ status: 404, error: "Category does not exists in the database", });
    }
  }
}
