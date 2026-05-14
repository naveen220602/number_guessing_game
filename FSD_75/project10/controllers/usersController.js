import { getDB } from "../dbConnection.js";
import { ObjectId } from "mongodb";


export const getUsers = async (req, res) => {
  const resp = await getDB().collection("users").find().toArray();

  res.status(200).json(resp);
};

export const createUser = async (req, res) => {
  const userDetails = req.body;

  const { insertedId } = await getDB()
    .collection("users")
    .insertOne(userDetails);

  res.status(200).json({ message: "Success", insertedId, ...userDetails });
};
export const updateUser = async(req,res) =>{
    const updateduserDeatails = req.body

    const {name} = req.params
    
    const filter = { name }

    const{matchedCount, modifiedCount} = await getDB()
    .collection("users")
    .updateOne(filter, {$set:updateduserDeatails})

    res.status(200).json({message:"Success", matchedCount, modifiedCount, ...updateduserDeatails})
}

export const deleteUser = async(req,res)=>{
    const {name} = req.params

    const filter = {name}

    const {deletedCount} = await getDB()
    .collection("users")
    .deleteOne(filter)

    res.status(200).json({message:"Success" , deletedCount})
}
