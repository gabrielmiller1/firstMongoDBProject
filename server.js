const express = require('express');
const server = express();
const PORT = 3000;
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute');
const path = require('path');

mongoose.connect("mongodb://localhost/newlinks", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", () => console.log("Houve um erro"));
db.once("open", () => console.log("Banco carregado"));

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'tamplates'));

server.use('/', linkRoute);

server.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))