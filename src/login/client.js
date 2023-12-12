import axios from "axios";

// export const BASE_API = "https://foodfinder-node-server-app.onrender.com";
export const BASE_API = "http://localhost:4000";
const USERS_API = `${BASE_API}/api/users`;

const request = axios.create({
  withCredentials: true,
});

export const signin = async (credentials) => {
  const response = await request.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

export const signup = async (credentials) => {
  const response = await request.post(`${USERS_API}/signup`, credentials);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};

export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  return response.data;
};
