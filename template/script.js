const products = [
    {
        id: 1,
        name: "Wireless Noise-Cancelling Headphones",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 199.50,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    },
    {
        id: 3,
        name: "Premium Mechanical Keyboard",
        price: 149.00,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80"
    },
    {
        id: 4,
        name: "Ultra-Slim Laptop Stand",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80"
    }
];

let cartCount = 0;

function renderProducts() {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(event)">Add to Cart</button>
        `;
        
        productList.appendChild(card);
    });
}

function addToCart(event) {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    
    // Simple visual feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = "Added!";
    btn.style.backgroundColor = "#10b981"; // green
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = "";
    }, 1000);
}

// Initialize
document.addEventListener('DOMContentLoaded', renderProducts);
