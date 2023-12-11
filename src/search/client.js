import axios from "axios";
// import express from "express";
export const BASE_API = "http://localhost:4000";
export const RESTAURANTS_API = `${BASE_API}/api/restaurants`;

// Yelp API call to find restaurants based on two inputs (food and location).
export const findRestaurants = async (searchConditions) => {
    console.log("Search-Food:", searchConditions.food);
    console.log("Search-Location:", searchConditions.location);
    const response = await axios.get(
        `${RESTAURANTS_API}/search/${searchConditions.food}/${searchConditions.location}`,
        searchConditions
    );
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

export const updateRestaurant = async (restaurant) => {
    const response = await axios.put(`${RESTAURANTS_API}/${restaurant._id}`, restaurant);
    return response.data;
};
