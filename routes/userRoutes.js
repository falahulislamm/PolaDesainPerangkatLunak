const express = require('express');
const UserProxy = require('../controllers/userProxy');

const router = express.Router();

// Simulasi role pengguna saat ini
const currentUserRole = 'admin'; // Ganti dengan 'user' untuk pengujian

// Buat instance proxy
const userProxy = new UserProxy(currentUserRole);

// Define routes
router.get('/', (req, res) => {
  res.send('Welcome to Gym Management User');
});

router.get('/gym', (req, res) => userProxy.getAllUsers(req, res));
router.post('/gym', (req, res) => userProxy.createUser(req, res));
router.put('/gym/:id', (req, res) => userProxy.updateUserById(req, res));
router.delete('/gym/:id', (req, res) => userProxy.deleteUserById(req, res));
router.delete('/gym', (req, res) => userProxy.deleteAllUsers(req, res));

module.exports = router;