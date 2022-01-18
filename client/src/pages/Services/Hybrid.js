import React from "react";
import { Link } from "react-router-dom";
import Faq from "../../components/FAQ/Faq";

function Hybrid(props) {
  return (
    <section className="lash">
      Hybrid Lashes
      <div className="lash-container">
        <h2 className="lash-title">What are Hybrid Lash Extensions?</h2>
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
        <p>
          Not ready to go Full Volume? The fluffiness and richness of Russian
          Volume lashes blended with the simplicity, darkness and length of
          Classic lashes. Best for textured, full sets that aren't overly
          dramatic. The best of both worlds. Consultation to determine your
          desired look is included in the appointment.
        </p>
      </div>
      <div>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
        <p>
          <Link to="/services">Back to Services Page</Link>.
        </p>
      </div>
      <div>
        <Faq />
      </div>
    </section>
  );
}

export default Hybrid;
