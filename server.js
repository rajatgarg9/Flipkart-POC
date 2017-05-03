var express = require('express');
var app = express();
var reload=require('reload');



app.use(express.static('public'));

app.get('/product_page', function(req, res){
   res.sendFile(`file:///D:/Github/Flipkart-POC/product.html`);
   res.setHeader("Content-Type", "text/html"); 
   //res.render('product');
     //res.send(`Hello World! <script src="/reload/reload.js"></script>`);
});



var server=app.listen(3000);
console.log(`listening`);
reload(server,app);




