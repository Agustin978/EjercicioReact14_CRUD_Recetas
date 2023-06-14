import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import CardReceta from "./receta/CardReceta";
const Inicio = () => {
  return (
    <section className="mainSection">   
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://goldbelly.imgix.net/uploads/showcase_media_asset/video_preview_image/193941/Fathers_Day-2023-2pizza.jpg?ixlib=rails-3.0.2"
            alt="Imagen de slider 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://goldbelly.imgix.net/uploads/showcase_media_asset/video_preview_image/193939/Fathers_Day-2023-2sandwiches_gift.jpg?ixlib=rails-3.0.2"
            alt="Imagen de slider 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.compliments.ca/wp-content/uploads/2021/10/simple_holiday_desserts-1536x432.jpg"
            alt="Imagen de slider 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://goldbelly.imgix.net/uploads/showcase_media_asset/video_preview_image/637/Shop-by-Cuisine-Collection-Banner-1200x557-Template-1Medi_Food_Collection_hero_2.jpg?ixlib=rails-3.0.2"
            alt="Imagen de slider 4"
          />
        </Carousel.Item>
      </Carousel>
      <Container>
        <h1 className="display-4 text-center mt-5">Nuestras recetas</h1>
        <hr />
        <Row>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio