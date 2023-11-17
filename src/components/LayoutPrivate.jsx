import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "../exports/index";
import useAuth from "../hooks/useAuth";
import Spinner from "./Spinner";

const LayoutPrivate = () => {
  const { auth, cargando } = useAuth();

  console.log(auth);

  if (cargando) return <Spinner spinnerToggle={cargando} />;

  return (
    <>
      <Header />
      <Container sx={{ marginTop: "50px", paddingBottom: "50px" }}>
        {auth?._id ? <Outlet /> : <Navigate to="/" />}
      </Container>
    </>
  );
};

export default LayoutPrivate;
