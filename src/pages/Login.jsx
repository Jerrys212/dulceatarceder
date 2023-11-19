import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  inputSX,
} from "../exports/index.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../components/Spinner";
import useAuth from "../hooks/useAuth";
import axiosDulce from "../helpers/dulceAxios.js";
import Snack from "../components/Snack.jsx";

const Login = () => {
  const navigate = useNavigate();

  const { setAuth, cargando, setCargando } = useAuth();
  const [snackbar, setSnackbar] = useState({
    flag: false,
    message: "",
    tipo: "success",
  });

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ flag: false, message: "", tipo: "success" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);

    try {
      const { data } = await axiosDulce.post("/autenticar", {
        usuario,
        password,
      });

      localStorage.setItem("token", data.token);
      setAuth(data);
      setTimeout(() => {
        setCargando(false);
        navigate("/admin");
      }, 1500);
    } catch (error) {
      setCargando(false);
      setSnackbar({
        flag: true,
        message: error.response.data.replyText,
        tipo: "error",
      });
      console.log(error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "80px" }}>
      <Box
        component="form"
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
          padding: "50px", // Espacio interior para el Box
        }}
        noValidate
        onSubmit={handleSubmit}
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
          Inicia Sesión
        </Typography>
        <TextField
          id="outlined-basic-1"
          label="Usuario"
          variant="outlined"
          fullWidth
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          sx={inputSX}
        />
        <TextField
          id="filled-password-input"
          label="Contraseña"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={inputSX}
        />
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
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
            Iniciar Sesión
          </Button>
        </Box>
        <Spinner spinnerToggle={cargando} />
        <Snack snackbar={snackbar} handleCloseSnackbar={handleCloseSnackbar} />
      </Box>
    </Container>
  );
};

export default Login;
