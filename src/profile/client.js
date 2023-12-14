import axios from "axios";

// export const BASE_API = "https://foodfinder-node-server-app.onrender.com";
export const BASE_API = "http://localhost:4000";
export const USERS_API = `${BASE_API}/api/users`;

const request = axios.create({
  withCredentials: true,
});

export const signin = async (credentials) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

export const account = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${USERS_API}/account`);
    return response.data;
};

export const updateUser = async (id, credentials) => {
  const response = await request.put(`${USERS_API}/${id}`, credentials);
  return response.data;
};

export const findAllUsers = async () => {
  axios.defaults.withCredentials = true;
  const response = await axios.get(`${USERS_API}`);
  return response.data;
};

export const createUser = async (user) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};

export const findUserById = async (id) => {
  axios.defaults.withCredentials = true;
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};

export const deleteUser = async (user) => {
  axios.defaults.withCredentials = true;
  const response = await axios.delete(`${USERS_API}/${user._id}`);
  return response.data;
};

export const signup = async (credentials) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(`${USERS_API}/signup`, credentials);
  return response.data;
};

export const signout = async () => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(`${USERS_API}/signout`);
  return response.data;
};
