var express = require('express');
var app = express();
var reload=require('reload');
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('public'));
//app.use(express.static('data'));


app.get('/product_page', function(req, res){
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, '/public', 'product.html') ); 
});
app.post('/product_page',function(req,res){
  res.setHeader("Content-Type", "text/json");
  res.sendFile(path.join(__dirname,'/data', 'product_details.json'));
  console.log("data sent");
})





var server=app.listen(3000);
console.log(`listening`);
reload(server,app);




