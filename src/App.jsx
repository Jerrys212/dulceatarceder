import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Ordenes from "./pages/Ordenes";
import Orden from "./pages/Orden";
import Ventas from "./pages/Ventas";
import Productos from "./pages/Productos";
import NuevaOrden from "./pages/NuevaOrden";
import FormularioProductos from "./pages/FormularioProductos";
import { ProductosProvider } from "./context/ProductosContext";
import LayoutPrivate from "./components/LayoutPrivate";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>

        <ProductosProvider>
          <Routes>
            <Route exact path="/admin" element={<LayoutPrivate />}>
              <Route index element={<Ordenes />} />
              <Route exact path="nuevaOrden" element={<NuevaOrden />} />
              <Route exact path="orden/:id" element={<Orden />} />
              <Route exact path="ventas" element={<Ventas />} />
              <Route exact path="productos" element={<Productos />} />
              <Route
                exact
                path="formulario-productos"
                element={<FormularioProductos />}
              />
            </Route>
          </Routes>
        </ProductosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
