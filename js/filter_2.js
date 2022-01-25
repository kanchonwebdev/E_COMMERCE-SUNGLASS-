var p_block = document.getElementsByClassName("product-block");
var default_id = document.querySelectorAll("#default_id");


for (let i = 0; i < p_block.length; i++) {
    p_block[i].style.display = "none";
}

for (let i = 0; i < default_id.length; i++) {
    default_id[i].style.display = "block";
}

function show_product_by_category(data){
    var product_block = document.getElementsByClassName("product-block");
    var category_id = document.querySelectorAll("#"+data);

    for (let i = 0; i < product_block.length; i++) {
        product_block[i].style.display = "none";
    }

    for (let i = 0; i < category_id.length; i++) {
        category_id[i].style.display = "block";
    }
}

function show_product_by_color(data){
    var product_block = document.getElementsByClassName("product-block");
    var color_id = document.querySelectorAll("#"+data);

    for (let i = 0; i < product_block.length; i++) {
        product_block[i].style.display = "none";
    }

    for (let i = 0; i < color_id.length; i++) {
        color_id[i].style.display = "block";
    }
}

function show_product_by_featured(data){
    var product_block = document.getElementsByClassName("product-block");
    var featured_1 = document.querySelectorAll("#Featured");
    var featured_2 = document.querySelectorAll("#Featured_2");
    var featured_3 = document.querySelectorAll("#Featured_3");

    var newest_1 = document.querySelectorAll("#Newest");
    var newest_2 = document.querySelectorAll("#Newest_2");
    var newest_3 = document.querySelectorAll("#Newest_3");

    
    var default_id = document.querySelectorAll("#default_id");

    for (let i = 0; i < product_block.length; i++) {
        product_block[i].style.display = "none";
    }

    if (data == "none") {
        for (let i = 0; i < default_id.length; i++) {
            default_id[i].style.display = "block";
        }
    }
    
    if (data == "featured") {
        for (let i = 0; i < featured_1.length; i++) {
            featured_1[i].style.display = "block";
        }

        
        for (let i = 0; i < featured_2.length; i++) {
            featured_2[i].style.display = "block";
        }

        
        for (let i = 0; i < featured_3.length; i++) {
            featured_3[i].style.display = "block";
        }
    }
    
    if (data == "newest") {
        for (let i = 0; i < newest_1.length; i++) {
            newest_1[i].style.display = "block";
        }

        
        for (let i = 0; i < newest_2.length; i++) {
            newest_2[i].style.display = "block";
        }

        
        for (let i = 0; i < newest_3.length; i++) {
            newest_3[i].style.display = "block";
        }
    }
}

function submit_forms(){
    var product_block = document.getElementsByClassName("product-block");
    var price = document.querySelectorAll("#price_arr_data");

    for (let i = 0; i < product_block.length; i++) {
        product_block[i].style.display = "none";
    }

    for (let i = 0; i < price.length; i++) {
        price[i].style.display = "block";
    }
    
}