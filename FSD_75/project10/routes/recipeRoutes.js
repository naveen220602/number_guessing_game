import express from "express";
import { createRecipe, deleteRecipe, getRecipes, updateRecipe } from "../controllers/recipeController.js";

const RecipeRoute = express.Router();

RecipeRoute.get("/", getRecipes);
RecipeRoute.post("/", createRecipe);
RecipeRoute.put("/:name", updateRecipe)
RecipeRoute.delete("/:name", deleteRecipe)
export default RecipeRoute;
