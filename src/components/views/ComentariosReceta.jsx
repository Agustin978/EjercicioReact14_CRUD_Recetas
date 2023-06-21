import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { obtieneComentarios } from "../helpers/queries";
import Swal from "sweetalert2";

const ComentariosReceta = ({id_receta}) => {
    const [comentarios, setComentarios] = useState([]);
    useEffect(()=>
    {
        obtieneComentarios(id_receta).then(respuesta => 
            {
                if(respuesta)
                {
                    setComentarios(respuesta);
                }else
                {
                    Swal.fire('Error', 'Hay inconvenientes para conectarse a la base de datos actualmente. Por favor, Intenta nuevamente mas tarde.', 'error');
                }
            })
    },[])
    return (
        <>
            {comentarios.map((comentario) =>(
                <Card key={comentario.id} className="my-2">
                    <Card.Header className="h6">{comentario.nombreUsuario}</Card.Header>
                    <Card.Body>
                        <Card.Text>{comentario.comentario}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default ComentariosReceta;