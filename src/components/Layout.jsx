import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "../exports/index";

const Layout = () => {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: "50px", paddingBottom: "50px" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
