const cartProducts = document.querySelector('.cart__products');
const basket = document.querySelector('.cart__title')
let arrId = [];

document.addEventListener('click', (e) => {
  const target = e.target;
  const countProducts = e.target.parentElement.querySelector('.product__quantity-value');

  if (e.target.classList.contains('product__quantity-control_inc')) {
    countProducts.textContent =  parseInt(countProducts.textContent) + 1;
  }

  if (e.target.classList.contains('product__quantity-control_dec') && parseInt(countProducts.textContent) > 1) {
    countProducts.textContent =  parseInt(countProducts.textContent) - 1;
  }
})

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('product__add')) {
    e.preventDefault();

    const product = e.target.closest('.product');
    const productId = product.dataset.id;
    const productValue = parseInt(product.querySelector('.product__quantity-value').textContent);
    const img = product.querySelector('img').src;
    const existCart = document.querySelector(`.cart__product[data-id="${productId}"]`)

    if (existCart) {
      const countBasket = existCart.querySelector(`.cart__product-count`);
      countBasket.textContent = parseInt(countBasket.textContent) + productValue;
    }
    else {
      const cart = document.createElement('div');

      cart.className = 'cart__product'
      cart.dataset.id = productId;

      cart.innerHTML = `
        <img src=${img} alt="" class="product__image">
        <div class="cart__product-count">${productValue}</div>
        <img src="1485477104-basket_78591.png" alt="" class="cart__picture-basket">
      `;

    cartProducts.appendChild(cart);
    arrId.push(productId);
      if (arrId.length > 0) {
        basket.classList.add('cart__title_active');
      }
    }
  }
})

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('cart__picture-basket')) {
    const product = e.target.closest('.cart__product');
    const productId = product.dataset.id;
    arrId = arrId.filter(item => item !== productId);
    if (arrId.length === 0) {
      basket.classList.remove('cart__title_active');
    }
    product.remove();
  }
})