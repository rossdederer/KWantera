var express = require('express');
var app = express();
var fs = require('fs');
var contents = ""; 
var cors = require('cors');
var bodyParser = require('body-parser');
var mongo = require('mongoskin');

// Change this to point to your local DB. 
// I imported my csv files into the DB called stocks 
var URL = 'mongodb://172.16.0.9:27017/stocks';

// create the DB object
var db = mongo.db(URL, { native_parser: true });
// this will allow us to do cross origin requests over a local network 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API calls to send public JSON stock data. 
// the three stocks are broken into three collections, ibm, spy, and tsla 
app.get('/ibm',  function (req, res) {
    db.bind('ibm');
    db.ibm.find().toArray(function (err, ibm) {
        res.json(ibm);
        console.log("Sending IBM Data");
    });
})
app.get('/spy', function (req, res) {
    db.bind('spy');
    db.spy.find().toArray(function (err, spy) {
        res.json(spy);  
        console.log("Sending SPY Data");
    });
})
app.get('/tsla', function (req, res) {
    db.bind('tsla');
    db.tsla.find().toArray(function (err, tsla) {
        res.json(tsla);
        console.log("Sending TSLA Data");
    });
})

// Update the port as needed. default is 3000/ 
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})