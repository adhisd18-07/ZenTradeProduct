const apiUrl = 'https://s3.amazonaws.com/open-to-cors/assignment.json';

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.products.map(product => product.product);
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    products
        .sort((a, b) => b.popularity - a.popularity)
        .forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h2>${product.title}</h2>
                <p>Price: ${product.price}</p>
            `;
            container.appendChild(productDiv);
        });
}

fetchProducts().then(displayProducts);
