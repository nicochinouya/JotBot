const router = require('express').Router(); // Importing the Router module from Express
const path = require('path');

// Route to serve the homepage (index.html)
router.get('/', (req, res) => {
    // Sending the index.html file located in the 'public' directory
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route to serve the notes page (notes.html)
router.get('/notes', (req, res) => {
    // Sending the notes.html file located in the 'public' directory
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router; // Exporting the router object for use in other parts of the application
