const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const jwtHelper = ("../utilities/jwt");
const { loginValidation, registerValidation} = require("../validation/userValidation");



class userController{
    //REGISTER A USER TO THE DATABASE
    static async createUser(req, res) {
        
        const {error} = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        
        const Email = (req.body.email).toLowerCase();
        const Username = (req.body.username).toLowerCase();
        const emailExist = await User.findOne({email: Email});
        if (emailExist) return res.status(409).send("Email already exist on the database");
         
        // const salt = await bcrypt.gentSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        const user = new User({username: Username,email: Email,password: hashedPassword});
        try{
        const savedUser = await user.save();

        return res.status(201).json({ status: 201, message: "A user has been successfully registered you can Log in." });
        } catch (err)  {
        res.status(500).json({ status: 500, error: "Server Error" });
    }}


    //SIGN IN A USER TO THE DATABASE
    static async loginUser(req, res) {
        try{
        const {error} = loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if (!user) return res.status(409).send("Email does not exist on the database");
        
        const validpass = await bcrypt.compare(password, user.password);
        if (!validpass) return res.status(404).json({ status: 400, error: "Password is not correct!." });
        
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.header("auth-token", token);
        return res.status(200).json({ status:200, message: "User Logged in!", token});
        } catch (err)  {
        res.status(500).json({ status: 500, error: "Server Error" });
    }}

    // GET BACK ALL THE users
    static async getUsers(req, res) {
        try{
            const users = await User.find();
            return res.status(200).json({ status: 200, message: "successfully retrieved all users", users, });
        } catch (err)  {
        res.status(500).json({ status: 500, error: "Server Error" });
    }}

    //get a specific user
    static async getUser(req, res) {
        const { name } = req.query;
        try{
            const user = await User.findOne({username: name});
            return res.status(200).json({ status: 200, message: `successfully retrieved ${user.name} details`, user, });
        } catch (err)  {
        return res.status(404).send({status: 404,error: `${name} does not exists in the database`,});
    }}

    // DELETE A SPECIFIC USER FROM THE DATABASE
    static async deleteUser(req, res) {
        const { name } = req.query;
        try{
            console.log(name);
            const deleteduser = await Product.remove({username: name});
            return res.status(200).json({ status: 200, message: `successfully Deleted ${deleteduser.name}` });
        } catch (err)  {
        return res.status(404).send({status: 404,error: `'${name}' does not exists in the database`,});
    }}

    static async updateUser(req, res) {
        const { id } = req.query;
        try{
            const updateduser = await User.findByIdAndUpdate({_id: id}, 
                {$set: {username: req.body.name}
                });
            return res.status(200).json({ status: 200, message: `successfully Updated ${updateduser.name} details`, updateduser});
            
        } catch (err)  {
        return res.status(404).send({status: 404,error: "User does not exists in the database",});
    }
    }
}

module.exports = userController;