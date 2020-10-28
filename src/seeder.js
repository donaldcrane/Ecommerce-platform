const { Seeder } = require('mongo-seeding');
const config = {
    database: process.env.DB_CONNECTION,
    dropDatabase: true,
  };
const seeder = new Seeder(config);
const path = require('path');

const collections = seeder.readCollectionsFromPath(path.resolve("./src/data"));
require("dotenv").config();


seeder
  .import(collections)
  .then(() => {
    // Do whatever you want after successful import
    console.log("success");
  })
  .catch(err => {
    // Handle errors
    res.send(err);
  });