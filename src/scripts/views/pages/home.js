import '../components/Hero';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <hero-header> </hero-header>
    <div class="list">
      <h1 class="list-label">Daftar Restoran</h1><hr>
        <div id="restaurant" class="restaurant"></div>
      </div>
      `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default Home;
