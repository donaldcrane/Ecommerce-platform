const { Seeder } = require('mongo-seeding');
require("dotenv").config();
const config = {
    database: process.env.DB_CONNECTION,
    dropDatabase: true,
  };
const seeder = new Seeder(config);
const path = require('path');

const collections = seeder.readCollectionsFromPath(path.resolve("./src/data"));
require("dotenv").config();


try {
  seeder.import(collections);
} catch (err) {
 console.log(error)
}