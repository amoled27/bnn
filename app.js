const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const deviceRoutes = require('./routes/routes');
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/api', deviceRoutes);
app.listen(5000);