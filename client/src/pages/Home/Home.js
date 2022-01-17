import React, { Component } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Hero from "../../components/Hero/Hero";

const images = [
  "img-01.jpg",
  "img-02.jpg",
  "img-03.jpg",
  "img-04.jpg",
  "img-05.jpg",
  "img-06.jpg",
];

class Home extends Component {
  render() {
    return (
      <div className="row " id="Body">
        <Hero />
        <Carousel images={images} />
      </div>
    );
  }
}

export default Home;
