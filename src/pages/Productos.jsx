import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  DeleteIcon,
  EditNoteIcon,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "../exports/index";
// import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Productos = () => {
  const [age, setAge] = useState("");

  const [backdrop, setBackdrop] = useState(false);

  // const navigate = useNavigate();
  const inputSX = {
    marginBottom: "12px",
    color: "#f4b1bb",
    "& label.Mui-focused": {
      color: "#f4b1bb",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#f4b1bb",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f4b1bb",
      },
      "&:hover fieldset": {
        borderColor: "#f4b1bb",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f4b1bb",
      },
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "5px",
        width: "100%",
      }}
      variant={"Paper"}
      elevation={10}
    >
      <FormControl fullWidth sx={inputSX}>
        <InputLabel id="demo-simple-select-label">Producto</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Producto"
          onChange={(e) => {
            setAge(e.target.value);
            setBackdrop(true);
            setTimeout(() => {
              setBackdrop(false);
            }, 1500);
          }}
        >
          <MenuItem value={10}>Waffles</MenuItem>
          <MenuItem value={20}>Crepas</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" height="300" image={"/crepas.jpg"} />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "10px" }}
              >
                Waffle Platano
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Queso Philadephia, Nutella y Platano.
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<EditNoteIcon />}
                  sx={{
                    backgroundColor: "#f4b1bb",
                    "&:hover": { backgroundColor: "#f4b1bb" },
                  }}
                >
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  endIcon={<DeleteIcon />}
                  sx={{
                    backgroundColor: "#f4b1bb",
                    "&:hover": { backgroundColor: "#f4b1bb" },
                  }}
                >
                  Eliminar
                </Button>
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" height="300" image={"/waffles.jpg"} />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "10px" }}
              >
                Waffle Platano
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Queso Philadephia, Nutella y Platano.
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<EditNoteIcon />}
                  sx={{
                    backgroundColor: "#f4b1bb",
                    "&:hover": { backgroundColor: "#f4b1bb" },
                  }}
                >
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  endIcon={<DeleteIcon />}
                  sx={{
                    backgroundColor: "#f4b1bb",
                    "&:hover": { backgroundColor: "#f4b1bb" },
                  }}
                >
                  Eliminar
                </Button>
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" height="300" image={"/crepas.jpg"} />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "10px" }}
              >
                Waffle Platano
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Queso Philadephia, Nutella y Platano.
              </Typography>
            </CardContent>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<EditNoteIcon />}
                  sx={{
                    backgroundColor: "#f4b1bb",
                    "&:hover": { backgroundColor: "#f4b1bb" },
                  }}
                >
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  endIcon={<DeleteIcon />}
                  sx={{
                    backgroundColor: "#f4b1bb",
                    "&:hover": { backgroundColor: "#f4b1bb" },
                  }}
                >
                  Eliminar
                </Button>
              </Stack>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Spinner spinnerToggle={backdrop} />
    </Box>
  );
};

export default Productos;
