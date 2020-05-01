// jshint esversion: 6
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const today = new Date();
const year = today.getFullYear();

app.get("/", function(req, res){
  res.render("index", {year: year});
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(){
  console.log("server started at port 3000");
} );
