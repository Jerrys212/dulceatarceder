import { Backdrop, CircularProgress } from "../exports/index";

const Spinner = ({ spinnerToggle }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={spinnerToggle}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Spinner;
