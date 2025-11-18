// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // If on cart page, display cart items
    if (document.getElementById('cart-items')) {
        displayCart();
    }
    
    // If on checkout page, display checkout items
    if (document.getElementById('checkout-items')) {
        displayCheckout();
    }
    
    // Setup search functionality
    if (document.getElementById('search-bar')) {
        setupSearch();
    }
    
    // Setup category filters
    if (document.querySelectorAll('.filter-btn').length > 0) {
        setupFilters();
    }
    
    // Setup payment form
    if (document.getElementById('payment-form')) {
        setupPaymentForm();
    }
});

// Add to Cart Function
function addToCart(name, price, image) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show alert
    alert(`${name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// Display Cart Items
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartContent = document.getElementById('cart-content');
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartContent.style.display = 'none';
        return;
    }
    
    emptyCart.style.display = 'none';
    cartContent.style.display = 'block';
    
    cartItemsContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="cart-item-price">₹${item.price * item.quantity}</div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    updateCartTotal();
}

// Remove Item from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

// Clear Entire Cart
function clearCart() {
    if (confirm('Are you sure you want to clear the entire cart?')) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCart();
    }
}

// Update Cart Total
function updateCartTotal() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-price').textContent = `₹${totalPrice}`;
}

// Display Checkout Items
function displayCheckout() {
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');
    
    if (cart.length === 0) {
        checkoutItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
        checkoutTotal.textContent = '₹0';
        return;
    }
    
    checkoutItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const checkoutItem = document.createElement('div');
        checkoutItem.className = 'checkout-item';
        checkoutItem.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>₹${item.price * item.quantity}</span>
        `;
        checkoutItemsContainer.appendChild(checkoutItem);
    });
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = `₹${totalPrice}`;
}

// Setup Search Functionality
function setupSearch() {
    const searchBar = document.getElementById('search-bar');
    const productCards = document.querySelectorAll('.product-card');
    
    searchBar.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        productCards.forEach(card => {
            const productName = card.getAttribute('data-name').toLowerCase();
            
            if (productName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Setup Category Filters
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Setup Payment Form
function setupPaymentForm() {
    const paymentForm = document.getElementById('payment-form');
    
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('customer-name').value;
        const mobile = document.getElementById('customer-mobile').value;
        const address = document.getElementById('customer-address').value;
        const area = document.getElementById('delivery-area').value;
        const payment = document.querySelector('input[name="payment"]:checked').value;
        
        // Validate
        if (!name || !mobile || !address || !area || !payment) {
            alert('Please fill all required fields!');
            return;
        }
        
        // Validate mobile number
        if (mobile.length !== 10 || isNaN(mobile)) {
            alert('Please enter a valid 10-digit mobile number!');
            return;
        }
        
        // Clear cart after successful order
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Redirect to thank you page
        window.location.href = 'thankyou.html';
    });
}
