const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/userRoutes");
const adminRoutes = require("./src/routes/adminRoutes");

require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.DB_CONNECTION,{
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex: true
}, ()=>
  console.log("Connected to MongoDB")
);

const port = process.env.PORT || 3000;

app.use("/api/v1/", adminRoutes);
app.use("/api/v1/", userRoutes);



app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce platform");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

module.exports = app;