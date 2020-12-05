const express = require("express");
const routes = express.Router();

const recipeController = require("./controllers/RecipeController");

routes.get("/recipes", recipeController.getRecipes);

module.exports = routes;