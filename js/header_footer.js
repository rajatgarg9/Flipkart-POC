"use strict";

/*
* @method:Anonymous
* @param:No parameters
* @desc :Load header and footer data from JSON
* @return: undefined{undefined}
*/
    (() => {
        var _mainCategoryTemplate = {
            raw_temp: document.getElementById("header-main-cat-list-template").innerHTML,
            context:headerDropdownData,
            dest_node: document.getElementById("header-main-cat-list"),
            node_position: 'beforeend'
        },
            _mainHeadLinkTemplate = {
                raw_temp: document.getElementById("main-head-list-template").innerHTML,
                context: headerData,
                dest_node: document.getElementById("main-head-list"),
                node_position: 'beforeend'
            },
            _footerShortcutLinkTemplate = {
                raw_temp: document.getElementById("footer-shortcut-link-template").innerHTML,
                context: footerData.footer_info[0],
                dest_node: document.getElementById("footer-shortcut-link"),
                node_position: 'beforeend'
            },
            _footeraddressTemplate = {
                raw_temp: document.getElementById("footer-address-template").innerHTML,
                context: footerData.footer_info[1],
                dest_node: document.getElementById("footer-address"),
                node_position: 'beforeend'
            };

            //function call
        templateHandler(_footeraddressTemplate);
        templateHandler(_footerShortcutLinkTemplate);
        templateHandler(_mainHeadLinkTemplate);
        templateHandler(_mainCategoryTemplate);
    }
    )();

