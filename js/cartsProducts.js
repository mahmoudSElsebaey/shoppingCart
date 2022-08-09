let productsInCart = localStorage.getItem("productsInCart");
let allProducts = document.querySelector(".products");

if (productsInCart) {
  // meain ==> if productsInCart have value (true) or not have (false)
  let item = JSON.parse(productsInCart); // turn productsInCart=(item) from type(string) into type(object)
  drawCartProducts(item);
}

function drawCartProducts(products) {
  let x = products.map(function (item) {
    return `<div class="product-item">
                    <img class="product-item-img" src="${item.imgURL}">
                    <div class="product-item-info">
                        <h2>${item.title}</h2>
                        <p>this is the information about this product</p>
                        <span>salary : ${item.salary} $</span>
                    </div>
                    <div class="product-item-action">
                    <button class="add-to-cart" onclick="removeProductFromCart(${item.id})">remove from cart</button>
                </div>
            </div>`;
});
allProducts.innerHTML = x;
}

// function removeProductFromCart(id) {
// let items = JSON.parse(productsInCart);
// let x = items.filter((item) => item.id !== id)
// drawCartProducts(x)
// localStorage.setItem("productsInCart" , JSON.stringify(x))
// }

