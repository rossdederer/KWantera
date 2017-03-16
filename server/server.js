var express = require('express');
var app = express();
var fs = require('fs');
var contents = ""; 
var cors = require('cors');
var bodyParser = require('body-parser');
var mongo = require('mongoskin');
// use driver version 1.2 of mongo 
/** 
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var assert      = require('assert');
*/ 

var URL = 'mongodb://172.16.0.9:27017/stocks';

var db = mongo.db(URL, { native_parser: true });


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ibm',  function (req, res) {
    db.bind('ibm');
    db.ibm.find().toArray(function (err, ibm) {
        res.json(ibm);
    });
})
app.get('/spy', function (req, res) {
    db.bind('spy');
    db.spy.find().toArray(function (err, spy) {
        res.json(spy);  
    });
})
app.get('/tsla', function (req, res) {
    db.bind('tsla');
    db.tsla.find().toArray(function (err, tsla) {
        res.json(tsla);
    });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})