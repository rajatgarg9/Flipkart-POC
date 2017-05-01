var express = require('express');
var app = express();
var reload=require('reload');

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/product_page', function(req, res){
   res.sendFile(`file:///D:/Github/Flipkart-POC/product.html`);
     //res.send(`Hello World! <script src="/reload/reload.js"></script>`);
});


var server=app.listen(3000);
console.log(`listening`);
reload(server,app);
