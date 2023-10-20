import { useParams } from "react-router-dom";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  Stack,
  Button,
  EditNoteIcon,
  CheckCircleOutlineIcon,
} from "../exports/index";

const Orden = () => {
  const { id } = useParams();

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
        Orden {id}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
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
            endIcon={<CheckCircleOutlineIcon />}
            sx={{
              backgroundColor: "#f4b1bb",
              "&:hover": { backgroundColor: "#f4b1bb" },
            }}
          >
            Terminar
          </Button>
        </Stack>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Imagen"
              height="200"
              image="waffles.jpg"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="h5"
                sx={{ marginBottom: "20px" }}
              >
                Waffle Platano
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginBottom: "20px" }}
              >
                Queso Philadephia, Nutella y Platano.
              </Typography>
              <Divider />

              <Typography
                variant="h5"
                component="h5"
                sx={{ marginTop: "10px", marginBottom: "10px" }}
              >
                Toppings:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Pretzels" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Panditas" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Imagen"
              height="200"
              image="waffles.jpg"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="h5"
                sx={{ marginBottom: "20px" }}
              >
                Waffle Platano
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginBottom: "20px" }}
              >
                Queso Philadephia, Nutella y Platano.
              </Typography>
              <Divider />

              <Typography
                variant="h5"
                component="h5"
                sx={{ marginTop: "10px", marginBottom: "10px" }}
              >
                Toppings:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Pretzels" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Panditas" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Imagen"
              height="200"
              image="waffles.jpg"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="h5"
                sx={{ marginBottom: "20px" }}
              >
                Waffle Platano
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginBottom: "20px" }}
              >
                Queso Philadephia, Nutella y Platano.
              </Typography>
              <Divider />

              <Typography
                variant="h5"
                component="h5"
                sx={{ marginTop: "10px", marginBottom: "10px" }}
              >
                Toppings:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Pretzels" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Panditas" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Orden;
