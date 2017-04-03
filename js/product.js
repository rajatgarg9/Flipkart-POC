"use strict"
var specData;
var specPath=productDetails.products[0].specifications;

class Specification{
    constructor(specType,featureName,featureValue){
        this.specType=specType;
        this.featureName=featureName;
        this.featureValue=featureValue;
    }
}

var specData=(specPath=>{
    let arr=[],
        counter=0;    
for(let i=0;i<specPath.length;i++){
     for(var j=0;j<specPath[i].spec_type_details.length;j++){
     arr[counter] = new Specification(specPath[i].spec_type,specPath[i].spec_type_details[j].feature_name,specPath[i].spec_type_details[j].feature_value);
     counter++;
     }
}
return arr;
})(specPath);

// $(document).ready(function(){
//         console.log('dsf', $("#entry-template"), productDetails);
//         var source   = $("#entry-template").html();
//             var template = Handlebars.compile(source);
//             var context = productDetails;          
//             var html    = template(context);
//             $('#bootstrap-overrides').html(html);
//      })
     /*var templateScript = Handlebars.compile(template);

// When the template is compiled it is added to Handlebars.templates
            var renderer = Handlebars.templates["templateScript"];
            
            // call the compiled function with the template data
            var result = renderer({productDetails});
            
            document.getElementById("bootstrap-overrides").innerHTML=result+document.getElementById("bootstrap-overrides").innerHTML;*/
 var source   = document.getElementById("entry-template").innerHTML;
 var template = Handlebars.compile(source);

var context = {title: "My New Post", body: "This is my first post!"};
 var html    = template(context);
 document.getElementById("bootstrap-overrides").innerHTML+=html;

