import { useState } from "react";
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
  Tab,
  Tabs,
} from "../exports/index";
import TabPanel from "../components/TabPanel";
import useProductos from "../hooks/useProductos";

const NuevaOrden = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { productos } = useProductos();

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Productos" />
        <Tab label="Resumen" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography
          variant="h5"
          component="div"
          sx={{ marginBottom: "20px", textAlign: "center" }}
        >
          Productos
        </Typography>

        <Grid container spacing={2}>
          {productos.map((producto) => (
            <Grid item xs={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="150"
                  image={"/crepas.avif"}
                />
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
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Resumen
      </TabPanel>
    </Box>
  );
};

export default NuevaOrden;
