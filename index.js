var http = require('http'); 
var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.static('Assets'));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.listen(3000,function(){
    console.log('running');
})