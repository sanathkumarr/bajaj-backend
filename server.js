const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Helper function to find the highest lowercase alphabet
const findHighestLowercaseAlphabet = (data) => {
  const lowercaseAlphabets = data.filter(item => /^[a-z]$/.test(item));
  return lowercaseAlphabets.length ? [lowercaseAlphabets.sort().pop()] : [];
};

// POST method
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      numbers: [],
      alphabets: [],
      highest_lowercase_alphabet: []
    });
  }

  const numbers = data.filter(item => !isNaN(item)).map(item => item.toString());
  const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
  const highestLowercaseAlphabet = findHighestLowercaseAlphabet(data);

  res.json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
  });
});

// GET method
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
