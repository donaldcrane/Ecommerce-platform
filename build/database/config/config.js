"use strict";

require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DB_CONNECTION
  },
  test: {
    url: process.env.TEST_DATABASE_URL
  },
  production: {
    url: process.env.DATABASE_URL
  }
};
//# sourceMappingURL=config.js.map