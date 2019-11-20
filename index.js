var express = require('express');

var studroute = require('./student');

var app = express();

const port = 4000;

app.use (express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use ("/student",studroute);


app.listen(port,function(){
    console.log("Server started" + port);
})