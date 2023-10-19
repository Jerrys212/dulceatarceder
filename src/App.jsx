import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import Ordenes from "./pages/Ordenes";
import Orden from "./pages/Orden";
import Ventas from "./pages/Ventas";
import Productos from "./pages/Productos";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Admin />} />
          <Route path="ordenes" element={<Ordenes />} />
          <Route path="orden/:id" element={<Orden />} />
          <Route path="ventas" element={<Ventas />} />
          <Route path="productos" element={<Productos />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
