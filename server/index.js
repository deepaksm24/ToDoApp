// server.js

const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = process.env.PORT || 5000;

// Use the cors middleware with appropriate options
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
  credentials: true, // Enable cookies and authentication headers if needed
}));

// Define a sample API route
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the Node.js API!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
