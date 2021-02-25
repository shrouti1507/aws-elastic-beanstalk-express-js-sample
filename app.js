const express = require('express');
const app = express();
const port = 8084;

app.get('/', (req, res) => res.send('message changed'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
