import React from "react";
import { Link } from "react-router-dom";
import Faq from "../../components/FAQ/Faq";

function Russian(props) {
  return (
    <section className="lash">
      Hybrid Lashes
      <div className="lash-container">
        <h2 className="lash-title">What are Hybrid Lash Extensions?</h2>
        <p className="lash-about">
          Craving something more? Russian Volume is a technique where multiple
          ultra-fine lashes are applied to your natural lashes, giving a look
          full of dimension and texture. Skillfully applied fans of 3-5
          ultra-lightweight lashes are attached to each of your natural lashes,
          creating a fluffy, dark, luscious set of lashes. Volume lashes can be
          made to be more subtle and natural, or intense and dramatic.
          Consultation to determine your desired look is included in the
          appointment.
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

export default Russian;