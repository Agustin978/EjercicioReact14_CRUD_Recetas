import React from "react";
import { Col, Card } from "react-bootstrap";
import "../../../App.css";
import { Link } from "react-router-dom";

const CardReceta = ({ receta }) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="RecetaCard">
        <Card.Img className="RecetaCard-img" variant="top" src={receta.imagen} />
        <Card.Body>
          <Card.Title>{receta.nombrePlatillo}</Card.Title>
          <Card.Text className="RecetaCard-desc">{receta.descripcion}</Card.Text>
          <Link to={`/receta/${receta._id}`} className="btn btn-primary">Ver detalle</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
