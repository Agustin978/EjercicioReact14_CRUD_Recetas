import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const CardReceta = ({ receta }) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src={receta.imagen} />
        <Card.Body>
          <Card.Title>{receta.nombrePlatillo}</Card.Title>
          <Card.Text>{receta.descripcion}</Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
