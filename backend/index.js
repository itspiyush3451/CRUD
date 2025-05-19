import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { User } from "./models/Users.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/CRUD")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/createUser", async (req, res) => {
  try {
    const { id, name, age, email } = req.body;
    const newUser = new User({
      id,
      name,
      age,
      email,
    });
    await newUser.save();
    res.status(201).send("User Created");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});

app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
