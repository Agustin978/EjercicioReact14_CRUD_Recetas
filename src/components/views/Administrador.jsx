import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemReceta from "./receta/ItemReceta";
import { useEffect, useState } from "react";
import { obtenerRecetas } from "../helpers/queries";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    obtenerRecetas()
      .then((respuesta) => {
        //console.log(respuesta);
        setRecetas(respuesta);
      })
      .catch((error) => {
        //console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo obtener el listado de recetas. Por favor, intenta nuevamente más tarde.',
        });
      });
  }, []);

  const eliminarReceta = (_id) => {
    setRecetas(recetas.filter((platillo) => platillo._id !== _id));
  };

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Recetas disponibles</h1>
        <Link className="btn btn-success" to="/administrador/crear">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Receta</th>
            <th>Descripcion</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {recetas.map((platillo) => (
            <ItemReceta key={platillo._id} platillo={platillo} eliminarReceta={eliminarReceta} />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
