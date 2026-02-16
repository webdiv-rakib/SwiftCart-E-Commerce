console.log('Script loaded');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) {
    const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    countEl.textContent = total;
  }
}

function addToCart(productId) {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(product => {
      const existing = cart.find(item => item.id === product.id);

      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      saveCart();
      updateCartCount();
      alert(`Added: ${product.title}`);
    })
    .catch(err => {
      console.error(err);
      alert('Failed to add item');
    });
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
  showCart(); // refresh modal
}

function changeQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = Math.max(1, (item.quantity || 1) + delta);
    saveCart();
    updateCartCount();
    showCart(); // refresh modal
  }
}

function clearCart() {
  if (confirm("Clear entire cart?")) {
    cart = [];
    saveCart();
    updateCartCount();
    showCart();
  }
}

function showCart() {
  const modal = document.getElementById('cart-modal');
  const itemsContainer = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');

  if (!modal || !itemsContainer || !totalEl) return;

  itemsContainer.innerHTML = '';

  if (cart.length === 0) {
    itemsContainer.innerHTML = '<p class="text-center py-8 text-lg">Your cart is empty.</p>';
    totalEl.textContent = '$0.00';
  } else {
    let total = 0;

    cart.forEach(item => {
      const price = item.price * (item.quantity || 1);
      total += price;

      const div = document.createElement('div');
      div.className = 'flex items-center gap-4 border-b pb-4 last:border-b-0';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="w-20 h-20 object-contain rounded" />
        <div class="flex-1">
          <h4 class="font-semibold line-clamp-2">${item.title}</h4>
          <p class="text-sm text-base-content/70">$${item.price.toFixed(2)}</p>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="changeQuantity(${item.id}, -1)" class="btn btn-sm btn-outline">-</button>
          <span class="text-lg font-medium w-8 text-center">${item.quantity || 1}</span>
          <button onclick="changeQuantity(${item.id}, 1)" class="btn btn-sm btn-outline">+</button>
        </div>
        <div class="text-lg font-bold min-w-[80px] text-right">$${price.toFixed(2)}</div>
        <button onclick="removeFromCart(${item.id})" class="btn btn-sm btn-error btn-outline">Remove</button>
      `;
      itemsContainer.appendChild(div);
    });

    totalEl.textContent = `$${total.toFixed(2)}`;
  }

  modal.showModal();
}

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQuantity = changeQuantity;
window.clearCart = clearCart;

document.addEventListener('DOMContentLoaded', updateCartCount);