import { getDB } from "../dbConnection.js";

export const getRecipes = async (req, res) => {
  const resp = await getDB().collection("recipes").find().toArray();

  res.status(200).json(resp);
};

export const createRecipe = async (req, res) => {
  const recipeDetails = req.body;

  const { insertedId } = await getDB()
    .collection("recipes")
    .insertOne(recipeDetails);

  res.status(200).json({ message: "Success", insertedId, ...recipeDetails });
};

export const updateRecipe = async (req,res) =>{
    const updatedrecipeDetails = req.body
    const {name} = req.params
    const filter = {name}

    const {matchedCount , modifiedCount} = await getDB()
    .collection("recipes")
    .updateOne(filter, {$set:updatedrecipeDetails})

    res.status(200).json({message:"Success", matchedCount, modifiedCount, ...updatedrecipeDetails})
}

export const deleteRecipe = async (req,res) =>{
    const {name} = req.params
    const filter = {name}

    const {deletedCount} = await getDB()
    .collection("recipes")
    .deleteOne(filter)

    res.status(200).json({message:"Success", deletedCount})
}