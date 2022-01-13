import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <div>
          <img src="../img-01.jpg" />
        </div>
        <div>
          <img src="../img-02.jpg" />
        </div>
        <div>
          <img src="../img-03.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
