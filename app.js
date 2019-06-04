const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const deviceRoutes = require('./routes/routes');
const authRoutes = require('./routes/auth');
app.use(bodyParser.text());

const MONGODB_URI =
    'mongodb://amod:hsYTBW6AutMfaTc@cluster0-shard-00-00-mumtp.mongodb.net:27017,cluster0-shard-00-01-mumtp.mongodb.net:27017,cluster0-shard-00-02-mumtp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';



app.use((req, res, next) => {
    let obj = req.body;
        if (!(Object.entries(obj).length === 0 && obj.constructor === Object)) {
            let bodyJson = JSON.parse(req.body);
            console.log('bodyJson', bodyJson)
            if (bodyJson) {
                req.body = bodyJson;
                next();
            } else {
                let error = new Error('No proper Json parsable string');
                next(error);
            }
        }
        else {
            next();
        }
});
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/api/device', deviceRoutes);
app.use('/api/auth', authRoutes);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
})

mongoose
    .connect(MONGODB_URI)
    .then(result => {
        app.listen(process.env.PORT || 5000);
    })
    .catch(err => {
        console.log(err);
    });
