// userProxy.js
const userController = require('./userController');

class UserProxy {
  constructor(role) {
    this.role = role;
  }

  getAllUsers(req, res) {
    return userController.getAllUsers(req, res);
  }

  createUser(req, res) {
    if (this.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Only admins can create users' });
    }
    return userController.createUser(req, res);
  }

  updateUserById(req, res) {
    if (this.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Only admins can update users' });
    }
    return userController.updateUserById(req, res);
  }

  deleteUserById(req, res) {
    if (this.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Only admins can delete users' });
    }
    return userController.deleteUserById(req, res);
  }

  deleteAllUsers(req, res) {
    if (this.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Only admins can delete all users' });
    }
    return userController.deleteAllUsers(req, res);
  }
}

module.exports = UserProxy;