const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Future Routing Placeholder
// Example of potential routes for future features:
// app.get('/api/some-data', (req, res) => {
//     // Code to handle data requests here
//     res.json({ message: 'This is some data!' });
// });

// Main entry point for serving the webpage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
