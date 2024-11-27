import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
  headers: {
    "Content-Type": "application/json",
  }
});

axiosInstance.interceptors.response.use(
  (response) => {console.log("Response:", response); return response},
  (error) => {console.log("Error:", error); return Promise.reject(error)}
);

export default axiosInstance;