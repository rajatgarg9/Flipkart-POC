var express = require('express');
var app = express();
var reload=require('reload');
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('public'));
//app.use(express.static('data'));


app.get('/product_page', function(req, res){
  res.sendFile(path.join(__dirname, '/public', 'product.html'));
   //res.setHeader("Content-Type", "text/html"); 
});

//

var server=app.listen(3000);
console.log(`listening`);
reload(server,app);




