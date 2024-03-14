const express = require('express');
const HtmlRoutes = require(/Users/ukudei/Desktop/UTBootcamp/JotBot/routes/HtmlRoutes.js)
const ApiRoutes = require(/Users/ukudei/Desktop/UTBootcamp/JotBot/routes/ApiRoutes.js)
const PORT = port.env.PORT || 3001;
//
const app = express();

//
app.use(express.urlencoded({ extended: false}));
app.use{express.json()};
app.use(express.static('public'));
app.use(HtmlRoutes)
app.use(ApiRoutes)

app.listen(PORT, () => {
    console.log(' Server Running on http://localhost:${port3001}')
})