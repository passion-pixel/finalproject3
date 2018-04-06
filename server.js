var express = require('express');
var app = express();

//Middleware

app.use(express.static('public'));

//Routes
app.get("/", function(request, response) {
  response.send('Was good World');
});



// SERVER START
app.listen(3000, function () {
  console.log("HTTP server listening at localhost:3000");
});