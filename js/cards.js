//JS objects
const products = [
    {
        name: "Barcelona's jersey season 23/24",
        cost: "$6.99",
        image: "img/jersey1.webp"
    },
    {
        name: "Barcelona's guest jersey season 23/24",
        cost: "$6.99",
        image: "img/jersey2.webp"
    },
    {
        name: "Barcelona's third jersey season 23/24",
        cost: "$6.99",
        image: "img/jersey3.webp"
    },
    {
        name: "Old school Barca's T-shirt",
        cost: "$10.49",
        image: "img/model.webp"
    },
    {
        name: "Barcelona's jersey season 23/24 (for kids)",
        cost: "$3.49",
        image: "img/kid.webp"
    },
    {
        name: "Mini Camp Nou with grass from stadium",
        cost: "$17.49",
        image: "img/trava.webp"
    },
    {
        name: "Raphinha look",
        cost: "$13.99",
        image: "img/33.webp"
    },
    {
        name: "Training kit",
        cost: "$13.99",
        image: "img/training.webp"
    }
];

// Objects to HTML
const productContainer = document.getElementById('product-list');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('col-md-3');
    productCard.innerHTML = `
        <div class="card product-card">
            <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title product-title">${product.name}</h5>
                <p class="card-text product-price"><strike>$9.99 </strike>/${product.cost}</p>
                <a href="#" class="btn btn-primary buy-button">Buy</a>
            </div>
        </div>
    `;
    productContainer.appendChild(productCard);
});
