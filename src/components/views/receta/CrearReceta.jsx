import React from "react";
import { Form, Button } from "react-bootstrap";

const CrearReceta = () => {
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Cafe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 50" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opción</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fría">Bebida fría</option>
            <option value="postre">Postre</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </section>
  );
};

export default CrearReceta;
