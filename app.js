'use strict';

const express = require('express');

var app = express();

var folder = process.argv[2] || 'src';

if (folder === 'src') {
    app.use(require('connect-livereload')());
}
app.use(express.static(folder));

app.listen(3000, () => {
    console.log(`Running Packt PWA Demo (${folder}) on localhost:3000`);
});

module.exports = app;
