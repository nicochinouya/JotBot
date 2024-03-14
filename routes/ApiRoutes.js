const router = require('express').Router();
const {v4: uuidv4 } = require{uuid};
const fs =("fs");

//Get request route
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json"
    res.json(dbJson));
})

//Post request end point
router.post('/api/notes', (req, res) => {
    const dbJson =JSON.parse(fs.readFileSync('db/db.json'))
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    }})

    //
    //
    //
    //
    router.delete('/api/notes:id', (req, res) => {
        let data = fs.readFileSync('db/db.json', "utf8");
        const dataJSON = JSON.parse(data)
        const newNotes = dataJSON.filter((note))
        res.json('Note deleted.');
    }
    )

    module.exports = router