'use strict';

const router = require('./router.js')

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

let db = [];

const errorHandler = require('./errorHandler.js')

app.use('/api/v1', router);

// When does this middleware run?
// What does it do?
app.use(express.json());

// When does this middleware run?
app.use((req, res, next) => {
  console.log('LOG:', req.method, req.path);
  next();
});


app.use(errorHandler)

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

