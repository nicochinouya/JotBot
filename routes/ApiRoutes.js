const router = require('express').Router();
const { v4: uuidv4 } = require('uuid'); // Importing UUID for generating unique IDs
const fs = require('fs'); // Importing the File System module for file operations

// Get request route to fetch all notes
router.get('/api/notes', async (req, res) => {
    // Reading the content of the JSON file synchronously and parsing it into a JavaScript object
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json")); 
    // Sending the JSON response containing all notes to the client
    res.json(dbJson);
});

// Post request endpoint to add a new note
router.post('/api/notes', (req, res) => {
    // Reading the content of the JSON file synchronously and parsing it into a JavaScript object
    const dbJson = JSON.parse(fs.readFileSync('db/db.json'));
    // Creating a new note object with the provided title, text, and a unique ID generated using UUID
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    // Adding the newly created note to the existing list of notes
    dbJson.push(newFeedback);
    // Writing the updated list of notes back to the JSON file
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
    // Sending the JSON response containing the newly added note to the client
    res.json(newFeedback);
});

// Delete request endpoint to remove a note by ID
router.delete('/api/notes/:id', (req, res) => { 
    // Reading the content of the JSON file synchronously and parsing it into a JavaScript object
    let data = fs.readFileSync('db/db.json', "utf8");
    const dataJSON = JSON.parse(data);
    // Filtering out the note with the provided ID from the list of notes
    const newNotes = dataJSON.filter((note) => note.id !== req.params.id);
    // Writing the filtered list of notes back to the JSON file, effectively deleting the specified note
    fs.writeFileSync('db/db.json', JSON.stringify(newNotes));
    // Sending a confirmation message to the client
    res.json('Note deleted.');
});

module.exports = router;
