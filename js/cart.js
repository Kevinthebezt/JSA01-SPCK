let carts = JSON.parse(localStorage.getItem('carts')) || [];
let sum = 0;
// console.log(carts)

for (let cart of carts) {
    if (cart.quantity > 0) {
        let card = document.createElement("div");
        card.classList.add("card");
        console.log(cart);

        let img = document.createElement("img");
        img.classList.add("img-container");
        img.setAttribute("src", cart.image);
        card.appendChild(img);

        let container = document.createElement("div");
        container.classList.add("container");

        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = cart.name;
        container.appendChild(name);

        let price = document.createElement("h6");
        price.innerHTML = "<b>Price: </b>" + cart.price;
        container.appendChild(price);

        card.appendChild(container);
        document.getElementById("products").appendChild(card);

        sum = sum + cart.id;
    }

}

const checkout = document.getElementById("checkout");
checkout.innerHTML = "Total: " + sum + ".000đ";
console.log(sum);