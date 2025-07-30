import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_STRING;
if (!uri) {
  console.error("Environment variable 'MONGODB_CONNECTION_STRING' not found.");
} else {
  const client = new MongoClient(uri);
}
