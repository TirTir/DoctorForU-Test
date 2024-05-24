import axios from "axios";
// import { getItem } from "@sessionStorage";

//임시 URL
const BASE_URL = "http://localhost:8080";

const axiosAPI = (url = BASE_URL, options = {}) => {
  options.headers = options.headers || {};
  const instance = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  return instance;
};

// const axiosAuthAPI = (url, options) => {
//   const token = getItem("userInformation");
//   const instance = axios.create({
//     baseURL: url,
//     headers: { Authorization: "Bearer " + token },
//     ...options,
//   });
//   return instance;
// };

export const defaultInstance = axiosAPI(BASE_URL);
// export const authInstance = axiosAuthAPI(BASE_URL);
