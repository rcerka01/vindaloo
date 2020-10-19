var conf = require("./config/config");

var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("index", { puppet: conf.login.user, puddle: conf.login.password });
});

var mainApiController = require('./controllers/mainApiController');
//mainApiController.run(app);

app.listen(conf.app.port);
