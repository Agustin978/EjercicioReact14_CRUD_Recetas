import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
//import Administrador from "./components/views/Administrador";
//import CrearReceta from "./components/views/receta/CrearReceta"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/views/Login";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import { useState } from "react";

function App() {
  const usuarioEnStorage = JSON.parse(sessionStorage.getItem('user')) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioEnStorage);

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        {/*<Route exact path="/administrador" element={<Administrador></Administrador>}></Route>*/}
        {/*<Route exact path="/administrador/crear" element={<CrearReceta></CrearReceta>}></Route>*/}
        <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
        <Route path="/administrador/*" element={
          <RutasProtegidas>
            <RutasAdministrador></RutasAdministrador>
          </RutasProtegidas>
        }></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
