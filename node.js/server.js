var express = require('express');
var app = express();
var reload=require('reload');

app.get('/hello', function(req, res){
	res.send(`Hello World!
   ${app}
     <script src="/reload/reload.js"></script>
  `);
});

app.post('/hello', function(req, res){
	res.send("You just called the post method at '/hello'!\n");
});

var server=app.listen(3000);
console.log(`listening`);
reload(server,app);
