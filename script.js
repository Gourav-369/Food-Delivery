// JavaScript to handle the modal functionality and "Add to Cart" button
const modal = document.getElementById('signin-modal');
const closeBtn = document.querySelector('.close');
const signinBtn = document.querySelector('.signin-btn .btn');

// Show the modal
signinBtn.onclick = function() {
    modal.style.display = 'flex';
}

// Close the modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Add to Cart functionality
const cart = document.querySelector('#cart p');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cartItems = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItems++;
        cart.textContent = `${cartItems} item(s) in the cart.`;
    });
});