import axios from "axios";

const axiosDulce = axios.create({
  baseURL: `${
    process.env.NODE_ENV === "production"
      ? import.meta.env.VITE_BACKEND
      : import.meta.env.VITE_BACKEND_DEV
  }`,
});

export default axiosDulce;
