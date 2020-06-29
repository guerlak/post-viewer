require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const cors = require("cors");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      cors({
        origin: process.env.WEB_URL,
        optionsSuccessStatus: 200,
      })
    );
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}
module.exports = new App().server;
