/*
* @metod:Anonymous function
* @param:No parameters
* @desc:return global function objects
* @return:object{object}
*/
var globalFunctionsObj=(()=>{

   let _templateHandler,
        _objArrayAverageAndTotalfinder,
        _ajaxCall,
        _particularAttributeValueRemover,
        _attributeValueAdder;
/*
* @method:templateHandler
* @param:{object}templateInfo
* @desc :insert dynamic html into DOM
* @return: undefined{undefined}
*/
 _templateHandler =function(templateInfo) {
    let _html;
    _html = templateInfo.precomile_temp(templateInfo.context);
    templateInfo.dest_node.insertAdjacentHTML(templateInfo.node_position, _html);
}

/*
* @method:objArrayAverageAndTotalfinder
* @param:{Array}objArray, {string}key
* @desc:find the sum and average of a key in the array of Object
* @return:{total:_sum,avg:_avg} {object}
*/
_objArrayAverageAndTotalfinder= function(objArray, key) {
    let _values,
        _sum = 0,
        _avg = 0;

    _values = _.flatMap(objArray, function (c) { return c.details[key] });

    for (let _i = 0; _i < _values.length; _i++) {
        _sum += Number(_values[_i]);
    }
    _avg = _sum / objArray.length;
    return { total: _sum, avg: _avg };
}

/*
* @method: ajaxCall
* @param:{Object}ajaxParameters
* @desc: to make a ajax call to server
* @return: undefined{undefined}
*/
_ajaxCall=function(ajaxParameters) { // always start function names with verb
    let _xttp;

    if (window.XMLHttpRequest)
        _xttp = new XMLHttpRequest();
    else
        _xttp = new ActiveXObject("Microsoft.XMLHTTP");

    _xttp.onreadystatechange = (
        function () {
            return function () {
                if (this.readyState == 4 && this.status == 200) {
                    ajaxParameters.action.call(this);
                }
            }
        })();

    _xttp.open(ajaxParameters.method, ajaxParameters.url, ajaxParameters.async);
    _xttp.setRequestHeader("Content-type", ajaxParameters.content_type);
    _xttp.send(ajaxParameters.data);
}

/*
* @method: particularAttributeValueRemover
* @param:{string}mainAttributeValue , {string}valueToRemove
* @desc: remove the string(valueToRemove) from string(mainAttributeValue)
* @return: _newAttributeValue{string}
*/
 _particularAttributeValueRemover = function (mainAttributeValue, valueToRemove) {
     let _newAttributeValue,
          _searchExpression= new RegExp(` ${valueToRemove.trim()} `, "g");;
        _newAttributeValue= mainAttributeValue.replace(_searchExpression, " ");
        return _newAttributeValue;
    }

 /*
* @method: attributeValueAdder
* @param:{string}mainAttributeValue , {string}valueToAdd
* @desc: add the string(valueToAdd) with space at the end of string(mainAttributeValue)
* @return: _newAttributeValue{string}
*/
  _attributeValueAdder = function (mainAttributeValue, valueToAdd) {
        let _newAttributeValue;
        _newAttributeValue= mainAttributeValue.replace(mainAttributeValue.trim(), `${mainAttributeValue} ${valueToAdd}`);
        return _newAttributeValue;
    }

    return {
        templateHandler                : _templateHandler,
        objArrayAverageAndTotalfinder  : _objArrayAverageAndTotalfinder,
        ajaxCall                       : _ajaxCall,
        particularAttributeValueRemover: _particularAttributeValueRemover,
        attributeValueAdder            : _attributeValueAdder
    }
})();