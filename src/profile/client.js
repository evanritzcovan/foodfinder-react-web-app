import axios from "axios";
const request = axios.create({
  withCredentials: true,
});

export const BASE_API = "http://localhost:4000";
console.log(BASE_API);
export const USERS_API = `${BASE_API}/api/users`;
export const signin = async (credentials) => {
  //console.log(request);
  axios.defaults.withCredentials = true
  const response = await axios.post( `${USERS_API}/signin`, credentials );
  return response.data;
};
export const account = async () => {
    axios.defaults.withCredentials = true
    const response = await axios.post(`${USERS_API}/account`);
    console.log(response);
    return response.data;
};
export const updateUser = async (id, user) => {
  const response = await request.put(`${USERS_API}/${id}`, user);
  return response.data;
};
export const findAllUsers = async () => {
  axios.defaults.withCredentials = true
  const response = await axios.get(`${USERS_API}`);
  return response.data;
};
export const createUser = async (user) => {
  axios.defaults.withCredentials = true
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};
export const findUserById = async (id) => {
  axios.defaults.withCredentials = true
  //const response = await axios.get(`${USERS_API}/${id}`);
  console.log("now we are here");
  console.log(`${USERS_API}`);
  console.log(`${USERS_API}/6557fcefa11aca2377083760`);
  const response = await axios.get(`${USERS_API}/6557fcefa11aca2377083760`);
  console.log(response);
  return response.data;
};
export const deleteUser = async (user) => {
  axios.defaults.withCredentials = true
  const response = await axios.delete(
    `${USERS_API}/${user._id}`);
  return response.data;
};
export const signup = async (credentials) => {
  axios.defaults.withCredentials = true
  const response = await axios.post(
    `${USERS_API}/signup`, credentials);
  return response.data;
};
export const signout = async () => {
  axios.defaults.withCredentials = true
  const response = await axios.post(`${USERS_API}/signout`);
  return response.data;
};
