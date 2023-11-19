import { Snackbar, Alert } from "../exports/index";

const Snack = ({ snackbar, handleCloseSnackbar }) => {
  return (
    <Snackbar
      open={snackbar.flag}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleCloseSnackbar}
        severity={snackbar.tipo}
        sx={{ width: "100%" }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default Snack;
