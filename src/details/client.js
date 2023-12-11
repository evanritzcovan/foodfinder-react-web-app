import axios from "axios";
export const BASE_API = "https://foodfinder-node-server-app.onrender.com";
export const RESTAURANT_API = `${BASE_API}/api/restaurant`;

// Yelp API call to find restaurant using restaurantId in Yelp.
export const findRestaurantById = async (restaurantId) => {
    console.log("RestaurantId:", restaurantId);
    const response = await axios.get(
        `${RESTAURANT_API}/${restaurantId}`,
        // searchConditions
    );
    return response.data;
};
