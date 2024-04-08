import axios from "axios";
import { BaseURL } from "../baseUrl/baseUrl";
// import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: BaseURL,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
