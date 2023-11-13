import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  DeleteIcon,
  EditNoteIcon,
  Stack,
  Typography,
} from "../exports/index";

const Producto = ({ nombre, descripcion, categoria }) => {
  return (
    <Card>
      <CardMedia component="img" height="300" image={`/${categoria}.avif`} />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: "10px" }}>
          {nombre}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {descripcion}
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
  );
};

export default Producto;
