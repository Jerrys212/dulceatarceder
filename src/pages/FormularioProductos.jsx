import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  inputSX,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  Select,
} from "../exports/index.js";
import { convertirCadena } from "../helpers/convertirCadena.js";

import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axiosDulce from "../helpers/dulceAxios.js";

const FormularioProductos = () => {
  const [producto, setProducto] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    descripcion: "",
  });
  const [categorias, setCategorias] = useState([]);
  const [spinner, setSpinner] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpinner(true);

    try {
      const { data } = await axiosDulce.post("/agregarProducto", producto);
      setSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeproducto = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "80px" }}>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
          padding: "50px", // Espacio interior para el Box
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          sx={{
            fontSize: "28px",
            marginBottom: "16px",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Producto
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre"
              name="nombre"
              value={producto.nombre}
              onChange={handleChangeproducto}
              fullWidth
              sx={inputSX}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={inputSX}>
              <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={producto.categoria}
                label="Categoria"
                name="categoria"
                onChange={handleChangeproducto}
              >
                {categorias.map(({ categoria }, i) => (
                  <MenuItem value={categoria} key={i}>
                    {convertirCadena(categoria)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descripcion"
              name="descripcion"
              value={producto.descripcion}
              onChange={handleChangeproducto}
              fullWidth
              sx={inputSX}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Precio"
              name="precio"
              value={producto.precio}
              onChange={handleChangeproducto}
              fullWidth
              sx={inputSX}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#f4b1bb",
              "&:hover": { backgroundColor: "#f4b1bb" },
            }}
          >
            Guardar
          </Button>
        </Box>

        <Spinner spinnerToggle={spinner} />
      </Box>
    </Container>
  );
};

export default FormularioProductos;
