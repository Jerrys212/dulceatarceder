import axios from "axios";

const axiosDulce = axios.create({
  baseURL: `${
    process.env.NODE_ENV === "production"
      ? import.meta.env.VITE_BACKEND
      : "http://localhost:4000/dulce"
  }`,
});

export default axiosDulce;
