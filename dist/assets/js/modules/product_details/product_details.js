"use strict";

/*
* @metod:Anonymous function
* @param:No parameters
* @desc:return global function objects
* @return:object{object}
*/
var globalFunctionsObj = function () {

    var _templateHandler = void 0,
        _objArrayAverageAndTotalfinder = void 0,
        _ajaxCall = void 0,
        _particularAttributeValueRemover = void 0,
        _attributeValueAdder = void 0;
    /*
    * @method:templateHandler
    * @param:{object}templateInfo
    * @desc :insert dynamic html into DOM
    * @return: undefined{undefined}
    */
    _templateHandler = function _templateHandler(templateInfo) {
        var _html = void 0;
        _html = templateInfo.precomile_temp(templateInfo.context);
        templateInfo.dest_node.insertAdjacentHTML(templateInfo.node_position, _html);
    };

    /*
    * @method:objArrayAverageAndTotalfinder
    * @param:{Array}objArray, {string}key
    * @desc:find the sum and average of a key in the array of Object
    * @return:{total:_sum,avg:_avg} {object}
    */
    _objArrayAverageAndTotalfinder = function _objArrayAverageAndTotalfinder(objArray, key) {
        var _values = void 0,
            _sum = 0,
            _avg = 0;

        _values = _.flatMap(objArray, function (c) {
            return c.details[key];
        });

        for (var _i = 0; _i < _values.length; _i++) {
            _sum += Number(_values[_i]);
        }
        _avg = _sum / objArray.length;
        return { total: _sum, avg: _avg };
    };

    /*
    * @method: ajaxCall
    * @param:{Object}ajaxParameters
    * @desc: to make a ajax call to server
    * @return: undefined{undefined}
    */
    _ajaxCall = function _ajaxCall(ajaxParameters) {
        // always start function names with verb
        var _xttp = void 0;

        if (window.XMLHttpRequest) _xttp = new XMLHttpRequest();else _xttp = new ActiveXObject("Microsoft.XMLHTTP");

        _xttp.onreadystatechange = function () {
            return function () {
                if (this.readyState == 4 && this.status == 200) {
                    ajaxParameters.action.call(this);
                }
            };
        }();

        _xttp.open(ajaxParameters.method, ajaxParameters.url, ajaxParameters.async);
        _xttp.setRequestHeader("Content-type", ajaxParameters.content_type);
        _xttp.send(ajaxParameters.data);
    };

    /*
    * @method: particularAttributeValueRemover
    * @param:{string}mainAttributeValue , {string}valueToRemove
    * @desc: remove the string(valueToRemove) from string(mainAttributeValue)
    * @return: _newAttributeValue{string}
    */
    _particularAttributeValueRemover = function _particularAttributeValueRemover(mainAttributeValue, valueToRemove) {
        var _newAttributeValue = void 0,
            _searchExpression = new RegExp(" " + valueToRemove.trim() + " ", "g");;
        _newAttributeValue = mainAttributeValue.replace(_searchExpression, " ");
        return _newAttributeValue;
    };

    /*
    * @method: attributeValueAdder
    * @param:{string}mainAttributeValue , {string}valueToAdd
    * @desc: add the string(valueToAdd) with space at the end of string(mainAttributeValue)
    * @return: _newAttributeValue{string}
    */
    _attributeValueAdder = function _attributeValueAdder(mainAttributeValue, valueToAdd) {
        var _newAttributeValue = void 0;
        _newAttributeValue = mainAttributeValue.replace(mainAttributeValue.trim(), mainAttributeValue + " " + valueToAdd);
        return _newAttributeValue;
    };

    return {
        templateHandler: _templateHandler,
        objArrayAverageAndTotalfinder: _objArrayAverageAndTotalfinder,
        ajaxCall: _ajaxCall,
        particularAttributeValueRemover: _particularAttributeValueRemover,
        attributeValueAdder: _attributeValueAdder
    };
}();
Handlebars.registerHelper("ifcond", function (catId, subId, options) {
    if (catId === subId) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

(function () {

    /*
     * @method:Anonymous
     * @param: No parameters
     * @desc:returb object containg function for action on DOM
     * @return:object{object}
    */
    var _domActionsObj = function () {

        var _rateReviewCalculator = void 0,
            _imgListHoverEventBinder = void 0,
            _likeDislikeHandler = void 0,
            _likehandler = void 0,
            _disLikehandler = void 0;

        /*
         * @method:Anonymous
         * @param:No parameters
         * @desc :Insert rating and reviews in DOM based on the Database
         * @return:undefined{undefined}
         */
        _rateReviewCalculator = function _rateReviewCalculator(dataObj) {
            var _rateobj = globalFunctionsObj.objArrayAverageAndTotalfinder(dataObj.reviews, "rate");

            _.flatMap(document.getElementsByClassName("prod-rate-avg"), function (c) {
                c.innerHTML = _rateobj.avg;
            });
            _.flatMap(document.getElementsByClassName("total-rate-product"), function (c) {
                c.innerHTML = _rateobj.total;
            });
            document.getElementById("total-review-product").innerHTML = dataObj.reviews.length;
        },
        /*
         * @method:Anonymous
         * @param:No parameters
         * @desc: Bind event on product img list and set imgae of product on hover
         * @returrn: undefined{undefined}
         */

        _imgListHoverEventBinder = function _imgListHoverEventBinder() {
            _.flatMap(document.querySelectorAll("#product-images-list ul li"), function (c) {
                c.onmouseover = function () {
                    _.flatMap(document.querySelectorAll("#product-images-list ul li"), function (c) {
                        c.style.border = "";
                        c.style.zIndex = "";
                    });
                    this.style.border = "2px solid #2874f0";
                    c.style.zIndex = "4";
                    document.getElementById("product-image").setAttribute("src", this.getElementsByTagName('img')[0].getAttribute('src'));
                };
            });
        },
        /*
            * @method:Anonymous
            * @param:No Parameters
            * @desc: DOM manipulation and data handler for products likes and dislaike
            * @return:undefined{undefined}
        
        */
        _likeDislikeHandler = function _likeDislikeHandler() {
            _.flatMap(document.querySelectorAll(".like-dis-like-incrementor-container"), function (c) {
                c.getElementsByClassName("like-incrementor")[0].addEventListener("click", _domActionsObj.likehandler, false);
                c.getElementsByClassName("dis-like-incrementor")[0].addEventListener("click", _domActionsObj.disLikehandler, false);
            });
        };
        /*
             * @method:likehandler
             * @param:No parameters
             * @desc:on click thumb-up increase counter of like on FE and BE(ajax call) and then remove click event from like button and dis like button
             * @return: undefined{undefined} 
            */
        _likehandler = function _likehandler() {
            var _className = void 0,
                _likeElement = this.getElementsByClassName("thumbs-up-identifi")[0],
                _disLikeElement = this.parentNode.getElementsByClassName("thumbs-down-identifi")[0],
                _likeCount = this.getElementsByClassName("like-count")[0],
                _increasecounter = {
                method: "POST",
                url: "/product_page?type=forDB&file=reviews&action=increaseLikes",
                async: "true",
                content_type: "application/x-www-form-urlencoded",
                action: function action() {},
                data: "id=" + this.getAttribute("data-review-id")
            };

            _className = _likeElement.getAttribute("class");
            _className = globalFunctionsObj.particularAttributeValueRemover(_className, "thumbs-up");
            _className = globalFunctionsObj.attributeValueAdder(_className, "txt-blue-color");
            _likeElement.setAttribute("class", _className);
            _likeCount.innerHTML = Number(_likeCount.innerHTML) + 1;

            _className = _disLikeElement.getAttribute("class");
            _className = globalFunctionsObj.particularAttributeValueRemover(_className, "thumbs-down");
            _disLikeElement.setAttribute("class", _className);
            this.removeEventListener("click", _domActionsObj.likehandler);
            this.parentNode.getElementsByClassName("dis-like-incrementor")[0].removeEventListener("click", _domActionsObj.disLikehandler);

            globalFunctionsObj.ajaxCall(_increasecounter); // increase like counter at Database by ajax call
        },

        /*
         * @method:likehandler
         * @param:No parameters
         * @desc:on click thumb-down increase counter of dis-like on FE and BE(ajax call) and then remove click event from like button and dis like button
         * @return: undefined{undefined} 
        */
        _disLikehandler = function _disLikehandler() {
            var _className = void 0,
                _disLikeElement = this.getElementsByClassName("thumbs-down-identifi")[0],
                _likeElement = this.parentNode.getElementsByClassName("thumbs-up-identifi")[0],
                _disLikeCount = this.getElementsByClassName("dis-like-count")[0],
                _increasecounter = {
                method: "POST",
                url: "/product_page?type=forDB&file=reviews&action=increase_disLikes",
                async: "true",
                content_type: "application/x-www-form-urlencoded",
                action: function action() {},
                data: "id=" + this.getAttribute("data-review-id")
            };

            _className = _disLikeElement.getAttribute("class");
            _className = globalFunctionsObj.particularAttributeValueRemover(_className, "thumbs-down");
            _className = globalFunctionsObj.attributeValueAdder(_className, "txt-red-color");
            _disLikeElement.setAttribute("class", _className);
            _disLikeCount.innerHTML = Number(_disLikeCount.innerHTML) + 1;

            _className = _likeElement.getAttribute("class");
            _className = globalFunctionsObj.particularAttributeValueRemover(_className, "thumbs-up");
            _likeElement.setAttribute("class", _className);
            this.removeEventListener("click", _domActionsObj.disLikehandler);
            this.parentNode.getElementsByClassName("like-incrementor")[0].removeEventListener("click", _domActionsObj.likehandler);

            globalFunctionsObj.ajaxCall(_increasecounter); // increase dislike counter at Database by ajax call
        };

        return {
            rateReviewCalculator: _rateReviewCalculator,
            imgListHoverEventBinder: _imgListHoverEventBinder,
            likeDislikeHandler: _likeDislikeHandler,
            likehandler: _likehandler,
            disLikehandler: _disLikehandler
        };
    }();

    var _productDetailsAPIPromise = new Promise(function (resolve, reject) {
        var _productDetailsAPI = {
            method: "POST",
            url: "/product_page?type=requiredData&file=product_details",
            async: "true",
            content_type: "application/x-www-form-urlencoded",
            action: function action() {
                resolve(JSON.parse(this.responseText));
            },
            data: "id=1"
        };

        globalFunctionsObj.ajaxCall(_productDetailsAPI);
    }),
        _productSpecificationsAPIPromise = new Promise(function (resolve, reject) {
        var _productSpecificationsAPI = {
            method: "POST",
            url: "/product_page?type=requiredData&file=specifications",
            async: "true",
            content_type: "application/x-www-form-urlencoded",
            action: function action() {
                resolve(JSON.parse(this.responseText));
            },
            data: "product_id=1"
        };

        globalFunctionsObj.ajaxCall(_productSpecificationsAPI);
    }),
        _productMainCategoriesAPIPromise = new Promise(function (resolve, reject) {

        var _productMainCategoriesAPI = {
            method: "POST",
            url: "/product_page?type=requiredData&file=main_categories",
            async: "true",
            content_type: "application/x-www-form-urlencoded",
            action: function action() {
                resolve(JSON.parse(this.responseText));
            }
        };

        globalFunctionsObj.ajaxCall(_productMainCategoriesAPI);
    }),
        _globalkeysAPIPromise = new Promise(function (resolve, reject) {

        var _globalkeysAPI = {
            method: "POST",
            url: "/product_page?type=requiredData&file=global_keys",
            async: "true",
            content_type: "application/x-www-form-urlencoded",
            action: function action() {
                resolve(JSON.parse(this.responseText));
            }
        };

        globalFunctionsObj.ajaxCall(_globalkeysAPI);
    }),
        _productReviewsAPIPromise = new Promise(function (resolve, reject) {

        var _productReviewsAPI = {
            method: "POST",
            url: "/product_page?type=requiredData&file=reviews",
            async: "true",
            content_type: "application/x-www-form-urlencoded",
            action: function action() {
                resolve(JSON.parse(this.responseText));
            },
            data: "product_id=1"
        };

        globalFunctionsObj.ajaxCall(_productReviewsAPI);
    }),
        _productCategoriesAPIpromise = new Promise(function (resolve, reject) {
        var _productCategoriesAPI = {
            method: "POST",
            url: "/product_page?type=requiredData&file=product_categories",
            async: "true",
            content_type: "application/x-www-form-urlencoded",
            action: function action() {
                resolve(JSON.parse(this.responseText));
            }
        };
        globalFunctionsObj.ajaxCall(_productCategoriesAPI);
    }),
        _headerAPIPromise = new Promise(function (resolve, reject) {

        var _headerAPI = {
            method: "POST",
            url: "/product_page?type=requiredData&file=header",
            async: "true",
            content_type: "application/x-www-form-urlencoded",
            action: function action() {
                resolve(JSON.parse(this.responseText));
            }
        };

        globalFunctionsObj.ajaxCall(_headerAPI);
    }),
        _footerAPIPromise = new Promise(function (resolve, reject) {

        var _footerAPI = {
            method: "POST",
            url: "/product_page?type=requiredData&file=footer",
            async: "true",
            content_type: "application/x-www-form-urlencoded",
            action: function action() {
                resolve(JSON.parse(this.responseText));
            }
        };

        globalFunctionsObj.ajaxCall(_footerAPI);
    }),
        _userInfoAPIPromise = new Promise(function (resolve, reject) {

        var _userInfoAPI = {
            method: "POST",
            url: "/product_page?type=requiredData&file=user_info",
            async: "true",
            content_type: "application/x-www-form-urlencoded",
            action: function action() {
                resolve(JSON.parse(this.responseText));
            }
        };

        globalFunctionsObj.ajaxCall(_userInfoAPI);
    });

    _productDetailsAPIPromise.then(function (dataFromResolve) {

        // product page template 
        var _productImageListTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.product_images_list,
            context: dataFromResolve,
            dest_node: document.getElementById("product-images-list"),
            node_position: 'beforeend'
        },
            _productImageContainertTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.product_img_container,
            context: dataFromResolve,
            dest_node: document.getElementById("product-img-container"),
            node_position: 'beforeend'
        },
            _productHeadingTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.product_heading,
            context: dataFromResolve,
            dest_node: document.getElementById("product-heading"),
            node_position: 'beforeend'
        },
            _productPriceTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.product_price,
            context: dataFromResolve,
            dest_node: document.getElementById("product-price"),
            node_position: 'beforeend'
        };

        //function call
        globalFunctionsObj.templateHandler(_productImageListTemplate);
        globalFunctionsObj.templateHandler(_productImageContainertTemplate);
        globalFunctionsObj.templateHandler(_productHeadingTemplate);
        globalFunctionsObj.templateHandler(_productPriceTemplate);

        _domActionsObj.imgListHoverEventBinder();
    });

    _productSpecificationsAPIPromise.then(function (fromResolveData) {
        // product page template 
        var _specTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.spec_list,
            context: fromResolveData,
            dest_node: document.getElementById("spec-list"),
            node_position: 'beforeend'

            //function call
        };globalFunctionsObj.templateHandler(_specTemplate);
    });

    _globalkeysAPIPromise.then(function (dataFromResolve) {

        // product page template 
        var _addCartBuyBtnTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.add_cart_buy_btn,
            context: dataFromResolve.global_keys,
            dest_node: document.getElementById("add-cart-buy-btn"),
            node_position: 'beforeend'
        },
            _totalRateReviewTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.total_rating_review,
            context: dataFromResolve.global_keys,
            dest_node: document.getElementById("total-rating-reviews"),
            node_position: 'beforeend'
        },
            _specHeadingTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.spec_list_heading,
            context: dataFromResolve.global_keys,
            dest_node: document.getElementById("spec-list"),
            node_position: 'afterbegin'
        },
            _totalReviewBottomTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.total_review_bottom,
            context: dataFromResolve.global_keys,
            dest_node: document.getElementById("total-review-bottom"),
            node_position: 'beforeend'
        },
            _rateReviewBtnTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.rate_review_button,
            context: dataFromResolve.global_keys.flipkart_rate_review,
            dest_node: document.getElementById("rate-review-btn"),
            node_position: 'beforeend'
        },
            _commentTypeTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.comment_type_list,
            context: dataFromResolve.global_keys.flipkart_type_of_comment,
            dest_node: document.getElementById("comment-type-list"),
            node_position: 'beforeend'
        },

        // footer header template page
        _searchBoxTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.search_box,
            context: dataFromResolve.global_keys,
            dest_node: document.getElementById("search-box"),
            node_position: 'afterbegin'
        },
            _footerStaticTextTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.footer_static_text,
            context: [{
                "text": dataFromResolve.global_keys.flipkart_track_your_order
            }, {
                "text": dataFromResolve.global_keys.flipkart_free_easy_returns
            }, {
                "text": dataFromResolve.global_keys.flipkart_online_cancellations
            }],
            dest_node: document.getElementById("footer-static-text"),
            node_position: 'beforeend'
        };

        //function call
        globalFunctionsObj.templateHandler(_addCartBuyBtnTemplate);
        globalFunctionsObj.templateHandler(_totalRateReviewTemplate);
        globalFunctionsObj.templateHandler(_specHeadingTemplate);
        globalFunctionsObj.templateHandler(_totalReviewBottomTemplate);
        globalFunctionsObj.templateHandler(_rateReviewBtnTemplate);
        globalFunctionsObj.templateHandler(_commentTypeTemplate);
        globalFunctionsObj.templateHandler(_searchBoxTemplate);
        globalFunctionsObj.templateHandler(_footerStaticTextTemplate);
    });

    _headerAPIPromise.then(function (fromResolveData) {

        // footer header template page
        var _mainHeadLinkTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.main_head_list,
            context: fromResolveData,
            dest_node: document.getElementById("main-head-list"),
            node_position: 'beforeend'
        };

        //function call
        globalFunctionsObj.templateHandler(_mainHeadLinkTemplate);
    });

    _footerAPIPromise.then(function (fromResolveData) {

        //header footer template API
        var _footerShortcutLinkTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.footer_shortcut_link,
            context: fromResolveData.footer_info[0],
            dest_node: document.getElementById("footer-shortcut-link"),
            node_position: 'beforeend'
        },
            _footerAddressTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.footer_address,
            context: fromResolveData.footer_info[1],
            dest_node: document.getElementById("footer-address"),
            node_position: 'beforeend'
        };

        //function call
        globalFunctionsObj.templateHandler(_footerShortcutLinkTemplate);
        globalFunctionsObj.templateHandler(_footerAddressTemplate);
    });

    Promise.all([_productMainCategoriesAPIPromise, _productCategoriesAPIpromise]).then(function (arrrayDataFromResolve) {

        // header footer templates
        var _mainCategoryTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.head_main_cat_list,
            context: Object.assign({}, arrrayDataFromResolve[0], arrrayDataFromResolve[1]),
            dest_node: document.getElementById("header-main-cat-list"),
            node_position: 'beforeend'
        };
        //function call
        globalFunctionsObj.templateHandler(_mainCategoryTemplate);
    });

    Promise.all([_productReviewsAPIPromise, _globalkeysAPIPromise]).then(function (arrrayDataFromResolve) {

        // product template page
        var _reviewTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.review_list,
            context: Object.assign({}, arrrayDataFromResolve[0], arrrayDataFromResolve[1].global_keys),
            dest_node: document.getElementById("comment-sec"),
            node_position: 'beforeend'
        };

        //function call
        globalFunctionsObj.templateHandler(_reviewTemplate);
        _domActionsObj.rateReviewCalculator(arrrayDataFromResolve[0]);
        _domActionsObj.likeDislikeHandler();
    });

    Promise.all([_globalkeysAPIPromise, _userInfoAPIPromise]).then(function (arrrayDataFromResolve) {

        // footer header template page
        var _addCartBtnTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.cart_btn_data,
            context: Object.assign({}, arrrayDataFromResolve[0].global_keys, arrrayDataFromResolve[1]),
            dest_node: document.getElementById("cart-btn-data"),
            node_position: 'beforeend'
        };

        //function call
        globalFunctionsObj.templateHandler(_addCartBtnTemplate);
    });
})();