/**
 * ProductCard Component
 * Accepts: product data object { id, name, category, price, originalPrice,
 *           rating, reviewCount, image, imageAlt, badge, description }
 *          onAddToCart (function) — called with product data when button clicked
 * Returns: a DOM element (product card) with favorite/like toggle
 * Reusable — no global state, re-renders on data change via returned element
 */

import StarRating from './StarRating.js';

function ProductCard(product, onAddToCart) {
  // --- local like state ---
  var liked = false;
  var likeCount = product.likeCount || 0;

  // --- build card ---
  var card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-id', product.id);

  // price HTML
  var priceHTML;
  if (product.originalPrice) {
    priceHTML =
      '<span class="product-price">$' + product.price +
      ' <span class="product-price-original">$' + product.originalPrice + '</span></span>';
  } else {
    priceHTML = '<span class="product-price">$' + product.price + '</span>';
  }

  // badge HTML
  var badgeHTML = product.badge
    ? '<span class="product-badge badge-sale">' + product.badge + '</span>'
    : '';

  card.innerHTML =
    '<img src="' + product.image + '" alt="' + product.imageAlt + '" class="product-card-img" width="300" height="300" />' +
    '<div class="product-card-body">' +
      '<span class="product-card-category">' + product.category + '</span>' +
      '<h3><a href="product-detail.html">' + product.name + '</a></h3>' +
      '<p class="product-card-desc">' + product.description + '</p>' +
      '<div class="product-card-footer">' +
        priceHTML +
        badgeHTML +
      '</div>' +
      '<div class="product-card-actions">' +
        '<button class="btn-favorite" aria-label="Хадгалах" aria-pressed="false">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>' +
          '<span class="like-count">' + likeCount + '</span>' +
        '</button>' +
        '<button class="btn btn-sm btn-primary btn-add-cart">Сагсанд нэмэх</button>' +
      '</div>' +
    '</div>';

  // append star rating (component)
  var starEl = StarRating(product.rating, product.reviewCount);
  var body = card.querySelector('.product-card-body');
  body.insertBefore(starEl, card.querySelector('.product-card-actions'));

  // --- like toggle logic ---
  var favBtn    = card.querySelector('.btn-favorite');
  var countSpan = card.querySelector('.like-count');

  favBtn.addEventListener('click', function () {
    liked = !liked;
    likeCount = liked ? likeCount + 1 : likeCount - 1;
    countSpan.textContent = likeCount;
    favBtn.setAttribute('aria-pressed', String(liked));
    favBtn.classList.toggle('active', liked);
  });

  // --- add to cart ---
  var cartBtn = card.querySelector('.btn-add-cart');
  cartBtn.addEventListener('click', function () {
    if (typeof onAddToCart === 'function') onAddToCart(product);
  });

  return card;
}

export default ProductCard;
