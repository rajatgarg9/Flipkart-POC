var express = require('express');
var app = express();
var reload=require('reload');
var path = require('path');
var bodyParser=require('body-parser');


app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 
app.use( bodyParser.text() ); 
//app.use(express.static('public'));
//app.use(express.static('data'));


app.get('/product_page', function(req, res){
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, '/public', 'product.html') ); 
});

app.post('/product_page',function(req,res){
     res.setHeader("Content-Type", "text/json");
    res.sendFile(path.join(__dirname,'/data', 'product_details.json')); 
    console.log("geneious");
})



//`

var server=app.listen(3000);
console.log(`listening`);
reload(server,app);




