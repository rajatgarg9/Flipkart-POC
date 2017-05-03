var express = require('express');
var app = express();
var reload=require('reload');
const path = require('path');


app.use('/public',express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'data')));


app.get('/product',function(req,res){
  //res.send(`Hello World! <script src="/reload/reload.js"></script>`);
  //console.log(/public);
  res.sendFile(`/github/flipkart-poc/public/product.html`);
})
     




var server=app.listen(3000);
console.log(`listening`);
reload(server,app);




