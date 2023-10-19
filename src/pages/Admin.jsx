import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "../exports/index";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "700",

          marginBottom: "32px",
        }}
      >
        Panel de Administración
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" height="300" image={"/ordenes.jpg"} />
            <CardContent>
              <Typography variant="h5" component="div">
                Ordenes
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Visualiza todas las ordenes pendientes o que ya fueron
                entregadas.
              </Typography>
            </CardContent>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f4b1bb",
                  marginBottom: " 20px",
                  "&:hover": { backgroundColor: "#f4b1bb" },
                }}
                onClick={() => navigate("ordenes")}
              >
                Ir
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" height="300" image={"/ventas.jpg"} />
            <CardContent>
              <Typography variant="h5" component="div">
                Ventas
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Visualiza las ventas que has tenido durante el dia actual o
                anteriores.
              </Typography>
            </CardContent>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f4b1bb",
                  marginBottom: " 20px",
                  "&:hover": { backgroundColor: "#f4b1bb" },
                }}
                onClick={() => navigate("ventas")}
              >
                Ir
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" height="300" image={"/productos.jpg"} />
            <CardContent>
              <Typography variant="h5" component="div">
                Productos
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Administra tus productos actuales, puedes agregar o quitar
              </Typography>
            </CardContent>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f4b1bb",
                  marginBottom: " 20px",
                  "&:hover": { backgroundColor: "#f4b1bb" },
                }}
                onClick={() => navigate("productos")}
              >
                Ir
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Admin;
