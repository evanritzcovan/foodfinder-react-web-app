import axios from "axios";

// export const BASE_API = "https://foodfinder-node-server-app.onrender.com";
export const BASE_API = "http://localhost:4000";
export const RESTAURANT_API = `${BASE_API}/api/restaurant`;

export const findRestaurantById = async (restaurantId) => {
  const response = await axios.get(`${RESTAURANT_API}/${restaurantId}`);
  return response.data;
};
