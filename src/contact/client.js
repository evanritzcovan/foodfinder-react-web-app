import axios from "axios";

// export const BASE_API = "https://foodfinder-node-server-app.onrender.com";
export const BASE_API = 'http://localhost:4000';
const CONTACT_API = `${BASE_API}/api/contact`;

const request = axios.create({
  withCredentials: true,
});

export const createContact = async (contact) => {
  const response = await request.post(CONTACT_API, contact);
  console.log("We have received your message! Thank you!");
  return response.data;
}
