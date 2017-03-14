var express = require('express');
var app = express();
var fs = require('fs');
var contents = ""; 
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ibm',  function (req, res) {
    contents = fs.readFileSync('./data/ibm.csv', 'utf8');
    res.json(contents);
    console.log(" - sending ibm  data ");
})
app.get('/spy', function (req, res) {
    contents = fs.readFileSync('./data/spy.csv', 'utf8');
    res.json(contents);
    console.log(" - sending spy  data ");
})
app.get('/tsla', function (req, res) {
    contents = fs.readFileSync('./data/tsla.csv', 'utf8');
    res.json(contents);
    console.log(" - sending tsla data ");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})