import ProductCard from './components/ProductCard.js';

// Product constructor — holds data only, delegates rendering to ProductCard component
function Product(data) {
  this.id            = data.id;
  this.name          = data.name;
  this.category      = data.category;
  this.skinType      = data.skinType;
  this.price         = data.price;
  this.originalPrice = data.originalPrice || null;
  this.rating        = data.rating;
  this.reviewCount   = data.reviewCount;
  this.image         = data.image;
  this.imageAlt      = data.imageAlt;
  this.badge         = data.badge || null;
  this.description   = data.description;
  this.likeCount     = data.likeCount || 0;
}

// Delegate rendering to the reusable ProductCard component
// onAddToCart is optional callback
Product.prototype.render = function (onAddToCart) {
  return ProductCard(this, onAddToCart);
};

export default Product;
