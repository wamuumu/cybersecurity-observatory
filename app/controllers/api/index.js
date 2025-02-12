const express = require('express');
const app = express();

//routing
app.use('/antimalware', require('./antimalware'));
app.use('/dga-detection', require('./dga'));
app.use('/cve-search', require('./cve'));
app.use('/survey', require('./survey'));

app.use('/users', require('./user'));
app.use('/', require('./auth'));

module.exports = app
