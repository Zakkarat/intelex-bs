import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselStyles } from "../stylesheets/style-components";
import { carouselItems } from "../libs/carousel.json";

const Presentation = () => {
  return (
    <CarouselStyles>
      <Carousel className="space-between-blocks">
        {carouselItems.map(item => {
          
          return <Carousel.Item>
            <img
              height={500}
              className="d-block w-100"
              src={require( `${ item.image }` )}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        })}
      </Carousel>
    </CarouselStyles>
  );
};

export default Presentation;
