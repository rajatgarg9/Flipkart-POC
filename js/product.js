"use strict"
var specData;
var specPath = productDetails.products[0].specifications;

class Specification {
    constructor(specType, featureName, featureValue) {
        this.specType = specType;
        this.featureName = featureName;
        this.featureValue = featureValue;
    }
}

var specData = (specPath => {
    let arr = [],
        counter = 0;
    for (let i = 0; i < specPath.length; i++) {
        for (var j = 0; j < specPath[i].spec_type_details.length; j++) {
            arr[counter] = new Specification(specPath[i].spec_type, specPath[i].spec_type_details[j].feature_name, specPath[i].spec_type_details[j].feature_value);
            counter++;
        }
    }
    return arr;
})(specPath);


/*
* @method:Anonymous
* @param:No parameters
* @desc :Load product page main body data from JSON
* @return: undefined{undefined}
*/
(() => {
    var _specTemplate = {
        raw_temp: document.getElementById("spec-list-template").innerHTML,
        context: productDetails.products[0],
        dest_node: document.getElementById("spec-list"),
        node_position: 'beforeend'
    },
        _reviewTemplate = {
            raw_temp: document.getElementById("review-list-template").innerHTML,
            context: productDetails.products[0],
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
    templateHandler(_specTemplate);
    templateHandler(_reviewTemplate);
    templateHandler(_productHeadingTemplate);
    templateHandler(_productPriceTemplate);
})();










