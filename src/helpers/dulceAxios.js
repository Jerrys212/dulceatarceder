import axios from "axios";
const axiosDulce = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND}`,
});

export default axiosDulce;
