this["FlipkartProductpageMyApp"] = this["FlipkartProductpageMyApp"] || {};
this["FlipkartProductpageMyApp"]["templates"] = this["FlipkartProductpageMyApp"]["templates"] || {};
this["FlipkartProductpageMyApp"]["templates"]["footer_address"] = Handlebars.template ({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <div class=\"col-xs-6 address-padding\">\r\n            <address>\r\n                <strong>"
    + alias2(alias1((depth0 != null ? depth0.address_type : depth0), depth0))
    + ":</strong><br/>"
    + alias2(alias1((depth0 != null ? depth0.address : depth0), depth0))
    + "\r\n            </address>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.footer_address : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["footer_shortcut_link"] = Handlebars.template ({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"col-xs-10 col-xs-offset-1 col-sm-3 col-sm-offset-1\">\r\n    <table class=\"table table-condensed\">\r\n        <thead>\r\n            <tr>\r\n                <th>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.category : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tbody>\r\n    </table>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "            <tr>\r\n                <td>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</td>\r\n            </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.footer_shortcut : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["footer_static_text"] = Handlebars.template ({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <td><span class=\"glyphicon glyphicon-map-marker glyphicon-size\" aria-hidden=\"true\"></span>\r\n            <p class=\"glyphicon-txt-size\"><strong>"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data}) : helper)))
    + "</strong>\r\n            </p>\r\n        </td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["cart_btn_data"] = Handlebars.template ({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "        <span class=\"cart-btn-txt\" aria-hidden=\"true\">"
    + alias4(((helper = (helper = helpers.flipkart_cart || (depth0 != null ? depth0.flipkart_cart : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flipkart_cart","hash":{},"data":data}) : helper)))
    + "</span>\r\n        <span class=\"badge cart-btn-badge\" aria-label='"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cart_items : depth0)) != null ? stack1.length : stack1), depth0))
    + " items in "
    + alias4(((helper = (helper = helpers.flipkart_cart || (depth0 != null ? depth0.flipkart_cart : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flipkart_cart","hash":{},"data":data}) : helper)))
    + "' >"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cart_items : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span>\r\n";
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["head_main_cat_list"] = Handlebars.template ({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "        <li class=\"dropdown dropdown-head\">\r\n            <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + " \r\n         <span class=\"caret\"></span>\r\n         </a>\r\n            <ul class=\"dropdown-menu\">\r\n                "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].categories : depths[1]),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n            </ul>\r\n        </li>\r\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return " "
    + ((stack1 = (helpers.ifcond || (depth0 && depth0.ifcond) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].id : depths[1]),(depth0 != null ? depth0.main_cat_id : depth0),{"name":"ifcond","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n                <li>\r\n                    <a href=\"javascript:void(0)\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</a>\r\n                </li>\r\n                ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.main_categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"useData":true,"useDepths":true});
this["FlipkartProductpageMyApp"]["templates"]["main_head_list"] = Handlebars.template ({"1":function(container,depth0,helpers,partials,data) {
    return "    <li role=\"presentation\" class=\"top-nav-link\">\r\n        <a href=\"javascript:void(0)\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</a>\r\n    </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.header_link : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["search_box"] = Handlebars.template ({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<label for=\"search-field-products-for\" class=\"hidden\">search products</label>\r\n<input type=\"text\" id=\"search-field-products-for\" class=\"form-control\" placeholder=\""
    + alias4(((helper = (helper = helpers.flipkart_search_for_product_brand_more || (depth0 != null ? depth0.flipkart_search_for_product_brand_more : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flipkart_search_for_product_brand_more","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + alias4(((helper = (helper = helpers.flipkart_search_for_product_brand_more || (depth0 != null ? depth0.flipkart_search_for_product_brand_more : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flipkart_search_for_product_brand_more","hash":{},"data":data}) : helper)))
    + "\" aria-describedby=\"sizing-addon1\">\r\n";
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["add_cart_buy_btn"] = Handlebars.template ({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n            <div class=\"btn-container-pad\">\r\n                <button class=\"btn btn-primary block-btn add-cart\" type=\"submit\">\r\n                     <a href=\"javascript:void(0)\" tabindex=\"-1\">\r\n                         <span class=\"glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\"></span> "
    + alias4(((helper = (helper = helpers.flipkart_add_to_cart || (depth0 != null ? depth0.flipkart_add_to_cart : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flipkart_add_to_cart","hash":{},"data":data}) : helper)))
    + "\r\n                     </a>\r\n                 </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n            <div class=\"btn-container-pad\">\r\n                <button class=\"btn btn-primary block-btn buy-now\" type=\"submit\">\r\n                     <a href=\"javascript:void(0)\" tabindex=\"-1\">\r\n                         <span class=\"glyphicon glyphicon-flash\" aria-hidden=\"true\"></span> "
    + alias4(((helper = (helper = helpers.flipkart_buy_now || (depth0 != null ? depth0.flipkart_buy_now : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flipkart_buy_now","hash":{},"data":data}) : helper)))
    + "\r\n                     </a>\r\n                 </button>\r\n            </div>\r\n        </div>";
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["comment_type_list"] = Handlebars.template ({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <li role=\"presentation\" "
    + ((stack1 = (helpers.ifcond || (depth0 && depth0.ifcond) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.key),0,{"name":"ifcond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"javascript:void(0)\" aria-label=\""
    + alias2(alias1(depth0, depth0))
    + " comments\">"
    + alias2(alias1(depth0, depth0))
    + "</a>\r\n        </li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " class=\"active\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["product_heading"] = Handlebars.template ({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h4 class=\"prod-name-heading\">"
    + container.escapeExpression(((helper = (helper = helpers.product_name || (depth0 != null ? depth0.product_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"product_name","hash":{},"data":data}) : helper)))
    + "</h4>";
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["product_images_list"] = Handlebars.template ({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <li class=\"list-group-item\">\r\n                <img src=\""
    + alias2(alias1((depths[1] != null ? depths[1].images_path : depths[1]), depth0))
    + "/"
    + alias2(alias1(depth0, depth0))
    + "\" class=\"img-responsive\" alt=\"Responsive image\">\r\n            </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"list-group\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.images_name : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>";
},"useData":true,"useDepths":true});
this["FlipkartProductpageMyApp"]["templates"]["product_img_container"] = Handlebars.template ({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<img src=\""
    + alias2(alias1((depth0 != null ? depth0.images_path : depth0), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.images_name : depth0)) != null ? stack1["0"] : stack1), depth0))
    + "\" title=\"Product image\" class=\"img-responsive\" id=\"product-image\" alt=\"Responsive image\">\r\n";
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["product_price"] = Handlebars.template ({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"price\" tabindex=\"0\">₹"
    + container.escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"price","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["rate_review_button"] = Handlebars.template ({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<button type=\"button\" class=\"btn btn-secondary block-btn\">\r\n             <a href=\"javascript:void(0)\" tabindex=\"-1\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</a>\r\n         </button>";
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["review_list"] = Handlebars.template ({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li class=\"list-group-item\">\r\n    <div class=\"comment-container\">\r\n        <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"...\">\r\n            <button type=\"button\" class=\"btn btn-success rate-btn\" tabindex=\"-1\">\r\n                         <span class=\"comment-rate\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.rate : stack1), depth0))
    + "</span>\r\n                         <span class=\"badge rate-btn-badge\">\r\n                         <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\r\n                         </span>\r\n                     </button>\r\n        </div>\r\n        <div class=\"inline-block\" tabindex=\"0\" aria-label='Comment with "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.rate : stack1), depth0))
    + " star rating has heading  "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.title : stack1), depth0))
    + "'>\r\n            <h5 class=\"comment-head\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h5>\r\n        </div>\r\n        <div>\r\n            <p tabindex=\"0\" aria-label=\"Description "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.description : stack1), depth0))
    + "\">\r\n                "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.description : stack1), depth0))
    + "\r\n            </p>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-6\">\r\n                    <p class=\"commenter-detail\">\r\n                        "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.name : stack1), depth0))
    + " <span class=\"glyphicon glyphicon-ok-circle\" aria-hidden=\"true\"></span>"
    + alias2(alias1((depths[1] != null ? depths[1].flipkart_certified_buyer : depths[1]), depth0))
    + "\r\n                        &nbsp"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.time : stack1), depth0))
    + "\r\n                    </p>\r\n                </div>\r\n                <div class=\"internal-col-xs-12 col-md-6\">\r\n                    <div class=\"comment-action-container pull-right like-dis-like-incrementor-container\">\r\n                        <span class=\"like-incrementor\" data-review-id="
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + ">\r\n                                  <span class=\"glyphicon glyphicon-thumbs-up thumbs-up thumbs-up-identifi pointer\" tabindex=\"0\" aria-label=\"clickable like\" role=\"button\" ></span>\r\n                        <span class=\"pointer like-dislike-count like-count\" tabindex=\"0\" role=\"number\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.likes : stack1), depth0))
    + " likes\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.likes : stack1), depth0))
    + "</span>\r\n                        </span>\r\n                        <span class=\"dis-like-incrementor\" data-review-id="
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + ">\r\n                                  <span class=\"glyphicon glyphicon-thumbs-down thumbs-down thumbs-down-identifi pointer\"  tabindex=\"0\" aria-label=\"clickable dislike\" role=\"button\"></span>\r\n                        <span class=\"pointer like-dislike-count dis-like-count\" tabindex=\"0\" role=\"number\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.likes : stack1), depth0))
    + " dislikes\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.dis_likes : stack1), depth0))
    + "</span>\r\n                        </span>\r\n                        <div class=\"dropdown inline-block\">\r\n                            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" tabindex=\"0\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"true\">\r\n                                                                 <span class=\"caret\"></span>\r\n                                                                 <span class=\"hidden\">Carret</span>\r\n                                                             </button>\r\n                            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].flipkart_comment_related_action : depths[1]),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                                <li><a href=\"javascript:void(0)\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</a>\r\n                                </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.reviews : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
this["FlipkartProductpageMyApp"]["templates"]["spec_list"] = Handlebars.template ({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <li class=\"list-group-item\">\r\n            <div class=\"spec-table-cont\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr tabindex=\"0\" aria-label=\""
    + alias4(((helper = (helper = helpers.spec_type || (depth0 != null ? depth0.spec_type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"spec_type","hash":{},"data":data}) : helper)))
    + " category\">\r\n                            <th>"
    + alias4(((helper = (helper = helpers.spec_type || (depth0 != null ? depth0.spec_type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"spec_type","hash":{},"data":data}) : helper)))
    + "</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.spec_type_details : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </tbody>\r\n                </table>\r\n            </div>\r\n        </li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <tr tabindex=\"0\" aria-label=\""
    + alias4(((helper = (helper = helpers.feature_name || (depth0 != null ? depth0.feature_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"feature_name","hash":{},"data":data}) : helper)))
    + " is "
    + alias4(((helper = (helper = helpers.feature_value || (depth0 != null ? depth0.feature_value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"feature_value","hash":{},"data":data}) : helper)))
    + "\">\r\n                            <td >"
    + alias4(((helper = (helper = helpers.feature_name || (depth0 != null ? depth0.feature_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"feature_name","hash":{},"data":data}) : helper)))
    + "</td>\r\n                            <td>"
    + alias4(((helper = (helper = helpers.feature_value || (depth0 != null ? depth0.feature_value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"feature_value","hash":{},"data":data}) : helper)))
    + "</td>\r\n                        </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["spec_list_heading"] = Handlebars.template ({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"list-group-item\">\r\n            <h3 class=\"spec-head\" tabindex=\"0\" aria-label=\"Product "
    + alias4(((helper = (helper = helpers.flipkart_specifications || (depth0 != null ? depth0.flipkart_specifications : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flipkart_specifications","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.flipkart_specifications || (depth0 != null ? depth0.flipkart_specifications : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flipkart_specifications","hash":{},"data":data}) : helper)))
    + "</h3>\r\n        </li>";
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["total_rating_review"] = Handlebars.template ({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"rate-info\"><span class=\"total-rate-product\">x</span> "
    + alias4(((helper = (helper = helpers.flipkart_ratings || (depth0 != null ? depth0.flipkart_ratings : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flipkart_ratings","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.flipkart_and || (depth0 != null ? depth0.flipkart_and : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flipkart_and","hash":{},"data":data}) : helper)))
    + " <span id=\"total-review-product\">x</span>        "
    + alias4(((helper = (helper = helpers.flipkart_reviews || (depth0 != null ? depth0.flipkart_reviews : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flipkart_reviews","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});
this["FlipkartProductpageMyApp"]["templates"]["total_review_bottom"] = Handlebars.template ({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"total-review\"><span class=\"total-rate-product\">x</span> "
    + container.escapeExpression(((helper = (helper = helpers.flipkart_reviews || (depth0 != null ? depth0.flipkart_reviews : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"flipkart_reviews","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});