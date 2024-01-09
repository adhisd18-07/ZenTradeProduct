fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
  .then(response => response.json())
  .then(data => {
    const products = Object.values(data.products);

    products.sort((a, b) => parseInt(b.popularity) - parseInt(a.popularity));

    const productsListDiv = document.getElementById('productsList');

    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
        <p>Popularity: ${product.popularity}</p>
      `;
      productsListDiv.appendChild(productDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
