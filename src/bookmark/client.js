import axios from "axios";

// export const BASE_API = "https://foodfinder-node-server-app.onrender.com";
export const BASE_API = "http://localhost:4000";
export const USERS_API = `${BASE_API}/api/users`;
export const BOOKMARKS_API = `${BASE_API}/api/bookmarks`;

const request = axios.create({
  withCredentials: true,
});

export const findAllBookmarks = async () => {};

export const createUserBookmarksRestaurant = async (userId, restaurantId, restaurantName) => {
  const response = await request.post(`${USERS_API}/${userId}/bookmarks/${restaurantId}/${restaurantName}`);
  return response.data;
};

export const deleteUserBookmarksRestaurant = async (userId, restaurantId) => {
  const response = await request.delete(`${USERS_API}/${userId}/bookmarks/${restaurantId}`);
  return response.data;
};

export const findUsersThatBookmarkRestaurant = async (restaurantId) => {
  const response = await request.get(`${BOOKMARKS_API}/${restaurantId}/users`);
  return response.data;
};

export const findRestaurantsThatUserBookmarks = async (userId) => {
  const response = await request.get(`${USERS_API}/${userId}/bookmarks`);
  return response.data;
};
