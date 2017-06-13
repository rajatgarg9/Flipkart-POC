//"use strict";


setTimeout(function () { // providing delay to productPageRender to prevent it execution before ajax 
    productPageRender(jsonDataObj);
}, 5000);



/*
 * @method:productPageRender
 * @param:{Object}dataObj
 * @desc: Handle all the data rendering and design of product page
 * @return :undefined{undefined}
 */
var productPageRender = (dataObj) => {
    /*
     * @method:Anonymous
     * @param:No parameters
     * @desc :Load product page main body data from JSON by Handlebars
     * @return: undefined{undefined}
     */
    (() => {
        var _productImageListTemplate = {
            raw_temp: document.getElementById("product-images-list-template").innerHTML,
            context: dataObj.product_details_data,
            dest_node: document.getElementById("product-images-list"),
            node_position: 'beforeend'
        },
            _productImageContainertTemplate = {
                raw_temp: document.getElementById("product-img-container-template").innerHTML,
                context: dataObj.product_details_data,
                dest_node: document.getElementById("product-img-container"),
                node_position: 'beforeend'
            },
            _addCartBuyBtnTemplate = {
                raw_temp: document.getElementById("add-cart-buy-btn-template").innerHTML,
                context: dataObj.global_keys_data.global_keys,
                dest_node: document.getElementById("add-cart-buy-btn"),
                node_position: 'beforeend'
            },
            _totalRateReviewTemplate = {
                raw_temp: document.getElementById("total-rating-reviews-template").innerHTML,
                context: dataObj.global_keys_data.global_keys,
                dest_node: document.getElementById("total-rating-reviews"),
                node_position: 'beforeend'
            },
            _specHeadingTemplate = {
                raw_temp: document.getElementById("spec-list-heading-template").innerHTML,
                context: dataObj.global_keys_data.global_keys,
                dest_node: document.getElementById("spec-list"),
                node_position: 'afterbegin'
            },
            _specTemplate = {
                raw_temp: document.getElementById("spec-list-template").innerHTML,
                context: dataObj.product_specifications_data,
                dest_node: document.getElementById("spec-list"),
                node_position: 'beforeend'
            },
            _totalReviewBottomTemplate = {
                raw_temp: document.getElementById("total-review-bottom-template").innerHTML,
                context: dataObj.global_keys_data.global_keys,
                dest_node: document.getElementById("total-review-bottom"),
                node_position: 'beforeend'
            },
            _rateReviewBtnTemplate = {
                raw_temp: document.getElementById("rate-review-btn-template").innerHTML,
                context: dataObj.global_keys_data.global_keys.flipkart_rate_review,
                dest_node: document.getElementById("rate-review-btn"),
                node_position: 'beforeend'
            },
            _commentTypeTemplate = {
                raw_temp: document.getElementById("comment-type-list-template").innerHTML,
                context: dataObj.global_keys_data.global_keys.flipkart_type_of_comment,
                dest_node: document.getElementById("comment-type-list"),
                node_position: 'beforeend'
            },
            _reviewTemplate = {
                raw_temp: document.getElementById("review-list-template").innerHTML,
                context: Object.assign({}, dataObj.product_reviews_data, dataObj.global_keys_data.global_keys),
                dest_node: document.getElementById("comment-sec"),
                node_position: 'beforeend'
            },
            _productHeadingTemplate = {
                raw_temp: document.getElementById("product-heading-template").innerHTML,
                context: dataObj.product_details_data,
                dest_node: document.getElementById("product-heading"),
                node_position: 'beforeend'
            },
            _productPriceTemplate = {
                raw_temp: document.getElementById("product-price-template").innerHTML,
                context: dataObj.product_details_data,
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
     * @desc :Insert rating and reviews in DOM based on the Database
     * @return: undefined{undefined}
     */
    (() => {
        var _rateobj = objArrayAverageAndTotalfinder(dataObj.product_reviews_data.reviews, "rate");

        _.flatMap(document.getElementsByClassName("prod-rate-avg"), function (c) {
            c.innerHTML = _rateobj.avg
        });
        _.flatMap(document.getElementsByClassName("total-rate-product"), function (c) {
            c.innerHTML = _rateobj.total
        });
        document.getElementById("total-review-product").innerHTML = dataObj.product_reviews_data.reviews.length;
    })();

    /*
     * @method:Anonymous
     * @param:No parameters
     * @desc: bind mouseover event on product image list and handle animation part of images hover
     * @returrn: undefined{undefined}
     */

    (() => {
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
    })();

    /*
        * @method:Anonymous
        * @param:No Parameters
        * @desc: DOM manipulation and data handler for products likes and dislaike
        * @return:undefined{undefined}
    
    */
    (() => {
        _.flatMap(document.querySelectorAll(".like-dis-like-incrementor-container"), function (c) {
            c.getElementsByClassName("like-incrementor")[0].addEventListener("click", likehandler, false);
            c.getElementsByClassName("dis-like-incrementor")[0].addEventListener("click", disLikehandler, false);
        })


        /*
         * @method:likehandler
         * @param:No parameters
         * @desc:on click thumb-up increase counter of like on FE and BE(ajax call) and then remove click event from like button and dis like button
         * @return: undefined{undefined} 
        */
        function likehandler() {
            let _className,
                _likeElement = this.getElementsByClassName("thumbs-up-identifi")[0],
                _disLikeElement = this.parentNode.getElementsByClassName("thumbs-down-identifi")[0],
                _likeCount = this.getElementsByClassName("like-count")[0],
                _increasecounter = {
                method: "POST",
                url: "/product_page?type=forDB&file=reviews&action=increaseLikes",
                async: "true",
                content_type: "application/x-www-form-urlencoded",
                action: function () { },
                data: `id=${this.getAttribute("data-review-id")}`
            };



            _className = _likeElement.getAttribute("class")
            _className = particularAttributeValueRemover(_className, "thumbs-up");
            _className = attributeValueAdder(_className, "txt-blue-color");
            _likeElement.setAttribute("class", _className);
            _likeCount.innerHTML = Number(_likeCount.innerHTML) + 1;


            _className = _disLikeElement.getAttribute("class");
            _className = particularAttributeValueRemover(_className, "thumbs-down");
            _disLikeElement.setAttribute("class", _className);
            this.removeEventListener("click", likehandler);
            this.parentNode.getElementsByClassName("dis-like-incrementor")[0].removeEventListener("click", disLikehandler);


            ajaxCall(_increasecounter);  // increase like counter at Database by ajax call
        }

        /*
         * @method:likehandler
         * @param:No parameters
         * @desc:on click thumb-down increase counter of dis-like on FE and BE(ajax call) and then remove click event from like button and dis like button
         * @return: undefined{undefined} 
        */
        function disLikehandler() {
            let _className,
                _disLikeElement = this.getElementsByClassName("thumbs-down-identifi")[0],
                _likeElement = this.parentNode.getElementsByClassName("thumbs-up-identifi")[0],
                _disLikeCount = this.getElementsByClassName("dis-like-count")[0],
                _increasecounter = {
                method: "POST",
                url: "/product_page?type=forDB&file=reviews&action=increase_disLikes",
                async: "true",
                content_type: "application/x-www-form-urlencoded",
                action: function () { },
                data: `id=${this.getAttribute("data-review-id")}`
            };


            _className = _disLikeElement.getAttribute("class")
            _className = particularAttributeValueRemover(_className, "thumbs-down");
            _className = attributeValueAdder(_className, "txt-red-color");
            _disLikeElement.setAttribute("class", _className);
            _disLikeCount.innerHTML = Number(_disLikeCount.innerHTML) + 1;


            _className = _likeElement.getAttribute("class");
            _className = particularAttributeValueRemover(_className, "thumbs-up");
            _likeElement.setAttribute("class", _className);
            this.removeEventListener("click", disLikehandler);
            this.parentNode.getElementsByClassName("like-incrementor")[0].removeEventListener("click", likehandler);

            ajaxCall(_increasecounter);  // increase dislike counter at Database by ajax call
        }
    })();

}

