import mongoose from "mongoose";

// Define the User schema
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Unique email
    image: { type: String, required: true }
  },
  {
    timestamps: true // Adds createdAt and updatedAt fields
  }
);

// Create the User model
const User = mongoose.model("User", UserSchema);
// Export the User model
export default User;
