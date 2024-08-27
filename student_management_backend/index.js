const express = require('express');

// Initialize Express
const app = express();
app.use(express.json());


// Initialize Sequelize with SQLite


// Define the User model

// CRUD Routes

// Create a new user
app.post('/users', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const user = await User.create({ name, email, age });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all users
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Read a single user by ID
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Update a user by ID
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const user = await User.findByPk(id);
  if (user) {
    user.name = name;
    user.email = email;
    user.age = age;
    await user.save();
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});