var express = require('express');
var app = express();
var reload = require('reload');
var path = require('path');
var bodyParser = require('body-parser');
//var fs= require('fs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));
app.use(bodyParser.text());
//app.use(express.static('public'));
//app.use(express.static('data'));


app.get('/product_page', function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, 'public', 'product.html'));
});

app.post('/product_page', function (req, res) {
  res.setHeader("Content-Type", "text/json");
  if (req.query.file == "product_details")
    res.sendFile(path.join(__dirname, 'data', 'product_details.json'));
  else if (req.query.file == "global_keys")
    res.sendFile(path.join(__dirname, 'data', 'global_keys.json'));
  else if (req.query.file == "main_categories")
    res.sendFile(path.join(__dirname, 'data', 'main_category.json'));
  else if (req.query.file == "header")
    res.sendFile(path.join(__dirname, 'data', 'header.json'));
  else if (req.query.file == "footer")
    res.sendFile(path.join(__dirname, 'data', 'footer.json'));
  else if (req.query.file == "product_categories")
    res.sendFile(path.join(__dirname, 'data', 'product_cat.json'));
  else if (req.query.file == "brand")
    res.sendFile(path.join(__dirname, 'data', 'brand.json'));
  else if (req.query.file == "user_info")
    res.sendFile(path.join(__dirname, 'data', 'user_info.json'));
  else
    console.log("file not found");
})




//`

var server = app.listen(3000);
console.log(`running`);
reload(server, app);




