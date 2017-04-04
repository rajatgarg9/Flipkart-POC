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