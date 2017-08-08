(() => {

    /*
     * @method:Anonymous
     * @param: No parameters
     * @desc:returb object containg function for action on DOM
     * @return:object{object}
    */
    let _domActionsObj = (() => {

        let _rateReviewCalculator,
            _imgListHoverEventBinder,
            _likeDislikeHandler,
            _likehandler,
            _disLikehandler;

        /*
         * @method:Anonymous
         * @param:No parameters
         * @desc :Insert rating and reviews in DOM based on the Database
         * @return:undefined{undefined}
         */
        _rateReviewCalculator = (dataObj) => {
            let _rateobj = globalFunctionsObj.objArrayAverageAndTotalfinder(dataObj.reviews, "rate");

            _.flatMap(document.getElementsByClassName("prod-rate-avg"), function (c) {
                c.innerHTML = _rateobj.avg
            });
            _.flatMap(document.getElementsByClassName("total-rate-product"), function (c) {
                c.innerHTML = _rateobj.total
            });
            document.getElementById("total-review-product").innerHTML = dataObj.reviews.length;
        },
            /*
             * @method:Anonymous
             * @param:No parameters
             * @desc: Bind event on product img list and set imgae of product on hover
             * @returrn: undefined{undefined}
             */

            _imgListHoverEventBinder = function () {
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
            },
            /*
                * @method:Anonymous
                * @param:No Parameters
                * @desc: DOM manipulation and data handler for products likes and dislaike
                * @return:undefined{undefined}
            
            */
            _likeDislikeHandler = function () {
                _.flatMap(document.querySelectorAll(".like-dis-like-incrementor-container"), function (c) {
                    c.getElementsByClassName("like-incrementor")[0].addEventListener("click", _domActionsObj.likehandler, false);
                    c.getElementsByClassName("dis-like-incrementor")[0].addEventListener("click", _domActionsObj.disLikehandler, false);
                })
            };
        /*
             * @method:likehandler
             * @param:No parameters
             * @desc:on click thumb-up increase counter of like on FE and BE(ajax call) and then remove click event from like button and dis like button
             * @return: undefined{undefined} 
            */
        _likehandler = function () {
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
            _className = globalFunctionsObj.particularAttributeValueRemover(_className, "thumbs-up");
            _className = globalFunctionsObj.attributeValueAdder(_className, "txt-blue-color");
            _likeElement.setAttribute("class", _className);
            _likeCount.innerHTML = Number(_likeCount.innerHTML) + 1;


            _className = _disLikeElement.getAttribute("class");
            _className = globalFunctionsObj.particularAttributeValueRemover(_className, "thumbs-down");
            _disLikeElement.setAttribute("class", _className);
            this.removeEventListener("click", _domActionsObj.likehandler);
            this.parentNode.getElementsByClassName("dis-like-incrementor")[0].removeEventListener("click", _domActionsObj.disLikehandler);


            globalFunctionsObj.ajaxCall(_increasecounter);  // increase like counter at Database by ajax call
        },

            /*
             * @method:likehandler
             * @param:No parameters
             * @desc:on click thumb-down increase counter of dis-like on FE and BE(ajax call) and then remove click event from like button and dis like button
             * @return: undefined{undefined} 
            */
            _disLikehandler = function () {
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
                _className = globalFunctionsObj.particularAttributeValueRemover(_className, "thumbs-down");
                _className = globalFunctionsObj.attributeValueAdder(_className, "txt-red-color");
                _disLikeElement.setAttribute("class", _className);
                _disLikeCount.innerHTML = Number(_disLikeCount.innerHTML) + 1;


                _className = _likeElement.getAttribute("class");
                _className = globalFunctionsObj.particularAttributeValueRemover(_className, "thumbs-up");
                _likeElement.setAttribute("class", _className);
                this.removeEventListener("click", _domActionsObj.disLikehandler);
                this.parentNode.getElementsByClassName("like-incrementor")[0].removeEventListener("click", _domActionsObj.likehandler);

                globalFunctionsObj.ajaxCall(_increasecounter);  // increase dislike counter at Database by ajax call
            };

        return {
            rateReviewCalculator: _rateReviewCalculator,
            imgListHoverEventBinder: _imgListHoverEventBinder,
            likeDislikeHandler: _likeDislikeHandler,
            likehandler:_likehandler,
            disLikehandler:_disLikehandler
        }
    })();


    let _productDetailsAPIPromise = new Promise(function (resolve, reject) {
        let _productDetailsAPI = {
            method: "POST",
            url: "/product_page?type=requiredData&file=product_details",
            async: "true",
            content_type: "application/x-www-form-urlencoded",
            action: function () {
                resolve(JSON.parse(this.responseText));
            },
            data: "id=1"
        }

        globalFunctionsObj.ajaxCall(_productDetailsAPI);

    }),
        _productSpecificationsAPIPromise = new Promise(function (resolve, reject) {
            let _productSpecificationsAPI = {
                method: "POST",
                url: "/product_page?type=requiredData&file=specifications",
                async: "true",
                content_type: "application/x-www-form-urlencoded",
                action: function () {
                    resolve(JSON.parse(this.responseText));
                },
                data: "product_id=1"
            }

            globalFunctionsObj.ajaxCall(_productSpecificationsAPI);

        }),
        _productMainCategoriesAPIPromise = new Promise(function (resolve, reject) {

            let _productMainCategoriesAPI = {
                method: "POST",
                url: "/product_page?type=requiredData&file=main_categories",
                async: "true",
                content_type: "application/x-www-form-urlencoded",
                action: function () {
                    resolve(JSON.parse(this.responseText));
                }
            };

            globalFunctionsObj.ajaxCall(_productMainCategoriesAPI);
        }),
        _globalkeysAPIPromise = new Promise(function (resolve, reject) {

            let _globalkeysAPI = {
                method: "POST",
                url: "/product_page?type=requiredData&file=global_keys",
                async: "true",
                content_type: "application/x-www-form-urlencoded",
                action: function () {
                    resolve(JSON.parse(this.responseText));
                }
            };

            globalFunctionsObj.ajaxCall(_globalkeysAPI);
        }),
        _productReviewsAPIPromise = new Promise(function (resolve, reject) {

            let _productReviewsAPI = {
                method: "POST",
                url: "/product_page?type=requiredData&file=reviews",
                async: "true",
                content_type: "application/x-www-form-urlencoded",
                action: function () {
                    resolve(JSON.parse(this.responseText));
                },
                data: "product_id=1"
            };

            globalFunctionsObj.ajaxCall(_productReviewsAPI);
        }),
        _productCategoriesAPIpromise = new Promise(function (resolve, reject) {
            let _productCategoriesAPI = {
                method: "POST",
                url: "/product_page?type=requiredData&file=product_categories",
                async: "true",
                content_type: "application/x-www-form-urlencoded",
                action: function () {
                    resolve(JSON.parse(this.responseText));
                }
            };
            globalFunctionsObj.ajaxCall(_productCategoriesAPI);

        }),
        _headerAPIPromise = new Promise(function (resolve, reject) {

            let _headerAPI = {
                method: "POST",
                url: "/product_page?type=requiredData&file=header",
                async: "true",
                content_type: "application/x-www-form-urlencoded",
                action: function () {
                    resolve(JSON.parse(this.responseText));
                }
            };

            globalFunctionsObj.ajaxCall(_headerAPI);
        }),
        _footerAPIPromise = new Promise(function (resolve, reject) {

            let _footerAPI = {
                method: "POST",
                url: "/product_page?type=requiredData&file=footer",
                async: "true",
                content_type: "application/x-www-form-urlencoded",
                action: function () {
                    resolve(JSON.parse(this.responseText));
                }
            }

            globalFunctionsObj.ajaxCall(_footerAPI);
        }),
        _userInfoAPIPromise = new Promise(function (resolve, reject) {

            let _userInfoAPI = {
                method: "POST",
                url: "/product_page?type=requiredData&file=user_info",
                async: "true",
                content_type: "application/x-www-form-urlencoded",
                action: function () {
                    resolve(JSON.parse(this.responseText));
                }
            };

            globalFunctionsObj.ajaxCall(_userInfoAPI);
        });


    _productDetailsAPIPromise.then(function (dataFromResolve) {

        // product page template 
        let _productImageListTemplate = {
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
        let _specTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.spec_list,
            context: fromResolveData,
            dest_node: document.getElementById("spec-list"),
            node_position: 'beforeend'
        }

        //function call
        globalFunctionsObj.templateHandler(_specTemplate);

    });

    _globalkeysAPIPromise.then(function (dataFromResolve) {

        // product page template 
        let _addCartBuyBtnTemplate = {
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
        let _mainHeadLinkTemplate = {
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
        let _footerShortcutLinkTemplate = {
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


    Promise.all([_productMainCategoriesAPIPromise, _productCategoriesAPIpromise]).then(arrrayDataFromResolve => {

        // header footer templates
        let _mainCategoryTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.head_main_cat_list,
            context: Object.assign({}, arrrayDataFromResolve[0], arrrayDataFromResolve[1]),
            dest_node: document.getElementById("header-main-cat-list"),
            node_position: 'beforeend'
        };
        //function call
        globalFunctionsObj.templateHandler(_mainCategoryTemplate);

    });

    Promise.all([_productReviewsAPIPromise, _globalkeysAPIPromise]).then(arrrayDataFromResolve => {

        // product template page
        let _reviewTemplate = {
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

    Promise.all([_globalkeysAPIPromise, _userInfoAPIPromise]).then(arrrayDataFromResolve => {

        // footer header template page
        let _addCartBtnTemplate = {
            precomile_temp: FlipkartProductpageMyApp.templates.cart_btn_data,
            context: Object.assign({}, arrrayDataFromResolve[0].global_keys, arrrayDataFromResolve[1]),
            dest_node: document.getElementById("cart-btn-data"),
            node_position: 'beforeend'
        };

        //function call
        globalFunctionsObj.templateHandler(_addCartBtnTemplate);
    });



})();

