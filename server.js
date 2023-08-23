const express = require('express');
const app = express();
const PORT = 3000;

// Define the endpoint
app.get('/hello', (req, res) => {
    res.send('hello');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});