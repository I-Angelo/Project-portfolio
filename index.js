const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

// Use the cors middleware to enable CORS
app.use(cors());

// Middleware to parse JSON data
app.use(express.json()); // Replace body-parser with express.json()

// PostgreSQL connection setup (update with your ElephantSQL connection URL)
const connectionString =
  'postgres://kwivcgao:EL9aYvP9vFZvYzhTsivujY2KcFm4px12@peanut.db.elephantsql.com/kwivcgao';
const db = pgp(connectionString);

// Serve static files (e.g., React build) from the 'build' directory
app.use(express.static('build'));

// Check if the database connection was successful
db.connect()
  .then((obj) => {
    console.log('Connected to the database');
    obj.done(); // success, release the connection
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Handle form submissions and insert data into PostgreSQL
app.post('/submit-form', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Your database query here
    const query = 'INSERT INTO contact_me_clients (name, email, message) VALUES ($1, $2, $3)';
    await db.none(query, [name, email, message]);

    // Set the response Content-Type to JSON
    res.setHeader('Content-Type', 'application/json');

    // Send a JSON response
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
