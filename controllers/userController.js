// userController.js
const users = require('../models/userModel');
const UserFactory = require('../utils/userFactory');

// Fungsi untuk mendapatkan semua pengguna
const getAllUsers = (req, res) => {
  res.json(users);
};

// Fungsi untuk membuat pengguna baru
const createUser = (req, res) => {
  const { name, role } = req.body;
  const id = users.length + 1;
  const user = UserFactory.createUser(name, role);
  user.id = id;
  users.push(user);
  res.status(201).json({ message: 'User created', user });
};

// Update a user by ID
const updateUserById = (req, res) => {
  const { id } = req.params;
  const { name, role } = req.body;
  const user = users.find((u) => u.id === parseInt(id));

  if (user) {
    user.name = name || user.name;
    user.role = role || user.role;
    res.json({ message: 'User updated', user });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// Delete a user by ID
const deleteUserById = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u) => u.id === parseInt(id));

  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.json({ message: 'User deleted', user: deletedUser[0] });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// Delete all users
const deleteAllUsers = (req, res) => {
  users.length = 0;
  res.json({ message: 'All users deleted' });
};

module.exports = { getAllUsers, createUser, updateUserById, deleteUserById, deleteAllUsers };