var productContainer = document.getElementById("productimg");
var search = document.querySelector(".productsearch");
var products = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function(event){
    var enteredValue = event.target.value.toUpperCase();
    for (var count = 0; count < products.length; count++) {
        var productName = products[count].querySelector("p").textContent;
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            products[count].style.display = "none";
        } else {
            products[count].style.display = "block";
        }
    }
});
