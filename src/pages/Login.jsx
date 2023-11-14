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

const Login = () => {
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);

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
          sx={inputSX}
        />
        <TextField
          id="filled-password-input"
          label="Contraseña"
          type="password"
          fullWidth
          variant="outlined"
          sx={inputSX}
        />
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => {
              setSpinner(true);
              setTimeout(() => {
                setSpinner(false);
                navigate("/admin");
              }, 2000);
            }}
            variant="contained"
            sx={{
              backgroundColor: "#f4b1bb",
              "&:hover": { backgroundColor: "#f4b1bb" },
            }}
          >
            Iniciar Sesión
          </Button>
        </Box>
        <Spinner spinnerToggle={spinner} />
      </Box>
    </Container>
  );
};

export default Login;
