var express = require('express');
var app = express();
;

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
app.use("/public", express.static(__dirname + "/public"));

app.post("/name", function(req, res) {
    // Handle the data in the request
    
    res.send("Submitted successfully!")
  });

































 module.exports = app;
