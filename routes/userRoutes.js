const express = require("express");

const userController = require("../controllers/userController");

const routes = express.Router();

routes.get("/", userController.getAll);
routes.get("/:id",userController.getById)
// routes.post("/login",authController.login)

module.exports = routes