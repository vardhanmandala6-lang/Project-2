/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f9f5;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navbar {
    background-color: #2d6a4f;
    color: white;
    padding: 1rem 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
    color: #95d5b2;
}

/* Hero Section */
.hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 4rem 0;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 20px;
}

.hero-content h1 {
    font-size: 3rem;
    color: #2d6a4f;
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #555;
}

.hero-image img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
    text-align: center;
}

.btn-primary {
    background-color: #2d6a4f;
    color: white;
}

.btn-primary:hover {
    background-color: #1b4332;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(45, 106, 79, 0.3);
}

.btn-secondary {
    background-color: #95d5b2;
    color: #1b4332;
}

.btn-secondary:hover {
    background-color: #74c69d;
}

.btn-full {
    width: 100%;
    margin-top: 10px;
}

/* Features Section */
.features {
    padding: 4rem 0;
    background-color: white;
}

.features .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.feature-box {
    text-align: center;
    padding: 2rem;
    border-radius: 15px;
    background-color: #f5f9f5;
    transition: transform 0.3s;
}

.feature-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.feature-box h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #2d6a4f;
}

/* Products Section */
.products-section {
    padding: 3rem 0;
    min-height: 70vh;
}

.products-section h1 {
    text-align: center;
    color: #2d6a4f;
    margin-bottom: 2rem;
}

/* Filter Section */
.filter-section {
    margin-bottom: 2rem;
}

.search-input {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid #95d5b2;
    border-radius: 25px;
    font-size: 1rem;
    margin-bottom: 1rem;
}

.search-input:focus {
    outline: none;
    border-color: #2d6a4f;
}

.category-filters {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
}

.filter-btn {
    padding: 10px 20px;
    border: 2px solid #2d6a4f;
    background-color: white;
    color: #2d6a4f;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
}

.filter-btn:hover,
.filter-btn.active {
    background-color: #2d6a4f;
    color: white;
}

/* Products Grid */
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.product-card {
    background: white;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    text-align: center;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.product-card h3 {
    color: #2d6a4f;
    margin-bottom: 0.5rem;
}

.product-card .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1b4332;
    margin-bottom: 1rem;
}

.btn-cart {
    width: 100%;
    padding: 10px;
    background-color: #2d6a4f;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
}

.btn-cart:hover {
    background-color: #1b4332;
}

/* Cart Section */
.cart-section {
    padding: 3rem 0;
    min-height: 70vh;
}

.cart-section h1 {
    text-align: center;
    color: #2d6a4f;
    margin-bottom: 2rem;
}

.empty-cart {
    text-align: center;
    padding: 4rem 0;
}

.empty-cart p {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 2rem;
}

.cart-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
}

.cart-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.cart-item {
    display: grid;
    grid-template-columns: 100px 1fr auto auto;
    gap: 1rem;
    background: white;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    align-items: center;
}

.cart-item img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
}

.cart-item-info h3 {
    color: #2d6a4f;
    margin-bottom: 0.5rem;
}

.cart-item-price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #1b4332;
}

.remove-btn {
    padding: 8px 16px;
    background-color: #dc2626;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
}

.remove-btn:hover {
    background-color: #b91c1c;
}

.cart-summary {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    height: fit-content;
    position: sticky;
    top: 100px;
}

.cart-summary h2 {
    color: #2d6a4f;
    margin-bottom: 1rem;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e5e5e5;
}

.summary-row.total {
    font-size: 1.3rem;
    font-weight: bold;
    color: #1b4332;
    border-bottom: none;
    margin-top: 1rem;
}

.cart-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 1.5rem;
}

/* Checkout Section */
.checkout-section {
    padding: 3rem 0;
    min-height: 70vh;
}

.checkout-section h1 {
    text-align: center;
    color: #2d6a4f;
    margin-bottom: 2rem;
}

.checkout-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.order-summary-checkout {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    height: fit-content;
}

.order-summary-checkout h2 {
    color: #2d6a4f;
    margin-bottom: 1rem;
}

.checkout-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
    max-height: 400px;
    overflow-y: auto;
}

.checkout-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #e5e5e5;
}

.checkout-total {
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    font-weight: bold;
    color: #1b4332;
    padding-top: 1rem;
    border-top: 2px solid #2d6a4f;
}

.checkout-form {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.checkout-form h2 {
    color: #2d6a4f;
    margin-bottom: 1rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #2d6a4f;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 10px;
    border: 2px solid #95d5b2;
    border-radius: 8px;
    font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: #2d6a4f;
}

.payment-methods {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.payment-option {
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 2px solid #95d5b2;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.payment-option:hover {
    border-color: #2d6a4f;
    background-color: #f5f9f5;
}

.payment-option input[type="radio"] {
    margin-right: 10px;
    width: auto;
}

.payment-option span {
    font-weight: 600;
}

/* Thank You Section */
.thankyou-section {
    padding: 4rem 0;
    min-height: 70vh;
    display: flex;
    align-items: center;
}

.thankyou-content {
    text-align: center;
    background: white;
    padding: 4rem 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    max-width: 600px;
    margin: 0 auto;
}

.success-icon {
    width: 100px;
    height: 100px;
    background-color: #2d6a4f;
    color: white;
    font-size: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
}

.thankyou-content h1 {
    color: #2d6a4f;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.success-message {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
}

.delivery-message {
    font-size: 1.1rem;
    color: #2d6a4f;
    margin-bottom: 2rem;
}

.order-info {
    background-color: #f5f9f5;
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 2rem;
}

.order-info p {
    margin: 0.5rem 0;
}

.thankyou-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

/* WhatsApp Floating Button */
.whatsapp-float {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background-color: #25d366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    z-index: 1000;
    transition: transform 0.3s;
}

.whatsapp-float:hover {
    transform: scale(1.1);
}

.whatsapp-float img {
    width: 35px;
    height: 35px;
    filter: brightness(0) invert(1);
}

/* Footer */
footer {
    background-color: #1b4332;
    color: white;
    padding: 2rem 0;
    margin-top: 3rem;
}

footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-links {
    display: flex;
    gap: 2rem;
}

.footer-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: #95d5b2;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    .nav-links {
        gap: 1rem;
    }

    .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }

    .cart-content,
    .checkout-container {
        grid-template-columns: 1fr;
    }

    .cart-item {
        grid-template-columns: 80px 1fr;
        gap: 0.5rem;
    }

    .cart-item-price,
    .remove-btn {
        grid-column: 2;
    }

    .thankyou-actions {
        flex-direction: column;
    }

    footer .container {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
}
