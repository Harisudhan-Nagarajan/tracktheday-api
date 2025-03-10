import express from "express";
import 'dotenv/config';
import { MongoClient, ServerApiVersion } from "mongodb";

import userRoutes from "./app/routes/user.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;

const MONGO_URL = "mongodb+srv://hari_user:pWfNrvKBd2W24zSX@cluster0.kdzch.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoClient = new MongoClient(MONGO_URL,{
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const connectToMongo = async () => {
  try {
    await mongoClient.connect();
    await mongoClient.db("todolist").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.log("Error while connecting to MongoDB", error);
  }
};

connectToMongo()

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});