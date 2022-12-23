// Create a function to add an item to the shopping cart
function addToCart(item) {
    // Check if the shopping cart already exists in the browser's local storage
    let cart = localStorage.getItem('cart');
  
    // If the shopping cart doesn't exist, create an empty array
    if (cart === null) {
      cart = [];
    }
    // Otherwise, parse the existing shopping cart from JSON
    else {
      cart = JSON.parse(cart);
    }
  
    // Add the new item to the shopping cart
    cart.push(item);
  
    // Save the updated shopping cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Add event listeners to the "Buy now" buttons on the product pages
  document.querySelectorAll('button[type="submit"]').forEach(button => {
    button.addEventListener('click', event => {
      // Prevent the form from submitting
      event.preventDefault();
  
      // Get the product name and price from the page
      const productName = document.querySelector('h2').textContent;
      const productPrice = document.querySelector('strong').textContent;
  
      // Create an object to represent the item being added to the cart
      const item = {
        name: productName,
        price: productPrice,
      };
  
      // Add the item to the shopping cart
      addToCart(item);
    });
  });
  