this.FlipkartProductpageMyApp=this.FlipkartProductpageMyApp||{},this.FlipkartProductpageMyApp.templates=this.FlipkartProductpageMyApp.templates||{},this.FlipkartProductpageMyApp.templates.footer_address=Handlebars.template({1:function(a,n,e,t,l){var r=a.lambda,s=a.escapeExpression;return'        <div class="col-xs-6 address-padding">\r\n            <address>\r\n                <strong>'+s(r(null!=n?n.address_type:n,n))+":</strong><br/>"+s(r(null!=n?n.address:n,n))+"\r\n            </address>\r\n        </div>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r;return null!=(r=e.each.call(null!=n?n:a.nullContext||{},null!=n?n.footer_address:n,{name:"each",hash:{},fn:a.program(1,l,0),inverse:a.noop,data:l}))?r:""},useData:!0}),this.FlipkartProductpageMyApp.templates.footer_shortcut_link=Handlebars.template({1:function(a,n,e,t,l){var r;return'<div class="col-xs-10 col-xs-offset-1 col-sm-3 col-sm-offset-1">\r\n    <table class="table table-condensed">\r\n        <thead>\r\n            <tr>\r\n                <th>'+a.escapeExpression(a.lambda(null!=n?n.name:n,n))+"</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n"+(null!=(r=e.each.call(null!=n?n:a.nullContext||{},null!=n?n.category:n,{name:"each",hash:{},fn:a.program(2,l,0),inverse:a.noop,data:l}))?r:"")+"        </tbody>\r\n    </table>\r\n</div>\r\n"},2:function(a,n,e,t,l){return"            <tr>\r\n                <td>"+a.escapeExpression(a.lambda(n,n))+"</td>\r\n            </tr>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r;return null!=(r=e.each.call(null!=n?n:a.nullContext||{},null!=n?n.footer_shortcut:n,{name:"each",hash:{},fn:a.program(1,l,0),inverse:a.noop,data:l}))?r:""},useData:!0}),this.FlipkartProductpageMyApp.templates.footer_static_text=Handlebars.template({1:function(a,n,e,t,l){var r;return'        <td><span class="glyphicon glyphicon-map-marker glyphicon-size" aria-hidden="true"></span>\r\n            <p class="glyphicon-txt-size"><strong>'+a.escapeExpression((r=null!=(r=e.text||(null!=n?n.text:n))?r:e.helperMissing,"function"==typeof r?r.call(null!=n?n:a.nullContext||{},{name:"text",hash:{},data:l}):r))+"</strong>\r\n            </p>\r\n        </td>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r;return null!=(r=e.each.call(null!=n?n:a.nullContext||{},n,{name:"each",hash:{},fn:a.program(1,l,0),inverse:a.noop,data:l}))?r:""},useData:!0}),this.FlipkartProductpageMyApp.templates.cart_btn_data=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r,s,i=a.escapeExpression;return'        <span class="cart-btn-txt">'+i((s=null!=(s=e.flipkart_cart||(null!=n?n.flipkart_cart:n))?s:e.helperMissing,"function"==typeof s?s.call(null!=n?n:a.nullContext||{},{name:"flipkart_cart",hash:{},data:l}):s))+'</span>\r\n        <span class="badge cart-btn-badge">'+i(a.lambda(null!=(r=null!=n?n.cart_items:n)?r.length:r,n))+"</span>\r\n"},useData:!0}),this.FlipkartProductpageMyApp.templates.head_main_cat_list=Handlebars.template({1:function(a,n,e,t,l,r,s){var i;return'        <li class="dropdown dropdown-head">\r\n            <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'+a.escapeExpression(a.lambda(null!=n?n.name:n,n))+' \r\n         <span class="caret"></span>\r\n         </a>\r\n            <ul class="dropdown-menu">\r\n                '+(null!=(i=e.each.call(null!=n?n:a.nullContext||{},null!=s[1]?s[1].categories:s[1],{name:"each",hash:{},fn:a.program(2,l,0,r,s),inverse:a.noop,data:l}))?i:"")+"\r\n            </ul>\r\n        </li>\r\n"},2:function(a,n,e,t,l,r,s){var i;return" "+(null!=(i=(e.ifcond||n&&n.ifcond||e.helperMissing).call(null!=n?n:a.nullContext||{},null!=s[1]?s[1].id:s[1],null!=n?n.main_cat_id:n,{name:"ifcond",hash:{},fn:a.program(3,l,0,r,s),inverse:a.noop,data:l}))?i:"")+" "},3:function(a,n,e,t,l){return'\r\n                <li>\r\n                    <a href="javascript:void(0)">'+a.escapeExpression(a.lambda(null!=n?n.name:n,n))+"</a>\r\n                </li>\r\n                "},compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l,r,s){var i;return(null!=(i=e.each.call(null!=n?n:a.nullContext||{},null!=n?n.main_categories:n,{name:"each",hash:{},fn:a.program(1,l,0,r,s),inverse:a.noop,data:l}))?i:"")+" "},useData:!0,useDepths:!0}),this.FlipkartProductpageMyApp.templates.main_head_list=Handlebars.template({1:function(a,n,e,t,l){return'    <li role="presentation" class="top-nav-link">\r\n        <a href="javascript:void(0)">'+a.escapeExpression(a.lambda(n,n))+"</a>\r\n    </li>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r;return null!=(r=e.each.call(null!=n?n:a.nullContext||{},null!=n?n.header_link:n,{name:"each",hash:{},fn:a.program(1,l,0),inverse:a.noop,data:l}))?r:""},useData:!0}),this.FlipkartProductpageMyApp.templates.search_box=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r;return'<input type="text" class="form-control" placeholder="'+a.escapeExpression((r=null!=(r=e.flipkart_search_for_product_brand_more||(null!=n?n.flipkart_search_for_product_brand_more:n))?r:e.helperMissing,"function"==typeof r?r.call(null!=n?n:a.nullContext||{},{name:"flipkart_search_for_product_brand_more",hash:{},data:l}):r))+'" aria-describedby="sizing-addon1">\r\n'},useData:!0}),this.FlipkartProductpageMyApp.templates.add_cart_buy_btn=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r,s=null!=n?n:a.nullContext||{},i=e.helperMissing,p=a.escapeExpression;return'        <div class="col-xs-12 col-sm-12 col-md-6">\r\n            <div class="btn-container-pad">\r\n                <button class="btn btn-primary block-btn add-cart" type="submit">\r\n                     <a href="javascript:void(0)">\r\n                         <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> '+p((r=null!=(r=e.flipkart_add_to_cart||(null!=n?n.flipkart_add_to_cart:n))?r:i,"function"==typeof r?r.call(s,{name:"flipkart_add_to_cart",hash:{},data:l}):r))+'\r\n                     </a>\r\n                 </button>\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 col-sm-12 col-md-6">\r\n            <div class="btn-container-pad">\r\n                <button class="btn btn-primary block-btn buy-now" type="submit">\r\n                     <a href="javascript:void(0)">\r\n                         <span class="glyphicon glyphicon-flash" aria-hidden="true"></span> '+p((r=null!=(r=e.flipkart_buy_now||(null!=n?n.flipkart_buy_now:n))?r:i,"function"==typeof r?r.call(s,{name:"flipkart_buy_now",hash:{},data:l}):r))+"\r\n                     </a>\r\n                 </button>\r\n            </div>\r\n        </div>"},useData:!0}),this.FlipkartProductpageMyApp.templates.comment_type_list=Handlebars.template({1:function(a,n,e,t,l){var r;return'        <li role="presentation" '+(null!=(r=(e.ifcond||n&&n.ifcond||e.helperMissing).call(null!=n?n:a.nullContext||{},l&&l.key,0,{name:"ifcond",hash:{},fn:a.program(2,l,0),inverse:a.noop,data:l}))?r:"")+'><a href="javascript:void(0)">'+a.escapeExpression(a.lambda(n,n))+"</a>\r\n        </li>\r\n"},2:function(a,n,e,t,l){return'class="active" '},compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r;return null!=(r=e.each.call(null!=n?n:a.nullContext||{},n,{name:"each",hash:{},fn:a.program(1,l,0),inverse:a.noop,data:l}))?r:""},useData:!0}),this.FlipkartProductpageMyApp.templates.product_heading=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r;return'<h4 class="prod-name-heading">'+a.escapeExpression((r=null!=(r=e.product_name||(null!=n?n.product_name:n))?r:e.helperMissing,"function"==typeof r?r.call(null!=n?n:a.nullContext||{},{name:"product_name",hash:{},data:l}):r))+"</h4>"},useData:!0}),this.FlipkartProductpageMyApp.templates.product_images_list=Handlebars.template({1:function(a,n,e,t,l,r,s){var i=a.lambda,p=a.escapeExpression;return'            <li class="list-group-item">\r\n                <img src="'+p(i(null!=s[1]?s[1].images_path:s[1],n))+"/"+p(i(n,n))+'" class="img-responsive" alt="Responsive image">\r\n            </li>\r\n'},compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l,r,s){var i;return'<ul class="list-group">\r\n'+(null!=(i=e.each.call(null!=n?n:a.nullContext||{},null!=n?n.images_name:n,{name:"each",hash:{},fn:a.program(1,l,0,r,s),inverse:a.noop,data:l}))?i:"")+"        </ul>"},useData:!0,useDepths:!0}),this.FlipkartProductpageMyApp.templates.product_img_container=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r,s=a.lambda,i=a.escapeExpression;return'<img src="'+i(s(null!=n?n.images_path:n,n))+"/"+i(s(null!=(r=null!=n?n.images_name:n)?r[0]:r,n))+'" class="img-responsive" id="product-image" alt="Responsive image">\r\n'},useData:!0}),this.FlipkartProductpageMyApp.templates.product_price=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r;return'<p class="price">₹'+a.escapeExpression((r=null!=(r=e.price||(null!=n?n.price:n))?r:e.helperMissing,"function"==typeof r?r.call(null!=n?n:a.nullContext||{},{name:"price",hash:{},data:l}):r))+"</p>"},useData:!0}),this.FlipkartProductpageMyApp.templates.rate_review_button=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){return'<button type="button" class="btn btn-secondary block-btn">\r\n             <a href="javascript:void(0)">'+a.escapeExpression(a.lambda(n,n))+"</a>\r\n         </button>"},useData:!0}),this.FlipkartProductpageMyApp.templates.review_list=Handlebars.template({1:function(a,n,e,t,l,r,s){var i,p=a.lambda,o=a.escapeExpression;return'        <li class="list-group-item">\r\n            <div class="comment-container">\r\n                <div class="btn-group btn-group-sm" role="group" aria-label="...">\r\n                    <button type="button" class="btn btn-success rate-btn">\r\n                         <span class="comment-rate">'+o(p(null!=(i=null!=n?n.details:n)?i.rate:i,n))+'</span>\r\n                         <span class="badge rate-btn-badge">\r\n                         <span class="glyphicon glyphicon-star" aria-hidden="true"></span>\r\n                         </span>\r\n                     </button>\r\n                </div>\r\n                <div class="inline-block">\r\n                    <h5 class="comment-head">'+o(p(null!=(i=null!=n?n.details:n)?i.title:i,n))+"</h5>\r\n                </div>\r\n                <div>\r\n                    <p>\r\n                        "+o(p(null!=(i=null!=n?n.details:n)?i.description:i,n))+'\r\n                    </p>\r\n                    <div class="row">\r\n                        <div class="col-xs-12 col-md-6">\r\n                            <p class="commenter-detail">\r\n                                '+o(p(null!=(i=null!=n?n.details:n)?i.name:i,n))+' <span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>                                '+o(p(null!=s[1]?s[1].flipkart_certified_buyer:s[1],n))+" &nbsp"+o(p(null!=(i=null!=n?n.details:n)?i.time:i,n))+'\r\n                            </p>\r\n                        </div>\r\n                        <div class="internal-col-xs-12 col-md-6">\r\n                            <div class="comment-action-container pull-right like-dis-like-incrementor-container">\r\n                                <span class="like-incrementor" data-review-id='+o(p(null!=n?n.id:n,n))+'>\r\n                                  <span class="glyphicon glyphicon-thumbs-up thumbs-up thumbs-up-identifi pointer" aria-hidden="true"></span>\r\n                                <span class="pointer like-dislike-count like-count">'+o(p(null!=(i=null!=n?n.details:n)?i.likes:i,n))+'</span>\r\n                                </span>\r\n                                <span class="dis-like-incrementor" data-review-id='+o(p(null!=n?n.id:n,n))+'>\r\n                                  <span class="glyphicon glyphicon-thumbs-down thumbs-down thumbs-down-identifi pointer" aria-hidden="true"></span>\r\n                                <span class="pointer like-dislike-count dis-like-count">'+o(p(null!=(i=null!=n?n.details:n)?i.dis_likes:i,n))+'</span>\r\n                                </span>\r\n                                <div class="dropdown inline-block">\r\n                                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"\r\n                                        aria-expanded="true">\r\n                                                                 <span class="caret"></span>\r\n                                                             </button>\r\n                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">\r\n'+(null!=(i=e.each.call(null!=n?n:a.nullContext||{},null!=s[1]?s[1].flipkart_comment_related_action:s[1],{name:"each",hash:{},fn:a.program(2,l,0,r,s),inverse:a.noop,data:l}))?i:"")+"                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n"},2:function(a,n,e,t,l){return'                                        <li><a href="javascript:void(0)">'+a.escapeExpression(a.lambda(n,n))+"</a>\r\n                                        </li>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l,r,s){var i;return null!=(i=e.each.call(null!=n?n:a.nullContext||{},null!=n?n.reviews:n,{name:"each",hash:{},fn:a.program(1,l,0,r,s),inverse:a.noop,data:l}))?i:""},useData:!0,useDepths:!0}),this.FlipkartProductpageMyApp.templates.spec_list=Handlebars.template({1:function(a,n,e,t,l){var r,s,i=null!=n?n:a.nullContext||{};return'        <li class="list-group-item">\r\n            <div class="spec-table-cont">\r\n                <table class="table">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>'+a.escapeExpression((s=null!=(s=e.spec_type||(null!=n?n.spec_type:n))?s:e.helperMissing,"function"==typeof s?s.call(i,{name:"spec_type",hash:{},data:l}):s))+"</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n"+(null!=(r=e.each.call(i,null!=n?n.spec_type_details:n,{name:"each",hash:{},fn:a.program(2,l,0),inverse:a.noop,data:l}))?r:"")+"                    </tbody>\r\n                </table>\r\n            </div>\r\n        </li>\r\n"},2:function(a,n,e,t,l){var r,s=null!=n?n:a.nullContext||{},i=e.helperMissing,p=a.escapeExpression;return"                        <tr>\r\n                            <td>"+p((r=null!=(r=e.feature_name||(null!=n?n.feature_name:n))?r:i,"function"==typeof r?r.call(s,{name:"feature_name",hash:{},data:l}):r))+"</td>\r\n                            <td>"+p((r=null!=(r=e.feature_value||(null!=n?n.feature_value:n))?r:i,"function"==typeof r?r.call(s,{name:"feature_value",hash:{},data:l}):r))+"</td>\r\n                        </tr>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r;return null!=(r=e.each.call(null!=n?n:a.nullContext||{},null!=n?n.categories:n,{name:"each",hash:{},fn:a.program(1,l,0),inverse:a.noop,data:l}))?r:""},useData:!0}),this.FlipkartProductpageMyApp.templates.spec_list_heading=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r;return'<li class="list-group-item">\r\n            <h3 class="spec-head">'+a.escapeExpression((r=null!=(r=e.flipkart_specifications||(null!=n?n.flipkart_specifications:n))?r:e.helperMissing,"function"==typeof r?r.call(null!=n?n:a.nullContext||{},{name:"flipkart_specifications",hash:{},data:l}):r))+"</h3>\r\n        </li>"},useData:!0}),this.FlipkartProductpageMyApp.templates.total_rating_review=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r,s=null!=n?n:a.nullContext||{},i=e.helperMissing,p=a.escapeExpression;return'<span class="rate-info"><span class="total-rate-product">x</span> '+p((r=null!=(r=e.flipkart_ratings||(null!=n?n.flipkart_ratings:n))?r:i,"function"==typeof r?r.call(s,{name:"flipkart_ratings",hash:{},data:l}):r))+" "+p((r=null!=(r=e.flipkart_and||(null!=n?n.flipkart_and:n))?r:i,"function"==typeof r?r.call(s,{name:"flipkart_and",hash:{},data:l}):r))+' <span id="total-review-product">x</span>        '+p((r=null!=(r=e.flipkart_reviews||(null!=n?n.flipkart_reviews:n))?r:i,"function"==typeof r?r.call(s,{name:"flipkart_reviews",hash:{},data:l}):r))+"</span>"},useData:!0}),this.FlipkartProductpageMyApp.templates.total_review_bottom=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r;return'<p class="total-review"><span class="total-rate-product">x</span> '+a.escapeExpression((r=null!=(r=e.flipkart_reviews||(null!=n?n.flipkart_reviews:n))?r:e.helperMissing,"function"==typeof r?r.call(null!=n?n:a.nullContext||{},{name:"flipkart_reviews",hash:{},data:l}):r))+"</p>"},useData:!0});