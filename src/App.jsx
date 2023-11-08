import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import Ordenes from "./pages/Ordenes";
import Orden from "./pages/Orden";
import Ventas from "./pages/Ventas";
import Productos from "./pages/Productos";
import NuevaOrden from "./pages/NuevaOrden";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
      <Routes>
        <Route exact path="/admin" element={<Layout />}>
          <Route index element={<Admin />} />
          <Route exact path="ordenes" element={<Ordenes />} />
          <Route exact path="nuevaOrden" element={<NuevaOrden />} />
          <Route exact path="orden/:id" element={<Orden />} />
          <Route exact path="ventas" element={<Ventas />} />
          <Route exact path="productos" element={<Productos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
