const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Hello, world'));
app.post('/', (req, res) => res.send('Hello, world'));
app.get('/hello/:name', (req, res) => res.send('Hello ${req.params.name})'));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
