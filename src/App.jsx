import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";

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
          <Route path="ordenes" element={<Admin />} />
          <Route path="ventas" element={<Admin />} />
          <Route path="productos" element={<Admin />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
