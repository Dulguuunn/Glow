/**
 * StarRating Component
 * Accepts: rating (number), reviewCount (number)
 * Returns: a DOM element showing filled/empty stars + count
 * Reusable, no external dependencies
 */
function StarRating(rating, reviewCount) {
  var full  = Math.round(rating);
  var empty = 5 - full;
  var stars = '&#9733;'.repeat(full) + '&#9734;'.repeat(empty);

  var el = document.createElement('div');
  el.className = 'star-rating';
  el.innerHTML =
    '<span class="stars">' + stars + '</span>' +
    '<span class="rating-text">' + rating + ' (' + reviewCount + ')</span>';

  return el;
}

export default StarRating;
