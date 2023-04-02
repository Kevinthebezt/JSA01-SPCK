// fetch(`https://store.steampowered.com/api/appdetails?appids=${appID}`)
//     .then(function (resp) {
//         return resp.json();
//     }).then(data => {

//     });

let products = {
    data: [
        {
            name: "Train Sim World® 3",
            price: "260.000đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1944790/header.jpg?t=1679061461"
        },

        {
            name: "Dying Light 2 Stay Human",
            price: "495.000đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/534380/header.jpg?t=1679339009"
        },

        {
            name: "SnowRunner",
            price: "209.000đđ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1465360/header.jpg?t=1677579491"
        },

        {
            name: "Rust",
            price: "341.500đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/252490/header_alt_assets_21.jpg?t=1678981332"
        },

        {
            name: "TRIANGLE STRATEGY",
            price: "745.500đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1850510/header.jpg?t=1667491898"
        },

        {
            name: "Cult of the Lamb",
            price: "280.000đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg?t=1678729165"
        },

        {
            name: "Core Keeper",
            price: "135.000đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1621690/header.jpg?t=1678269479"
        },

        {
            name: "Bendy and the Dark Revival",
            price: "125.000đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1063660/header.jpg?t=1669217729"
        },

        {
            name: "Stellaris",
            price: "100.000đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/281990/header.jpg?t=1678972819"
        },

        {
            name: "Chivalry 2",
            price: "105.000đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1824220/header.jpg?t=1670517689"
        },

        {
            name: "LEGO® Star Wars™: The Skywalker Saga",
            price: "395.000đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/920210/header.jpg?t=1676414649"
        },

        {
            name: "Lost Judgment",
            price: "585.000đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/2058190/header.jpg?t=1674786417"
        },

        {
            name: "Cities: Skylines",
            price: "97.500đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/255710/header.jpg?t=1678870879"
        },
        {
            name: "The Past Within",
            price: "52.500đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1515210/header.jpg?t=1676931955"
        },
        {
            name: "Against the Storm",
            price: "199.000đ",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1336490/header.jpg?t=1678945345"
        },
    ]
};

for (let product of products.data) {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("img-container");
    img.setAttribute("src", product.image);
    card.appendChild(img);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = product.name;
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price: </b>" + product.price;
    container.appendChild(price);

    let btn = document.createElement("button");
    btn.setAttribute("onclick", `addToCart("${product.name}")`);
    btn.innerText = "Add to Library";
    container.appendChild(btn);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

let carts = [
    {
        name: "Train Sim World® 3",
        price: "260.000đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1944790/header.jpg?t=1679061461"
    },

    {
        name: "Dying Light 2 Stay Human",
        price: "495.000đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/534380/header.jpg?t=1679339009"
    },

    {
        name: "SnowRunner",
        price: "209.000đđ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1465360/header.jpg?t=1677579491"
    },

    {
        name: "Rust",
        price: "341.500đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/252490/header_alt_assets_21.jpg?t=1678981332"
    },

    {
        name: "TRIANGLE STRATEGY",
        price: "745.500đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1850510/header.jpg?t=1667491898"
    },

    {
        name: "Cult of the Lamb",
        price: "280.000đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg?t=1678729165"
    },

    {
        name: "Core Keeper",
        price: "135.000đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1621690/header.jpg?t=1678269479"
    },

    {
        name: "Bendy and the Dark Revival",
        price: "125.000đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1063660/header.jpg?t=1669217729"
    },

    {
        name: "Stellaris",
        price: "100.000đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/281990/header.jpg?t=1678972819"
    },

    {
        name: "Chivalry 2",
        price: "105.000đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1824220/header.jpg?t=1670517689"
    },

    {
        name: "LEGO® Star Wars™: The Skywalker Saga",
        price: "395.000đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/920210/header.jpg?t=1676414649"
    },

    {
        name: "Lost Judgment",
        price: "585.000đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2058190/header.jpg?t=1674786417"
    },

    {
        name: "Cities: Skylines",
        price: "97.500đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/255710/header.jpg?t=1678870879"
    },
    {
        name: "The Past Within",
        price: "52.500đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1515210/header.jpg?t=1676931955"
    },
    {
        name: "Against the Storm",
        price: "199.000đ",
        quantity: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1336490/header.jpg?t=1678945345"
    },
]

function addToCart(name) {
    for (let cart of carts) {
        if (name == cart.name) {
            cart.quantity += 1;
        }
    }
    console.log(carts);
    localStorage.setItem("carts", JSON.stringify(carts));
}
const producPanel = document.getElementsByClassName("card");
for (let i = 0; i < producPanel.length; i++) {
    producPanel[i].style.backgroundColor = "transparent";
    producPanel[i].style.border = "none";
}
console.log(producPanel);