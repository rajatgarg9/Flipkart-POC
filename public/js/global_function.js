/*
* @method:templateHandler
* @param:{object}templateInfo
* @desc :insert dynamic html into DOM
* @return: undefined{undefined}
*/
templateHandler =function(templateInfo) {
    var _template,
        _html;
    _template = Handlebars.compile(templateInfo.raw_temp);
    _html = _template(templateInfo.context);
    templateInfo.dest_node.insertAdjacentHTML(templateInfo.node_position, _html);
}

/*
* @method:objArrayAverageAndTotalfinder
* @param:{Array}objArray, {string}key
* @desc:find the sum and average of a key in the array of Object
* @return:{total:_sum,avg:_avg} {object}
*/
// objArrayAverageAndTotalfinder= function(objArray, key) {
//     var _values,
//         _sum = 0,
//         _avg = 0;

//     _values = _.flatMap(objArray, function (c) { return c[key] });

//     for (var _i = 0; _i < _values.length; _i++) {
//         _sum += Number(_values[_i]);
//     }
//     _avg = _sum / objArray.length;
//     return { total: _sum, avg: _avg };
// }

/*
* @method: ajaxCall
* @param:{Object}ajaxParameters
* @desc: to make a ajax call to server
* @return: undefined{undefined}
*/
function ajaxCall(ajaxParameters) {
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
                    console.log("ajax");
                }
            }
        })();

    _xttp.open(ajaxParameters.method, ajaxParameters.url, ajaxParameters.async);
    _xttp.setRequestHeader("Content-type", ajaxParameters.content_type);
    _xttp.send();
}
