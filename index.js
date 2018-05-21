var express = require("express");
var bodyParser = require("body-parser");
//var cors = require("cors");

var app = express();
//app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json())

require('./routes/leak_test')(app);

app.listen(3001, function() {
  console.log("Express running");
});
