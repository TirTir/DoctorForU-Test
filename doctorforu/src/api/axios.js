import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 40000,
  withCredentials: true
});

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };