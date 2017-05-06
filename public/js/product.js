"use strict";

var xttp,
productDetails;
//if (window.XMLHTTPRequest)
    xttp = new XMLHttpRequest();
//else
  //  xttp = new ActiveXObject("Microsoft.XMLHTTP");

xttp.open("POST", "/product_page?page=data", true);
xttp.send();

xttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        productDetails=JSON.parse(this.responseText);
    



/*
* @method:Anonymous
* @param:No parameters
* @desc :Load product page main body data from JSON by Handlebars
* @return: undefined{undefined}
*/
(() => {
    var _productImageListTemplate = {
        raw_temp: document.getElementById("product-images-list-template").innerHTML,
        context: productDetails.products[0],
        dest_node: document.getElementById("product-images-list"),
        node_position: 'beforeend'
    },
        _productImageContainertTemplate = {
            raw_temp: document.getElementById("product-img-container-template").innerHTML,
            context: productDetails.products[0],
            dest_node: document.getElementById("product-img-container"),
            node_position: 'beforeend'
        },
        _addCartBuyBtnTemplate = {
            raw_temp: document.getElementById("add-cart-buy-btn-template").innerHTML,
            context: globalKeys.global_keys,
            dest_node: document.getElementById("add-cart-buy-btn"),
            node_position: 'beforeend'
        },
        _totalRateReviewTemplate = {
            raw_temp: document.getElementById("total-rating-reviews-template").innerHTML,
            context: globalKeys.global_keys,
            dest_node: document.getElementById("total-rating-reviews"),
            node_position: 'beforeend'
        },
        _specHeadingTemplate = {
            raw_temp: document.getElementById("spec-list-heading-template").innerHTML,
            context: globalKeys.global_keys,
            dest_node: document.getElementById("spec-list"),
            node_position: 'afterbegin'
        },
        _specTemplate = {
            raw_temp: document.getElementById("spec-list-template").innerHTML,
            context: productDetails.products[0],
            dest_node: document.getElementById("spec-list"),
            node_position: 'beforeend'
        },
        _totalReviewBottomTemplate = {
            raw_temp: document.getElementById("total-review-bottom-template").innerHTML,
            context: globalKeys.global_keys,
            dest_node: document.getElementById("total-review-bottom"),
            node_position: 'beforeend'
        },
        _rateReviewBtnTemplate = {
            raw_temp: document.getElementById("rate-review-btn-template").innerHTML,
            context: globalKeys.global_keys.flipkart_rate_review,
            dest_node: document.getElementById("rate-review-btn"),
            node_position: 'beforeend'
        },
        _commentTypeTemplate = {
            raw_temp: document.getElementById("comment-type-list-template").innerHTML,
            context: globalKeys.global_keys.flipkart_type_of_comment,
            dest_node: document.getElementById("comment-type-list"),
            node_position: 'beforeend'
        },
        _reviewTemplate = {
            raw_temp: document.getElementById("review-list-template").innerHTML,
            context: Object.assign({}, productDetails.products[0], globalKeys.global_keys),
            dest_node: document.getElementById("comment-sec"),
            node_position: 'beforeend'
        },
        _productHeadingTemplate = {
            raw_temp: document.getElementById("product-heading-template").innerHTML,
            context: productDetails.products[0],
            dest_node: document.getElementById("product-heading"),
            node_position: 'beforeend'
        },
        _productPriceTemplate = {
            raw_temp: document.getElementById("product-price-template").innerHTML,
            context: productDetails.products[0],
            dest_node: document.getElementById("product-price"),
            node_position: 'beforeend'
        }

    //function call
    templateHandler(_productImageListTemplate);
    templateHandler(_productImageContainertTemplate);
    templateHandler(_addCartBuyBtnTemplate);
    templateHandler(_totalRateReviewTemplate);
    templateHandler(_specHeadingTemplate);
    templateHandler(_specTemplate);
    templateHandler(_totalReviewBottomTemplate);
    templateHandler(_rateReviewBtnTemplate);
    templateHandler(_commentTypeTemplate);
    templateHandler(_reviewTemplate);
    templateHandler(_productHeadingTemplate);
    templateHandler(_productPriceTemplate);
})();

/*
* @method:Anonymous
* @param:No parameters
* @desc :DOM manipulation based on the some value by javaSccript
* @return: undefined{undefined}
*/

(() => {
    var _rateobj = objArrayAverageAndTotalfinder(productDetails.products[0].reviews, "rate");
    _.flatMap(document.getElementsByClassName("prod-rate-avg"), function (c) { c.innerHTML = _rateobj.avg });
    _.flatMap(document.getElementsByClassName("total-rate-product"), function (c) { c.innerHTML = _rateobj.total });
    document.getElementById("total-review-product").innerHTML = productDetails.products[0].reviews.length;
}
)();
_.flatMap(document.querySelectorAll("#product-images-list ul li"), function (c) {
    c.onmouseover = function () {
        _.flatMap(document.querySelectorAll("#product-images-list ul li"), function (c) {
            c.style.border = "";
            c.style.zIndex = "";
        });
        this.style.border = "2px solid #2874f0";
        c.style.zIndex = "4";
        document.getElementById("product-image").setAttribute("src", this.getElementsByTagName('img')[0].getAttribute('src'));
    }
});




// ajax end
}
}


var xttpa;
//if (window.XMLHTTPRequest)
    xttpa = new XMLHttpRequest();
    var params = "'abc':'1'";

    //xmlhttp.setRequestHeader("Content-Type", "text/string");

xttpa.open("POST", "/product_page?page=1", true);
xttpa.send(params);

xttpa.onreadystatechange = function () {
    console.log("every thing is running xttpa");
}

$.ajax('/product_page?page=jquery',{
    'data': "abc:4", //{action:'x',params:['a','b','c']}
    'type': 'POST',
    'processData': false,
    //'contentType': '' //typically 'application/x-www-form-urlencoded', but the service you are calling may expect 'text/json'... check with the service to see what they expect as content-type in the HTTP header.
});



