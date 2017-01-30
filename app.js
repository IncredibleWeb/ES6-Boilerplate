'use strict';

const express = require('express');
const livereload = require('livereload');

var app = express();

var folder = process.argv[2] || 'src';

if (folder === 'src') {
    livereload.createServer();
    app.use(require('connect-livereload')());
}
app.use(express.static(folder));

app.listen(3000, () => {
    console.log(`Running Packt PWA Demo (${folder}) on localhost:3000`);
});

module.exports = app;
