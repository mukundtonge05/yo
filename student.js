var express = require('express');

const mysql = require('mysql');

var studentrouter = express();

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'manager',
    database : 'ASDM'
});


var myData = [];

connection.connect();

studentrouter.get("/",function(request,response){
    connection.query(`select * from student`,function(err,result){
        if(err==null)
        {
            response.contentType("application/json");
            response.send(result);
        }
        else{
            response.send("something went wrong");
        }
    })
})

module.exports = studentrouter;