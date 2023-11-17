import { createContext, useEffect, useState } from "react";
import axiosDulce from "../helpers/dulceAxios";
import config from "../helpers/config";

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [productos, setProductos] = useState([]);
  const [snackbar, setSnackbar] = useState({ flag: false, message: "" });
  const [producto, setProducto] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    descripcion: "",
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ flag: false, message: "" });
  };

  const handleChangeproducto = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const { data } = await axiosDulce("/obtenerCategorias", config);
        setCategorias(data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerCategorias();

    const obtenerProductos = async () => {
      try {
        const { data } = await axiosDulce("/obtenerProductos", config);
        setProductos(data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerProductos();
  }, []);

  const eliminarProducto = async (id) => {
    try {
      const { data } = await axiosDulce.delete(`/borrarProducto/${id}`, config);

      const productosActualizados = productos.filter(
        (productostate) => productostate._id !== id
      );
      setProductos(productosActualizados);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProductosContext.Provider
      value={{
        categorias,
        categoria,
        setCategoria,
        producto,
        productos,
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
