const express = require('express');
const HtmlRoutes = require('/routes/HtmlRoutes.js'); 
const ApiRoutes = require('/routes/ApiRoutes.js'); 
const PORT = process.env.PORT || 3001; // Setting the port for the server to listen on

const app = express(); // Creating an instance of Express

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// Middleware to parse JSON bodies
app.use(express.json()); // Parses incoming requests with JSON payloads

// Serving static files from the 'public' directory
app.use(express.static('public'));

// Mounting HTML routes middleware
app.use(HtmlRoutes); // Including HTML routes

// Mounting API routes middleware
app.use(ApiRoutes); // Including API routes

// Starting the server
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`); // Logging the server URL
});
