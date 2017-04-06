"use strict";

/*
* @method:Anonymous
* @param:No parameters
* @desc :Load header and footer data from JSON
* @return: undefined{undefined}
*/
    (() => {
        var _mainHeadLinkTemplate = {
                raw_temp: document.getElementById("main-head-list-template").innerHTML,
                context: headerData,
                dest_node: document.getElementById("main-head-list"),
                node_position: 'beforeend'
            },
            _addCartBtnTemplate = {
                raw_temp: document.getElementById("cart-btn-data-template").innerHTML,
                context: Object.assign({},globalKeys.global_keys,userInfo),
                dest_node: document.getElementById("cart-btn-data"),
                node_position: 'beforeend'
            },
            _mainCategoryTemplate = {
            raw_temp: document.getElementById("header-main-cat-list-template").innerHTML,
            context:Object.assign({},productMainCategories,productCategories),
            dest_node: document.getElementById("header-main-cat-list"),
            node_position: 'beforeend'
        },
            _footerShortcutLinkTemplate = {
                raw_temp: document.getElementById("footer-shortcut-link-template").innerHTML,
                context: footerData.footer_info[0],
                dest_node: document.getElementById("footer-shortcut-link"),
                node_position: 'beforeend'
            },
            _footerStaticTextTemplate = {
                raw_temp: document.getElementById("footer-static-text-template").innerHTML,
                context: [{"text":globalKeys.global_keys.flipkart_track_your_order},{"text":globalKeys.global_keys.flipkart_free_easy_returns},{"text":globalKeys.global_keys.flipkart_online_cancellations}],
                dest_node: document.getElementById("footer-static-text"),
                node_position: 'beforeend'
            },
            _footerAddressTemplate = {
                raw_temp: document.getElementById("footer-address-template").innerHTML,
                context: footerData.footer_info[1],
                dest_node: document.getElementById("footer-address"),
                node_position: 'beforeend'
            };

            //function call
        templateHandler( _footerStaticTextTemplate);
        templateHandler( _addCartBtnTemplate);
        templateHandler(_footerAddressTemplate);
        templateHandler(_footerShortcutLinkTemplate);
        templateHandler(_mainHeadLinkTemplate);
        templateHandler(_mainCategoryTemplate);
    }
    )();

