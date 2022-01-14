import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.scss';

export default function CarouselComponent() {
  return (
    <div className="carousel">
      <Carousel>
        <div className="carousel-wrapper">
          <img src="../img-01.jpg" className="carousel-img" alt="carousel-img"/>
        </div>
        <div className="carousel-wrapper" >
          <img src="../img-02.jpg" alt="carousel-img"/>
        </div>
        <div className="carousel-wrapper" >
          <img src="../img-03.jpg" alt="carousel-img"/>
        </div>
        <div className="carousel-wrapper" >
          <img src="../img-04.jpg" alt="carousel-img"/>
        </div>
        <div className="carousel-wrapper" >
          <img src="../img-05.jpg" alt="carousel-img"/>
        </div>
        {/* <div className="carousel-wrapper" >
          <img src="../img-06.jpg" alt="carousel-img"/>
        </div> */}
      </Carousel>
    </div>
  );
}
