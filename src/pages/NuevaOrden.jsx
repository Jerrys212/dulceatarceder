import {
  AddIcon,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "../exports/index";

const NuevaOrden = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Typography variant="h5" component="div" sx={{ marginBottom: "10px" }}>
          Productos
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card>
              <CardMedia component="img" height="150" image={"/crepas.avif"} />
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
                    startIcon={<AddIcon />}
                    sx={{
                      backgroundColor: "#f4b1bb",
                      "&:hover": { backgroundColor: "#f4b1bb" },
                    }}
                  >
                    Agregar
                  </Button>
                </Stack>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardMedia component="img" height="150" image={"/crepas.avif"} />
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
                    startIcon={<AddIcon />}
                    sx={{
                      backgroundColor: "#f4b1bb",
                      "&:hover": { backgroundColor: "#f4b1bb" },
                    }}
                  >
                    Agregar
                  </Button>
                </Stack>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h5"
          component="h5"
          sx={{ marginBottom: "10px", textAlign: "center" }}
        >
          Resumen
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NuevaOrden;
