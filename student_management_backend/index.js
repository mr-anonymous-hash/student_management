const express = require('express');

// Initialize Express
const app = express();
app.use(express.json());


app.use('/',require('./src/routes/index'))

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});