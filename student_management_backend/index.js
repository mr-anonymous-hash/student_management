const express = require('express');
const cors = require('cors')
// Initialize Express
const app = express();

app.use(cors())
app.use(express.json());

app.use('/',require('./src/routes/index'))

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});