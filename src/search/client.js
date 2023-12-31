import axios from "axios";

export const BASE_API = "https://foodfinder-node-server-app.onrender.com";
export const RESTAURANTS_API = `${BASE_API}/api/restaurants`;

export const findRestaurants = async (searchConditions) => {
  const response = await axios.get(`${RESTAURANTS_API}/search/${searchConditions.food}/${searchConditions.location}`, searchConditions);
  return response.data;
};

export const createRestaurant = async (restaurant) => {
  const response = await axios.post(`${RESTAURANTS_API}`, restaurant);
  return response.data;
};

export const deleteRestaurant = async (restaurant) => {
  const response = await axios.delete(`${RESTAURANTS_API}/${restaurant._id}`);
  return response.data;
};

export const findRestaurantById = async (restaurantId) => {
  const response = await axios.get(`${RESTAURANTS_API}/${restaurantId}`);
  return response.data;
};

export const findRestaurantByYelpId = async (restaurantYelpId) => {
  const response = await axios.get(`${RESTAURANTS_API}/yelpId/${restaurantYelpId}`);
  return response.data;
};

export const updateRestaurant = async (restaurant) => {
  const response = await axios.put(`${RESTAURANTS_API}/${restaurant._id}`, restaurant);
  return response.data;
};
