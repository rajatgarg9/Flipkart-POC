var jsonDataObj = {},
    xttp,
    productDetailsAPI = {
        method: "POST",
        url: "/product_page?file=product_details",
        async: "true",
        content_type: "application/x-www-form-urlencoded",
        action: function () {
            jsonDataObj.product_details_data = JSON.parse(this.responseText);
        }
    },
globalkeysAPI = {
    method: "POST",
    url: "/product_page?file=global_keys",
    async: "true",
    content_type: "application/x-www-form-urlencoded",
    action: function(){
        jsonDataObj.global_keys_data=JSON.parse(this.responseText);
        
    }
     },
     productMainCategoriesAPI = {
    method: "POST",
    url: "/product_page?file=main_categories",
    async: "true",
    content_type: "application/x-www-form-urlencoded",
    action: function(){
        jsonDataObj.product_main_categories_data=JSON.parse(this.responseText);
        
    }
     },
     headerAPI = {
    method: "POST",
    url: "/product_page?file=header",
    async: "true",
    content_type: "application/x-www-form-urlencoded",
    action: function(){
        jsonDataObj.header_data=JSON.parse(this.responseText); 
    }
     },
     footerAPI = {
    method: "POST",
    url: "/product_page?file=footer",
    async: "true",
    content_type: "application/x-www-form-urlencoded",
    action: function(){
        jsonDataObj.footer_data=JSON.parse(this.responseText); 
    }
     },
     productCategoriesAPI = {
    method: "POST",
    url: "/product_page?file=product_categories",
    async: "true",
    content_type: "application/x-www-form-urlencoded",
    action: function(){
        jsonDataObj.product_categories_data=JSON.parse(this.responseText); 
    }
     },
     brandAPI = {
    method: "POST",
    url: "/product_page?file=brand",
    async: "true",
    content_type: "application/x-www-form-urlencoded",
    action: function(){
        jsonDataObj.brand_data=JSON.parse(this.responseText); 
    }
     },
     userInfoAPI = {
    method: "POST",
    url: "/product_page?file=user_info",
    async: "true",
    content_type: "application/x-www-form-urlencoded",
    action: function(){
        jsonDataObj.user_info_data=JSON.parse(this.responseText); 
    }
     };

ajaxCall(productDetailsAPI);
ajaxCall(globalkeysAPI);
ajaxCall(productMainCategoriesAPI);
ajaxCall(headerAPI);
ajaxCall(footerAPI);
ajaxCall(productCategoriesAPI);
ajaxCall(brandAPI);
ajaxCall(userInfoAPI);