import { createContext, useEffect, useState } from "react";
import axiosDulce from "../helpers/dulceAxios";

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const [snackbar, setSnackbar] = useState({ flag: false, message: "" });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ flag: false, message: "" });
  };

  const [producto, setProducto] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    descripcion: "",
  });

  const handleChangeproducto = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const { data } = await axiosDulce("/obtenerCategorias");
        setCategorias(data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerCategorias();
  }, []);

  const eliminarProducto = async (id) => {
    try {
      const { data } = await axiosDulce.delete(`/borrarProducto/${id}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductosContext.Provider
      value={{
        categorias,
        producto,
        handleChangeproducto,
        setSpinner,
        eliminarProducto,
        snackbar,
        setSnackbar,
        spinner,
        handleCloseSnackbar,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export { ProductosProvider };
export default ProductosContext;
