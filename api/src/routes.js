const { Router } = require("express");
const PostController = require("./controllers/PostController");
const UserController = require("./controllers/UserController");
const routes = new Router();

routes.get("/", (req, res) => res.json({ message: "Post AnalyticsAPI" }));
routes.get("/posts", PostController.index);
routes.get("/posts/:id", PostController.getById);
routes.get("/users", UserController.index);

module.exports = routes;
