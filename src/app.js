import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, () => console.log("Connected to MongoDB"));

const port = process.env.PORT || 3000;

app.use("/api/v1/", adminRoutes);
app.use("/api/v1/", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce platform");
});

app.listen(port || 3000, () => {
  console.log(`Server Running on: ${port}`);
});

module.exports = app;
