import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  inputSX,
} from "../exports/index";
// import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

import axiosDulce from "../helpers/dulceAxios";
import Producto from "../components/Producto";
import { Link } from "react-router-dom";
import useProductos from "../hooks/useProductos";
import { convertirCadena } from "../helpers/convertirCadena";

const Productos = () => {
  const {
    categorias,
    spinner,
    productos,
    setSpinner,
    producto,
    handleChangeproducto,
  } = useProductos();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Link to={`/admin/formulario-productos`}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f4b1bb",
              "&:hover": { backgroundColor: "#f4b1bb" },
            }}
          >
            Nuevo Producto
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "5px",
        }}
        variant={"Paper"}
        elevation={10}
      >
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

        <Grid container spacing={2} sx={{ marginTop: "10px" }}>
          {productos.map(({ _id, nombre, descripcion, categoria }, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Producto
                nombre={nombre}
                descripcion={descripcion}
                categoria={categoria}
                id={_id}
              />
            </Grid>
          ))}
        </Grid>
        <Spinner spinnerToggle={spinner} />
      </Box>
    </>
  );
};

export default Productos;
