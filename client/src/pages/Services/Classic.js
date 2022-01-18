import React from "react";
import { Link } from "react-router-dom";
import Faq from "../../components/FAQ/Faq";

function Classic() {
  return (
    <section className="lash">
      Classic Lashes
      <div className="lash-container">
        <h2 className="lash-title">What are Classic Lash Extensions?</h2>
        <p className="lash-about">
          Classic is a technique used in eyelash extensions where one synthetic
          lash is carefully applied to each natural lash. A variety of lengths,
          curls and thicknesses are used to provide a textured and flattering
          set to every client. Classic lashes should make people double take
          whether or not they are actually yours. In other words, look put
          together without looking made-
        </p>
      </div>
      <div>
        <p>
          Using a variety of lengths, curls, and thicknesses to provide a
          textured and flattering set to every client. Classic means one
          synthetic lash that is carefully applied to each natural lash. This
          style of lashes should make people double-take whether or not they are
          actually yours - like you have found the Unicorn of Mascaras. In other
          words, NO SPIDER EYES here. Look put together without looking made-up!
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

export default Classic;
