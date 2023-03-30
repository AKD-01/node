const express = require('express');
const dbConnect = require('./mongodb');
const app = express();  

app.get('/', async (_, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});

app.post('/', (req, res) => {
    res.send({name: "Anjali"});
})

app.listen(5000);