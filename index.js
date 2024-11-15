const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello!');
});
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from node.js backend!'});
});

app.listen(port);