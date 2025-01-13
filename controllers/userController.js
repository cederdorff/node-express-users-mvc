import User from "../models/User.js";

export async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getUser(req, res) {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: `User not found: ${error.message}` });
  }
}

export async function createUser(req, res) {
  const { name, email, image } = req.body;

  try {
    const user = await User.create({ name, email, image });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email, image } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { name, email, image }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: `User not found: ${error.message}` });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(404).json({ message: `User not found: ${error.message}` });
  }
}
