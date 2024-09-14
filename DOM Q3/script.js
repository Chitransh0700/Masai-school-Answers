const products = [];

const addProductButton = document.getElementById('add-product');
const sortPriceButton = document.getElementById('sort-price');
const sortRatingButton = document.getElementById('sort-rating');
const priceBarsContainer = document.getElementById('price-bars');
const ratingBarsContainer = document.getElementById('rating-bars');

addProductButton.addEventListener('click', addProduct);
sortPriceButton.addEventListener('click', sortProductsByPrice);
sortRatingButton.addEventListener('click', sortProductsByRating);

function addProduct() {
    const productName = document.getElementById('product-name').value.trim();
    const productPrice = parseFloat(document.getElementById('product-price').value.trim());
    const productRating = parseFloat(document.getElementById('product-rating').value.trim());

    if (productName && !isNaN(productPrice) && !isNaN(productRating) && productRating >= 1 && productRating <= 5) {
        products.push({ name: productName, price: productPrice, rating: productRating });
        updateGraphs();
        clearInputs();
    } else {
        alert('Please enter valid product data.');
    }
}

function updateGraphs() {
    priceBarsContainer.innerHTML = '';
    ratingBarsContainer.innerHTML = '';

    products.forEach(product => {
        const priceBar = document.createElement('div');
        priceBar.classList.add('bar');
        priceBar.style.width = `${product.price * 10}px`;
        priceBar.title = `${product.name}: $${product.price}`;
        priceBarsContainer.appendChild(priceBar);

        const ratingBar = document.createElement('div');
        ratingBar.classList.add('bar');
        ratingBar.style.width = `${product.rating * 20}px`;
        ratingBar.title = `${product.name}: ${product.rating} stars`;
        ratingBarsContainer.appendChild(ratingBar);
    });
}

function sortProductsByPrice() {
    products.sort((a, b) => a.price - b.price);
    updateGraphs();
}

function sortProductsByRating() {
    products.sort((a, b) => a.rating - b.rating);
    updateGraphs();
}


function clearInputs() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-rating').value = '';
}
