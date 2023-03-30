const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/', async (_, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});

app.post('/', async (req, res) => {
    let data = await dbConnect();
    res.send(req.body);
})

app.listen(5000);