$.ajax({
    url: "http://127.0.0.1:5000/product",
    type: 'GET',
    success: function(productList){
        // $('.list').html
        console.log(productList);
    }
});
