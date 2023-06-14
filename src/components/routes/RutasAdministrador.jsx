import { Route, Routes } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearReceta from "../views/receta/CrearReceta";
import EditarReceta from "../views/receta/EditarReceta";

const RutasAdministrador = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Administrador></Administrador>}></Route>
                <Route exact path="/crear" element={<CrearReceta></CrearReceta>}></Route>
                <Route exact path="/editar" element={<EditarReceta></EditarReceta>}></Route>
            </Routes>
        </div>
    );
};

export default RutasAdministrador;