import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import image from "../../Assets/Images/hybrid.jpg";

function Hybrid(props) {
  return (
    <section className="lash">
      <Title title="Hybrid Lashes" />
      <div className="lash-container">
        <div className="lash-img">
          <img src={image} className="lash-image" alt="classic-lashes" />
        </div>
        <Title title="What are Hybrid Lash Extensions?" />
        <p className="lash-about">
          It’s called Hybrid because it blends the fluffiness and richness of
          Russian Volume with the darkness and length of Classic lashes. Hybrid
          is a very versatile style and can go more natural, or more dramatic;
          more textured, or more simple. If you’re not ready to go full Volume
          with your lashes, Hybrid would be your best bet for a slightly fuller
          than natural-looking set with more density and texture than Classic
          lash extensions.
        </p>
      </div>
      <div>
        <p className="lash-about">
          Not ready to go Full Volume? The fluffiness and richness of Russian
          Volume lashes blended with the simplicity, darkness and length of
          Classic lashes. Best for textured, full sets that aren't overly
          dramatic. The best of both worlds. Consultation to determine your
          desired look is included in the appointment.
        </p>
      </div>
      <div>
        <div className="lash-faq">
          <Link to="/services/faq" className="lash-link">
            <button className="lash-btn">faq</button>
          </Link>

          <Link to="/">
            <button className="lash-btn">Back to Homepage</button>
          </Link>

          <Link to="/services">
            <button className="lash-btn">Back to Services Page</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hybrid;
