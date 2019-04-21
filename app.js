const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const deviceRoutes = require('./routes/routes');
const mongoose = require('mongoose');
app.use(bodyParser.text());

const MONGODB_URI =
    'mongodb://amod:hsYTBW6AutMfaTc@cluster0-shard-00-00-mumtp.mongodb.net:27017,cluster0-shard-00-01-mumtp.mongodb.net:27017,cluster0-shard-00-02-mumtp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';


// https://gist.github.com/3750227

// app.use(function (req, res, next) {
//     if (req.is('text/*')) {
//         req.text = '';
//         req.setEncoding('utf8');
//         req.on('data', function (chunk) { req.text += chunk });
//         req.on('end', next);
//     } else {
//         next();
//     }
// });
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/api', deviceRoutes);

mongoose
    .connect(MONGODB_URI)
    .then(result => {
        app.listen(process.env.PORT || 5000);
    })
    .catch(err => {
        console.log(err);
    });

// app.use('/', { message: hello});