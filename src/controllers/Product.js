const Product = require("../models/Product");
const { productValidation } = require("../validation/productValidation");


class productController {
    //ADDS A PRODUCT TO THE DATABASE
    static async addProduct(req, res) {
        try{
            const {error} = productValidation(req.body);
            if (error) return res.status(400).send(error.details[0].message);
            const product = new Product({name: req.body.name,categoryName: req.body.categoryName,price: req.body.price})
            const savedProduct = await product.save()
            return res.status(201).json({ status: 201, message: "A product has been added.", savedProduct, });
        } catch (err)  {
        res.status(500).json({ status: 500, error: "Server Error" });
    }}

    // GET BACK ALL THE PRODUCTS ON THE DATABASE
    static async getProducts(req, res) {
        try{
            const product = await Product.find();
            return res.status(200).json({ status: 200, message: `successfully retrieved products}`, product, });
        } catch (err)  {
        res.status(500).json({ status: 500, error: "Server Error" });
    }}

    //get a specific product
    static async getProduct(req, res) {
        const { name } = req.params;
        try{
            const product = await Product.findOne({name: name});
            return res.status(200).json({ status: 200, message: `successfully retrieved ${product.name}`, product, });
        } catch (err)  {
        return res.status(404).send({status: 404,error: `'${name}' State does not exists in the database`});
    }}

    //DELETE A SPECIFIC PRODUCT FROM THE DATABASE
    static async deleteProduct(req, res) {
        const { name } = req.params;
        try{
            const product = await Product.deleteOne({name: name});
            return res.status(200).json({ status: 200, message: `successfully Deleted ${name} from database` });
        } catch (err)  {
        return res.status(404).send({status: 404,error: `'${name}' does not exists in the database`,});
    }}

    //UPDATE A SPECIFIC PRODUCT ON THE DATABASE
    static async updateProduct(req, res) {
        const { id } = req.params;
        try{
            const product = await Product.findByIdAndUpdate({_id: id}, 
                {$set: {name: req.body.name, categoryName: req.body.categoryName, price: req.body.price}
                });
            return res.status(200).json({ status: 200, message: `successfully Updated ${product.name}`, product});
            
        } catch (err)  {
        return res.status(404).send({ status: 404, error: "sorry Product does not exist in the database" });
    }}
}

module.exports = productController;