import axios from 'axios';

const baseURL = process.env.API;

export const axiosInstance = axios.create({
  baseURL: 'https://webdev-music-003b5b991590.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });
