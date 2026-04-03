/*
StarRating Component
Accepts: rating (number), reviewCount (number)
Returns: a DOM element showing filled/empty stars + count
Reusable, no external dependencies
*/
function StarRating(rating, reviewCount) {
  const full  = Math.round(rating);
  const empty = 5 - full;
  const stars = '&#9733;'.repeat(full) + '&#9734;'.repeat(empty);

  const el = document.createElement('div');
  el.className = 'star-rating';
  el.innerHTML =
    '<span class="stars">' + stars + '</span>' +
    '<span class="rating-text">' + rating + ' (' + reviewCount + ')</span>';

  return el;
}

export default StarRating;
