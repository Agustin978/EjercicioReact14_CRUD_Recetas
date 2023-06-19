import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { APIBorrarReceta } from "../../helpers/queries";

const ItemReceta = ({ platillo, eliminarReceta }) => {
  const borrarReceta = () => {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este platillo?',
      text: "No se podrá revertir este proceso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        APIBorrarReceta(platillo.id)
          .then((respuesta) => {
            if (respuesta.status === 200) {
              Swal.fire(
                'Platillo eliminado',
                `El platillo ${platillo.nombrePlatillo} fue eliminado`,
                'success'
              );
              eliminarReceta(platillo.id);
            } else {
              Swal.fire(
                'Se produjo un error',
                'Intenta realizar esta operación mas tarde',
                'error'
              );
            }
          })
          .catch((error) => {
            Swal.fire(
              'Se produjo un error',
              'Intenta realizar esta operación mas tarde',
              'error'
            );
          });
      }
    });
  };

  return (
    <tr>
      <td>{platillo.id}</td>
      <td>{platillo.nombrePlatillo}</td>
      <td className="truncado">{platillo.descripcion}</td>
      <td className="truncado">{platillo.imagen}</td>
      <td>{platillo.categoria}</td>
      <td>
        <Link className="btn btn-warning me-2" to={`/administrador/editar/${platillo.id}`}>
          Editar
        </Link>
        <Button variant="danger" onClick={borrarReceta}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;