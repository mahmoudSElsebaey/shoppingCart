let links = document.querySelector("#links"),
  userInfo = document.querySelector("#userInfo"),
  userData = document.querySelector("#user"),
  logOutBtn = document.querySelector("#logOut");

////=========> remove the links (sign in & sign up) from the home page ==> and return the user info (name & log out option)
if (localStorage.getItem("username")) {
  links.remove();
  userInfo.style.display = "flex";
  userData.innerHTML =
    '<i class="fas fa-user-circle"></i>' +
    " " +
    localStorage.getItem("username");
}
////========> logout and then go to the login page
logOutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1000);
});

////=======> products data
let allProducts = document.querySelector(".products");
let products = [
  {
    id: 1,
    title: "Milk Almarai",
    salary: 20,
    imgURL: "Images/product (6).jpg",
  },
  {
    id: 2,
    title: "Abu Auf",
    salary: 10,
    imgURL: "Images/product (3).jpg",
  },
  {
    id: 3,
    title: "Heinz Ketchup",
    salary: 15,
    imgURL: "Images/product (4).jpg",
  },
  {
    id: 4,
    title: "Cocacola",
    salary: 10,
    imgURL: "Images/product (9).jpg",
  },
];

// ===> create products items
function drawItems() {
  let x = products.map(function (item) {
    return ` <div class="product-item">
                    <img class="product-item-img" src="${item.imgURL}">
                    <div class="product-item-info">
                        <h2>${item.title}</h2>
                        <p>this is the information about this product</p>
                        <span>salary : ${item.salary} $</span>
                    </div>
                    <div class="product-item-action">
                        <button class="add-to-cart" onclick="addToCart(${item.id})">add to cart</button>
                        <i class="far fa-heart fav-icon"></i>
                    </div>
                </div>`;
  });
  allProducts.innerHTML = x;
}
drawItems();

let addProduct = document.querySelector(".add-product"),
  badge = document.querySelector(".badge");

let addedItem = localStorage.getItem("productsInCart")
  ? JSON.parse(localStorage.getItem("productsInCart"))
  : [];
if (addedItem) {
  addedItem.map((item) => {
    addProduct.innerHTML += `<div class="add-product-item">
                                        <img src="${item.imgURL}">
                                        <p>${item.title}</p>
                                       
                                    </div>`;
  });
  badge.style.display = "block";
  badge.innerHTML = addedItem.length;
}

if ((localStorage.getItem = "username")) {
  ////====> add the choosen product to cart
  function addToCart(id) {
    let choosenItem = products.find((item) => item.id === id);

    addProduct.innerHTML += `<div class="add-product-item">
                                        <img src="${choosenItem.imgURL}">
                                        <p>${choosenItem.title}</p>                                     
                                    </div>`;

    ////=====> transfer the products to the cartsProducts page
    addedItem = [...addedItem, choosenItem];
    localStorage.setItem("productsInCart", JSON.stringify(addedItem)); // turn addedItem from type(object) into type(string)

    ////====> increase the number of products
    let allAddProducts = document.querySelectorAll(".add-product-item");
    badge.style.display = "block";
    badge.innerHTML = allAddProducts.length;

    // ////====> close product item from cart
    // // let counter = allAddProducts.length;
    // let closeProductItem = document.querySelectorAll(".add-product span");
    // allAddProducts.forEach(function (item, i) {
    //   closeProductItem[i].addEventListener("click", () => {
    //     item.remove();
    //     badge.innerHTML = --counter;
    //     // let badgeSC = badge.innerHTML;
    //     // localStorage.setItem("counterSC", badgeSC);

    //     if (counter === 0) {
    //       badge.style.display = "none";
    //     }
    //   });
    // });
  }
} else {
  window.location = "login.html";
}

// ====> show / hide shopping cart content by icon
let shoppingCartIcon = document.querySelector(".shoppingCartIcon");
let cartsProducts = document.querySelector(".carts-products");
shoppingCartIcon.addEventListener("click", () => {
  if (cartsProducts.innerHTML != "") {
    if (cartsProducts.style.display == "block") {
      cartsProducts.style.display = "none";
    } else {
      cartsProducts.style.display = "block";
    }
  }
});
