import { MongoClient } from "mongodb";
import { config } from "dotenv";

config();

const dbUrl = process.env.DB_URL;
let _db;

export async function connectDataBase() {
  try {
    const client = await MongoClient.connect(dbUrl);
    _db = client.db("FSD75A");
    console.log("DB connected....");
  } catch (err) {
    console.log(err);
  }
}

export const getDB = () => {
  return _db;
};
