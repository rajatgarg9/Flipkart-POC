"use strict"
/*
* @method:Anonymous
* @param:No parameters
* @desc :Load product page main body data from JSON by Handlebars
* @return: undefined{undefined}
*/
(() => {
    var _addCartBuyBtnTemplate = {
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
    templateHandler(_addCartBuyBtnTemplate);
    templateHandler(_totalRateReviewTemplate);
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
    var _rateobj=objArrayAverageAndTotalfinder(productDetails.products[0].reviews, "rate");

   _.flatMap(document.getElementsByClassName("prod-rate-avg"),function(c){c.innerHTML=_rateobj.avg});
   _.flatMap(document.getElementsByClassName("total-rate-product"),function(c){c.innerHTML=_rateobj.total});
   document.getElementById("total-review-product").innerHTML=productDetails.products[0].reviews.length;
}
)();








