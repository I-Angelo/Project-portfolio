const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON data
app.use(bodyParser.json());

// PostgreSQL connection setup
const connectionString = 'postgresql://kwivcgao:EL9aYvP9vFZvYzhTsivujY2KcFm4px12@peanut.db.elephantsql.com/kwivcgao'; // Replace with your ElephantSQL connection URL
const db = pgp(connectionString);

// Serve static files (e.g., React build) from the 'build' directory
app.use(express.static('build'));

// Handle form submissions and insert data into PostgreSQL
app.post('/api/submit-form', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Establish a connection
    const client = await db.connect();

    // Your database query here
    const query = 'INSERT INTO contact_me_clients (name, email, message) VALUES ($1, $2, $3)';
    await client.query(query, [name, email, message]);

    // Release the client
    await db.$pool.end(client);

    res.status(201).json({ message: 'Data submitted successfully' });
  } catch (error) {
    console.error('Error while submitting data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// server.js
