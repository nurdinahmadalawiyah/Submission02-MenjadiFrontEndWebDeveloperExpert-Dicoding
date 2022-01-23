import CONFIG from '../../globals/config';

function categoriesRestaurant(restaurant) {
  return restaurant.categories.map((category) => `
  <li>${category.name}</li>
  `).join('');
}

function foodsRestaurant(restaurant) {
  return restaurant.menus.foods.map((food) => `
  <li>${food.name}</li>
  `).join('');
}

function drinksRestaurant(restaurant) {
  return restaurant.menus.drinks.map((drink) => `
  <li>${drink.name}</li>
  `).join('');
}

function customerReviews(restaurant) {
  return restaurant.customerReviews.map((reviews) => `
  <li class="review">
    <div class="name-review">${reviews.name}</div>
    <div class="description-review">" ${reviews.review} "</div>
    <div class="date-review">${reviews.date}</div>
  </li>
  `).join('');
}

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
    <div class="restaurant-item-detail">
        <h1 class="restaurant-item-title-detail">${restaurant.name}</h1>
        <img class="restaurant-item-thumbnail-detail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
    </div>
    <div class="restaurant-info">
        <h2 class="restaurant-label">Restaurant Name</h2>
        <h3 class="restaurant-text">${restaurant.name}</h3>
        <h2 class="restaurant-label">Address</h2>
        <h3 class="restaurant-text">${restaurant.address}, ${restaurant.city}</h3>
        <h2 class="restaurant-label">Rating</h2>
        <h3 class="restaurant-text"> ⭐️ ${restaurant.rating}</h3>
        <h2 class="restaurant-label">Description</h2>
        <p class="restaurant-item-description-detail">${restaurant.description}</p>
    </div>
    <div class="restaurant-menu">
        <h2 class="restaurant-label">Categories</h2>
        <ul class="chips"> ${categoriesRestaurant(restaurant)}</ul>
        <h2 class="restaurant-label">Foods Menu</h2>
        <ul class="chips"> ${foodsRestaurant(restaurant)}</ul>
        <h2 class="restaurant-label">Drinks Menu</h2>
        <ul class="chips"> ${drinksRestaurant(restaurant)}</ul>
    </div>
    <div class="restaurant-review">
        <h2 class="restaurant-label">Customer Reviews</h2>
        <ul class="review-boxs"> ${customerReviews(restaurant)}</ul>
    </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
    <img class="restaurant-item-thumbnail"
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="${restaurant.name}">
    <div class="restaurant-item-location">${restaurant.city}</div>
    <div class="restaurant-item-content">
        <p class="restaurant-item-rating">Rating : <p class="restaurant-item-rating-star"> ⭐️ ${restaurant.rating}</p>
        </p>
        <h1 class="restaurant-item-title">${restaurant.name}</h1>
        <p class="restaurant-item-description">${restaurant.description}</p>
        <button class="restaurant-item-button" aria-label="${restaurant.name}"
        onClick="window.location.href='${`/#/detail/${restaurant.id}`}'"><p>Check Detail</p></button>
    </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
