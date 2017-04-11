/*
* @method:templateHandler
* @param:{object}templateInfo
* @desc :insert dynamic html into DOM
* @return: undefined{undefined}
*/
function templateHandler(templateInfo) {
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
function objArrayAverageAndTotalfinder(objArray, key) {
    var _values,
        _sum = 0,
        _avg = 0;

    _values = _.flatMap(objArray, function (c) { return c[key] });

    for (var _i = 0; _i < _values.length; _i++) {
        _sum += Number(_values[_i]);
    }
    _avg = _sum / objArray.length;
    return { total: _sum, avg: _avg };
}