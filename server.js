import express from "express";
import cors from "cors";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser
} from "./controllers/userController.js";
import mongoose from "mongoose";

// ========== Setup ========== //
const app = express();
const PORT = process.env.PORT || 3000;

// ========== Middleware ========== //
app.use(express.json());
app.use(cors());

// ========== Routes ========== //
app.get("/users", getUsers); // Get all users
app.get("/users/:id", getUser); // Get a single user
app.post("/users", createUser); // Create a new user
app.put("/users/:id", updateUser); // Update a user
app.delete("/users/:id", deleteUser); // Delete a user

// ========== Start server ========== //
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

startServer();
