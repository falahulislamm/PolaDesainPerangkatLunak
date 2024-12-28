const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Use user routes
app.use(userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});