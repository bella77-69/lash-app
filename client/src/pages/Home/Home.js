import React from "react";
import Hero from "../../components/Hero/Hero";
import "./Home.scss";
import Services from "../../components/Services/Services";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Services />
    </div>
  );
}
export default Home;
