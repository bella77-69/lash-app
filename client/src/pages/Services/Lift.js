import React from "react";
import { Link } from "react-router-dom";
import FaqLift from "../../components/FAQ/FaqLift";

function Lift(props) {
  return (
    <section className="lash">
      Lash Lifts
      <div className="lash-container">
        <h2 className="lash-title">What is a Lash Lift?</h2>
        <p className="lash-about">
          A Lash Lift is a semi-permanent lash treatment that gives your natural
          lashes the appearance of being perfectly curled, longer, and darker
          with added definition. It is a great alternative to eyelash extensions
          as it requires very little maintenance! You can also make it a lash
          lift and tint for that extra pop of definition and to make it even
          more low maintenance! We have also switched to a new lash lift system
          called Inlei® Lash Filler, it helps to nourish your lashes to make
          them thicker and healthier with each treatment!
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
        <FaqLift />
      </div>
    </section>
  );
}

export default Lift;
