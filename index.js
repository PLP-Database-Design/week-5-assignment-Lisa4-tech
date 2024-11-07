var express = require("express");
var mysql2 = require("mysql2");
var app = express ();
var connection = require('./database');

app.get('/', function(req, res){
    res.send('Hello world!');
});

app.listen(3306, function(){
    console.log('App listenig on port 3306');
    connection.connect(function(err){
        if(err) throw err;
        console.log ('Database connected!');
    })
});