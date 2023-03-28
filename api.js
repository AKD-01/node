const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.get('/',(req,res) => {
    res.send({name: 'Anjali'})
});

app.listen(5000);