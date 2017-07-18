var express = require('express'),
  app = express(),
  reload = require('reload'),
  path = require('path'),
  bodyParser = require('body-parser'),
  fs = require('fs'),
  util = require('util'),
  _ = require('lodash');


// console.log(process.env);
  console.log(`argv= ${process.argv}`);
      console.log(`env= ${process.env.PORT}`);

app.use(express.static(path.join(__dirname,'src','assets')));
app.use('/bower',express.static(path.join(__dirname,'bower_components')));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: false
}));
app.use(bodyParser.text());




app.get('/product_page', function (req, res) {
  res.setHeader("Content-Type", "text/html");
 res.sendFile(path.join(__dirname, 'src', 'product.html'));
});

app.post('/product_page', function (req, res) {

  if (req.query.type == "requiredData") {
    res.setHeader("Content-Type", "text/json");
    if (req.query.file == "product_details") {

      let _productDetailsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'test', 'product_details.json')), "utf-8");

      _.flatMap(_productDetailsData.products, function (c) {
        if (c.id === req.body.id) {
          res.send(c);
        }
      });

    } else if (req.query.file == "global_keys")
      res.sendFile(path.join(__dirname, 'test', 'global_keys.json'));
    else if (req.query.file == "main_categories")
      res.sendFile(path.join(__dirname, 'test', 'main_category.json'));
    else if (req.query.file == "header")
      res.sendFile(path.join(__dirname, 'test', 'header.json'));
    else if (req.query.file == "footer")
      res.sendFile(path.join(__dirname, 'test', 'footer.json'));
    else if (req.query.file == "product_categories")
      res.sendFile(path.join(__dirname, 'test', 'product_cat.json'));
    else if (req.query.file == "brand")
      res.sendFile(path.join(__dirname, 'test', 'brand.json'));
    else if (req.query.file == "user_info")
      res.sendFile(path.join(__dirname, 'test', 'user_info.json'));
    else if (req.query.file == "reviews") {

      let _reviewsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'test', 'reviews.json')), "utf-8"),
        _selectedreviewsData = {
          "reviews": []
        }

      _.flatMap(_reviewsData.reviews, function (c) {
        if (c.product_id === req.body.product_id) {
          _selectedreviewsData.reviews.push(c);
        }
      });

      res.send(_selectedreviewsData);

    } else if (req.query.file == "specifications") {

      let _specificationsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'test', 'specifications.json')), "utf-8");

      _.flatMap(_specificationsData.specifications, function (c) {
        if (c.product_id === req.body.product_id) {
          res.send(c);
        }
      });

    }
    else
      console.log("file not found");
  }
  else if (req.query.type == "forDB") {
    if (req.query.file == "reviews" && req.query.action == "increaseLikes") {
      likeDislikeincrementor(req, res, "increaseLikes");
    } else if (req.query.file == "reviews" && req.query.action == "increase_disLikes") {
      likeDislikeincrementor(req, res, "increase_dislikes");
    }
  }
})



/*
 * @method:likeDislikeincrementor
 * @param:{object}req , {object}res , {string}action
 * @desc: increase like and dislike counter in review API based on ajax call
 * @return: underfined{undefined}
 */

function likeDislikeincrementor(req, res, action) {
  let _content = JSON.parse(fs.readFileSync(path.join(__dirname, 'test', 'reviews.json'), "utf-8"));

  _.flatMap(_content.reviews, function (c) {
    if (c.id == req.body.id) {
      if (action == "increaseLikes")
        c.details.likes = (Number(c.details.likes) + 1).toString();
      else if (action == "increase_dislikes")
        c.details.dis_likes = (Number(c.details.dis_likes) + 1).toString();


      fs.writeFile(path.join(__dirname, 'test', 'reviews.json'), JSON.stringify(_content, null, 2), "utf-8", function (err) {
        if (err)
          console.log(err);

        return res.send();
      })
    }
  })
}

var server = app.listen(3000);
console.log(`running`);
reload(server, app);