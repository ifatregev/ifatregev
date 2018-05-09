
function getQueryVariable(variable)
{
       var queryVariable = window.location.search.substring(1);
       console.log(queryVariable);
        var vars = queryVariable.split("?");
        for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){
                    return pair[1];
                }
        }
        return(false);
    return queryVariable;
}

$.ajax({
    url: "http://127.0.0.1:5000/product/" + getQueryVariable('product_id'),
    type: 'GET',
    success: function(product){    
        $('.product').html(product.name);
    }
});

