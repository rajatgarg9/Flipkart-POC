"use strict";
var jsonDataObj = {},
xttp,
productDetailsAPI={
    method:"POST",
    url:"/product_page?file=product_details",
    async:"false",
    content_type:"application/x-www-form-urlencoded",
    action: function(){
            jsonDataObj.productDetails = JSON.parse(this.responseText);
            pageRender(jsonDataObj);
    }
};




function ajaxCall(ajaxParameters){
    let _xttp;

    if (window.XMLHttpRequest)
        _xttp = new XMLHttpRequest();
    else
        _xttp = new ActiveXObject("Microsoft.XMLHTTP");

    _xttp.onreadystatechange = function (event,ajaxParameters) {
        if (this.readyState == 4 && this.status == 200) {
            ajaxParameters.action();
        }
    }

    _xttp.open(ajaxParameters.method, ajaxParameters.url, ajaxParameters.async);
    _xttp.setRequestHeader("Content-type", ajaxParameters.content_type);
    _xttp.send();
}


ajaxCall(productDetailsAPI);;






function pageRender(jsonDataObj) {
    /*
    * @method:Anonymous
    * @param:No parameters
    * @desc :Load product page main body data from JSON by Handlebars
    * @return: undefined{undefined}
    */
    (() => {
        var _productImageListTemplate = {
            raw_temp: document.getElementById("product-images-list-template").innerHTML,
            context: jsonDataObj.productDetails.products[0],
            dest_node: document.getElementById("product-images-list"),
            node_position: 'beforeend'
        },
            _productImageContainertTemplate = {
                raw_temp: document.getElementById("product-img-container-template").innerHTML,
                context: jsonDataObj.productDetails.products[0],
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
                context: jsonDataObj.productDetails.products[0],
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
                context: Object.assign({}, jsonDataObj.productDetails.products[0], globalKeys.global_keys),
                dest_node: document.getElementById("comment-sec"),
                node_position: 'beforeend'
            },
            _productHeadingTemplate = {
                raw_temp: document.getElementById("product-heading-template").innerHTML,
                context: jsonDataObj.productDetails.products[0],
                dest_node: document.getElementById("product-heading"),
                node_position: 'beforeend'
            },
            _productPriceTemplate = {
                raw_temp: document.getElementById("product-price-template").innerHTML,
                context: jsonDataObj.productDetails.products[0],
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
        var _rateobj = objArrayAverageAndTotalfinder(jsonDataObj.productDetails.products[0].reviews, "rate");
        _.flatMap(document.getElementsByClassName("prod-rate-avg"), function (c) { c.innerHTML = _rateobj.avg });
        _.flatMap(document.getElementsByClassName("total-rate-product"), function (c) { c.innerHTML = _rateobj.total });
        document.getElementById("total-review-product").innerHTML = jsonDataObj.productDetails.products[0].reviews.length;
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

}


