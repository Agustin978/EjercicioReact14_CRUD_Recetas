import { Container, Card, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useParams } from "react-router-dom";
import { obtenerReceta } from "../helpers/queries";
import DejaComentario from "./DejaComentario";

const InfoReceta = ({usuarioLogueado}) => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    obtenerReceta(id)
      .then((receta) => {
        setReceta(receta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img variant="top" src={receta?.imagen} />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{receta?.nombrePlatillo}</Card.Title>
              <hr />
              <Card.Text>
                {receta?.descripcion}
                <br />
                <br />
                <span className="text-danger fw-semibold">Categoria:</span>{" "}
                {receta?.categoria}
                <br />
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      {/*Aqui debo colocar los comentarios*/}
      <DejaComentario receta={receta} usuarioLogueado={usuarioLogueado}></DejaComentario>
    </Container>
  );
};

export default InfoReceta;