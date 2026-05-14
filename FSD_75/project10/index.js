import express from "express"
import {config} from "dotenv"
import { connectDataBase } from "./dbConnection.js";
import RecipeRoute from "./routes/recipeRoutes.js";
import UserRoute from "./routes/userRoutes.js";
const app = express()
config();
app.use(express.json())
app.use("/recipe",RecipeRoute)
app.use("/user",UserRoute)

const port = process.env.PORT

async function startServer() {
  await connectDataBase();
  app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`);
  });
}

startServer();