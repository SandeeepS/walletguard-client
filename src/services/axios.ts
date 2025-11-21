import axios, { type AxiosInstance } from "axios";

const Api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_PROD,
  withCredentials: true,
});
export default Api;
