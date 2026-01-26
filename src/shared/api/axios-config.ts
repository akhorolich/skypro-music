import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use(async (config) => {
//   return config;
// });
