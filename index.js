const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello from node.js!');
});

app.listen(port);