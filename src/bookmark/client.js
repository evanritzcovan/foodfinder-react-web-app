import axios from "axios";

const USERS_API = `${process.env.REACT_APP_API_URL}/api/users`;
const BOOKMARKS_API = `${process.env.REACT_APP_API_URL}/api/users/bookmarks`;
const request = axios.create({
    withCredentials: true,
});
  
export const findAllBookmarks = async () => {};
export const createUserBookmarksRestaurant = async (userId, restaurantId) => {
    const response = await request.post(`${USERS_API}/${userId}/bookmarks/${restaurantId}`);
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
    const response = await request.get(`${BOOKMARKS_API}/${userId}`);
    return response.data;
};