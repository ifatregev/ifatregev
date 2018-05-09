$.ajax({
    url: "http://127.0.0.1:5000/product",
    type: 'GET',
    success: function(productList) {
        var strList = `
                        <tr>
                            <th>Antibody Name</th>
                            <th>Rating</th> 
                        </tr>
                        
        `;

        $.each(productList, function(key, value){
            strList += `<tr>
                        <td> <a href="product.html?product_id=${key}" class="item">${value.name}<a></td>
                        <td>${value.rating}</td></tr>          
            `;  
        });
        
        $('.list').html(strList);
    }
});

//console.log(JSON.stringify(productList));
//table-> learn about bootstrap
//comp
//readme
//quickstart flask
//when you press oc an item in the list the url changes
//add bootstrap
