"use strict";

var _require = require('mongo-seeding'),
    Seeder = _require.Seeder;

require("dotenv").config();

var config = {
  database: process.env.DB_CONNECTION,
  dropDatabase: true
};
var seeder = new Seeder(config);

var path = require('path');

var collections = seeder.readCollectionsFromPath(path.resolve("./src/data"));

require("dotenv").config();

try {
  seeder["import"](collections);
} catch (err) {
  console.log(error);
}
//# sourceMappingURL=seeder.js.map