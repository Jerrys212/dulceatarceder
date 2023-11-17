import { useState, useEffect, createContext } from "react";
import axiosDulce from "../helpers/dulceAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [cargando, setCargando] = useState(true);
  const [auth, setAuth] = useState({});
  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setCargando(false);
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await axiosDulce("/perfil", config);
        console.log(data);
        setAuth(data);
      } catch (error) {
        console.log(error);
        setAuth({});
      }

      setCargando(false);
    };
    autenticarUsuario();
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    setAuth({});
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, cargando, setCargando, cerrarSesion }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
