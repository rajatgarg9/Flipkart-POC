"use strict"
var specData,
    specTemplate,
    reviewTemplate;
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

 specTemplate = {
    raw_temp: document.getElementById("spec-list-template").innerHTML,
    context: productDetails.products[0],
    dest_node: document.getElementById("spec-list"),
    node_position: 'beforeend'
}
templateHandler(specTemplate);
reviewTemplate = {
    raw_temp: document.getElementById("review-list-template").innerHTML,
    context: productDetails.products[0],
    dest_node: document.getElementById("review-sec"),
    node_position: 'beforeend'
}
templateHandler(reviewTemplate);

/*
* @method:templateHandler
* @param:{object}templateInfo
* @desc :insert dynamic html into DOM
* @return: undefined{undefined}
*/
function templateHandler(templateInfo) {
    var _template,
        _html;
    _template = Handlebars.compile(specTemplate.raw_temp);
    _html = _template(specTemplate.context);
    specTemplate.dest_node.insertAdjacentHTML(specTemplate.node_position, _html);
}