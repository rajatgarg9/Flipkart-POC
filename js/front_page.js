$('.carousel').carousel({
  interval: 2000
})

"use strict";
/*
* @method:Anonymous
* @param:No parameters
* @desc :Load product page main body data from JSON by Handlebars
* @return: undefined{undefined}
*/
(() => {
    var _carouselImagesTemplate = {
        raw_temp: document.getElementById("carousel-images-template").innerHTML,
        context: rowDataSelector.carousel_data,
        dest_node: document.getElementById("carousel-images"),
        node_position: 'beforeend'
    },
    _productListRowsTemplate = {
        raw_temp: document.getElementById("product-list-rows-template").innerHTML,
        context: Object.assign({},productDetails,globalKeys.global_keys,rowDataSelector),
        dest_node: document.getElementById("product-list-rows"),
        node_position: 'beforeend'
    }
    //function call
    templateHandler(_carouselImagesTemplate);
    templateHandler(_productListRowsTemplate);
    
})();






