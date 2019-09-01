import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselStyles } from "../stylesheets/style-components";
import { carouselItems } from "../libs/carousel.json";
import { carouselImages } from "../assets/bundle"

const Presentation = () => {
  return (
    <CarouselStyles>
      <Carousel className="mt-3">
        {carouselItems.map((item, i) => {
          return <Carousel.Item key={i}>
            <img
              height={300}
              className="d-block w-100 border-round"
              src={carouselImages[i]}
              alt="First slide"
            />
            <Carousel.Caption className="text-visible">
              <h2>First slide label</h2>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        })}
      </Carousel>
    </CarouselStyles>
  );
};

export default Presentation;
