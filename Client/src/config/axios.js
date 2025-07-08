import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER_URI, // ✅ fix env variable
  
});

export default axiosInstance;
