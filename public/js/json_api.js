var jsonDataObj = {},
    productDetailsAPI = {
        method: "POST",
        url: "/product_page?type=requiredData&file=product_details",
        async: "true",
        content_type: "application/x-www-form-urlencoded",
        action: function () {
            jsonDataObj.product_details_data = JSON.parse(this.responseText);
        }
    },
    productSpecificationsAPI = {
        method: "POST",
        url: "/product_page?type=requiredData&file=specifications",
        async: "true",
        content_type: "application/x-www-form-urlencoded",
        action: function () {
            jsonDataObj.product_specifications_data = JSON.parse(this.responseText);
        }
    },
    productReviewsAPI = {
        method: "POST",
        url: "/product_page?type=requiredData&file=reviews",
        async: "true",
        content_type: "application/x-www-form-urlencoded",
        action: function () {
            jsonDataObj.product_reviews_data = JSON.parse(this.responseText);
        }
    },
    globalkeysAPI = {
        method: "POST",
        url: "/product_page?type=requiredData&file=global_keys",
        async: "true",
        content_type: "application/x-www-form-urlencoded",
        action: function () {
            jsonDataObj.global_keys_data = JSON.parse(this.responseText);

        }
    },
    productMainCategoriesAPI = {
        method: "POST",
        url: "/product_page?type=requiredData&file=main_categories",
        async: "true",
        content_type: "application/x-www-form-urlencoded",
        action: function () {
            jsonDataObj.product_main_categories_data = JSON.parse(this.responseText);

        }
    },
    headerAPI = {
        method: "POST",
        url: "/product_page?type=requiredData&file=header",
        async: "true",
        content_type: "application/x-www-form-urlencoded",
        action: function () {
            jsonDataObj.header_data = JSON.parse(this.responseText);
        }
    },
    footerAPI = {
        method: "POST",
        url: "/product_page?type=requiredData&file=footer",
        async: "true",
        content_type: "application/x-www-form-urlencoded",
        action: function () {
            jsonDataObj.footer_data = JSON.parse(this.responseText);
        }
    },
    productCategoriesAPI = {
        method: "POST",
        url: "/product_page?type=requiredData&file=product_categories",
        async: "true",
        content_type: "application/x-www-form-urlencoded",
        action: function () {
            jsonDataObj.product_categories_data = JSON.parse(this.responseText);
        }
    },
    brandAPI = {
        method: "POST",
        url: "/product_page?type=requiredData&file=brand",
        async: "true",
        content_type: "application/x-www-form-urlencoded",
        action: function () {
            jsonDataObj.brand_data = JSON.parse(this.responseText);
        }
    },
    userInfoAPI = {
        method: "POST",
        url: "/product_page?type=requiredData&file=user_info",
        async: "true",
        content_type: "application/x-www-form-urlencoded",
        action: function () {
            jsonDataObj.user_info_data = JSON.parse(this.responseText);
        }
    };

ajaxCall(productDetailsAPI);
ajaxCall(productSpecificationsAPI);
ajaxCall(productReviewsAPI);
ajaxCall(globalkeysAPI);
ajaxCall(productMainCategoriesAPI);
ajaxCall(headerAPI);
ajaxCall(footerAPI);
ajaxCall(productCategoriesAPI);
ajaxCall(brandAPI);
ajaxCall(userInfoAPI);