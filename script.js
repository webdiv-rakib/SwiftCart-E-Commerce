console.log('Script loaded');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = cart.length;
}

updateCartCount();