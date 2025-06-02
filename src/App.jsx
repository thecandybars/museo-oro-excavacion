import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Mapa from "./pages/mapa/MapaIndex";
import Casa from "./pages/casa/Casa";
import Excavacion from "./pages/excavacion/Excavacion";
import Piezas from "./pages/piezas/Piezas";
import Layout from "./layout/Layout";
import Inicio from "./pages/inicio/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="mapa" element={<Mapa />} />
          <Route path="casa" element={<Casa />} />
          <Route path="excavacion" element={<Excavacion />} />
          <Route path="piezas" element={<Piezas />} />
          <Route path="*" element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
