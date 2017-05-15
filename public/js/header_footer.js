"use strict";

/*
* @method:Anonymous
* @param:No parameters
* @desc :Load header and footer data from JSON
* @return: undefined{undefined}
*/
setTimeout(function(){
    console.log(" Header--In Time Out");
    (() => {
        var _searchBoxTemplate = {
                raw_temp: document.getElementById("search-box-template").innerHTML,
                context: jsonDataObj.global_keys_data.global_keys,
                dest_node: document.getElementById("search-box"),
                node_position: 'afterbegin'
            },
            _mainHeadLinkTemplate = {
                raw_temp: document.getElementById("main-head-list-template").innerHTML,
                context: jsonDataObj.header_data,
                dest_node: document.getElementById("main-head-list"),
                node_position: 'beforeend'
            },
            _addCartBtnTemplate = {
                raw_temp: document.getElementById("cart-btn-data-template").innerHTML,
                context: Object.assign({},jsonDataObj.global_keys_data.global_keys,jsonDataObj.user_info_data),
                dest_node: document.getElementById("cart-btn-data"),
                node_position: 'beforeend'
            },
            _mainCategoryTemplate = {
            raw_temp: document.getElementById("header-main-cat-list-template").innerHTML,
            context:Object.assign({},jsonDataObj.product_main_categories_data,jsonDataObj.product_categories_data),
            dest_node: document.getElementById("header-main-cat-list"),
            node_position: 'beforeend'
        },
            _footerShortcutLinkTemplate = {
                raw_temp: document.getElementById("footer-shortcut-link-template").innerHTML,
                context: jsonDataObj.footer_data.footer_info[0],
                dest_node: document.getElementById("footer-shortcut-link"),
                node_position: 'beforeend'
            },
            _footerStaticTextTemplate = {
                raw_temp: document.getElementById("footer-static-text-template").innerHTML,
                context: [{"text":jsonDataObj.global_keys_data.global_keys.flipkart_track_your_order},{"text":jsonDataObj.global_keys_data.global_keys.flipkart_free_easy_returns},{"text":jsonDataObj.global_keys_data.global_keys.flipkart_online_cancellations}],
                dest_node: document.getElementById("footer-static-text"),
                node_position: 'beforeend'
            },
            _footerAddressTemplate = {
                raw_temp: document.getElementById("footer-address-template").innerHTML,
                context: jsonDataObj.footer_data.footer_info[1],
                dest_node: document.getElementById("footer-address"),
                node_position: 'beforeend'
            };

            //function call
            templateHandler( _searchBoxTemplate);
        templateHandler( _footerStaticTextTemplate);
        templateHandler( _addCartBtnTemplate);
        templateHandler(_footerAddressTemplate);
        templateHandler(_footerShortcutLinkTemplate);
        templateHandler(_mainHeadLinkTemplate);
        templateHandler(_mainCategoryTemplate);
    }
    )();
    },1000);
    

